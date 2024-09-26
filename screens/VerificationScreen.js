import React, { useState, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, TouchableOpacity, Modal, FlatList, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '../components/BackIcon';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/VerificationScreenStyles';
import { useUserStore } from '../stores/userStore';
import { requester } from '../lib/api';

export default function VerificationScreen() {
  const [isFocused, setIsFocused] = useState(false);
  const [name, setName] = useState("");
  const [idNumberPart1, setIdNumber] = useState('');
  const [idNumberPart2, setIdNumberPart2] = useState('');
  const [selectedCarrier, setSelectedCarrier] = useState('통신사 선택');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isIdFocused, setIsIdFocused] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const navigation = useNavigation();

  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const scrollViewRef = useRef(null);

  const carriers = ['SKT', 'KT', 'LG U+', 'SKT(알뜰폰)', 'KT(알뜰폰)', 'LG U+(알뜰폰)'];

  const handleCarrierSelect = (carrier) => {
    setSelectedCarrier(carrier);
    setModalVisible(false);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleLeftInputChange = (text) => {
    setIdNumber(text);
    if (text.length === 6) {
      secondInputRef.current.focus();
    }
  };

  const handleRightInputChange = (text) => {
    if (text.length <= 1) {
      setIdNumberPart2(text);
    }
  };

  const renderCircles = (length, total, isLeft) => {
    const circles = [];

    if (isLeft && length > 0) {
      for (let i = 0; i < total; i++) {
        circles.push(
          <Text key={i} style={styles.circleText}>
            {idNumberPart1[i] || ''}
          </Text>
        );
      }
    } else if (!isLeft) {
      for (let i = 0; i < total; i++) {
        circles.push(
          <Text key={i} style={i === 0 && !idNumberPart2[i] ? styles.circleTextGray : styles.circleText}>
            {idNumberPart2[i] || '●'}
          </Text>
        );
      }
    } else {
      for (let i = 0; i < total; i++) {
        circles.push(
          <Text key={i} style={styles.circleTextGray}>●</Text>
        );
      }
    }

    return circles;
  };

  const setUserData = useUserStore((state) => state.setUserData);
  const onPressSubmit = () => {
    console.log(name, idNumberPart1, idNumberPart2, phoneNumber, selectedCarrier);
    setUserData({ name, idNumber: idNumberPart1 + idNumberPart2, phoneNumber, carrier: selectedCarrier });

    (async () => {
      await AsyncStorage.setItem("NAME", name);
      await AsyncStorage.setItem("ID_NUM", idNumberPart1 + idNumberPart2);
      await AsyncStorage.setItem("CARRIER", selectedCarrier);
      await AsyncStorage.setItem("PHONE_NO", phoneNumber);

      const res = await requester.requestCode(phoneNumber);
      await AsyncStorage.setItem("CODE_UUID", res.uuid);
      navigation.navigate('AuthCode');
    })();
  };

  const isFormComplete = /^\d{6}$/.test(idNumberPart1) && /^\d{1}$/.test(idNumberPart2) && /^010\d{8}$/.test(phoneNumber) && selectedCarrier !== "통신사 선택" && name.length > 0;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            ref={scrollViewRef}
          >
            <View style={styles.container}>
              <View style={styles.headerContainer}>
                {navigation.canGoBack() && (
                  <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                    <BackIcon />
                  </TouchableOpacity>
                )}
                <Text style={styles.title}>본인인증</Text>
              </View>

              <Text style={styles.subtitle}>
                SaveQuest 이용을 위해{'\n'}
                <Text style={{ color: '#389348' }}>로그인</Text>을 해주세요
              </Text>

              <View style={styles.inputContainer}>
                <Text style={[styles.inputLabel, isFocused && { color: '#389348' }]}>이름</Text>
                <TextInput
                  style={[styles.input, isFocused && { borderBottomColor: '#389348' }]}
                  placeholder="이름 입력"
                  placeholderTextColor="#ccc"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  value={name}
                  onChangeText={(txt) => setName(txt)}
                />
              </View>

              <View style={styles.idContainer}>
                <Text style={[styles.inputLabel, isIdFocused && { color: '#389348' }]}>주민등록번호</Text>
                <View style={styles.idInputContainer}>
                  <TouchableOpacity onPress={() => firstInputRef.current.focus()} style={styles.circleContainer}>
                    {renderCircles(idNumberPart1.length, 6, true)}
                  </TouchableOpacity>
                  <Text style={styles.dash}>-</Text>
                  <TouchableOpacity onPress={() => secondInputRef.current.focus()} style={styles.circleContainer}>
                    {renderCircles(idNumberPart2.length, 7, false)}
                  </TouchableOpacity>
                </View>
                <View style={[styles.underline, isIdFocused && { backgroundColor: '#389348' }]} />
              </View>

              <View style={styles.hiddenInputContainer}>
                <TextInput
                  ref={firstInputRef}
                  style={styles.visibleInput}
                  value={idNumberPart1}
                  keyboardType="numeric"
                  maxLength={6}
                  onFocus={() => setIsIdFocused(true)}
                  onBlur={() => setIsIdFocused(false)}
                  onChangeText={handleLeftInputChange}
                  placeholder="주민등록번호"
                />
                <TextInput
                  ref={secondInputRef}
                  style={styles.visibleInput}
                  value={idNumberPart2}
                  keyboardType="numeric"
                  maxLength={1}
                  onFocus={() => setIsIdFocused(true)}
                  onBlur={() => setIsIdFocused(false)}
                  onChangeText={handleRightInputChange}
                  secureTextEntry={false}
                />
              </View>

              <View style={styles.phoneInputContainer}>
                <Text style={[styles.inputLabel, isPhoneFocused && { color: '#389348' }]}>휴대폰번호</Text>
                <View style={styles.phoneInputRow}>
                  <View style={styles.phoneAndCarrierContainer}>
                    <TouchableOpacity
                      style={styles.carrierSelect}
                      onPress={() => setModalVisible(true)}
                    >
                      <View style={styles.carrierSelectInner}>
                        <Text style={styles.carrierSelectText}>{selectedCarrier}</Text>
                        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
                      </View>
                    </TouchableOpacity>
                    <TextInput
                      style={styles.phoneInput}
                      placeholder="휴대폰번호 입력"
                      keyboardType="numeric"
                      value={phoneNumber}
                      onFocus={() => setIsPhoneFocused(true)}
                      onBlur={() => setIsPhoneFocused(false)}
                      onChangeText={setPhoneNumber}
                    />
                  </View>
                </View>
                <View style={[styles.underline, isPhoneFocused && { backgroundColor: '#389348' }]} />
              </View>
            </View>
          </ScrollView>

          <TouchableOpacity
            style={[
              styles.submitButton,
              isFormComplete ? styles.submitButtonActive : styles.submitButtonInactive,
            ]}
            onPress={onPressSubmit}
            disabled={!isFormComplete}
          >
            <Text
              style={[
                styles.submitButtonText,
                isFormComplete ? styles.submitButtonTextActive : styles.submitButtonTextInactive
              ]}
            >
              다음
            </Text>
          </TouchableOpacity>

          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
          >
            <TouchableOpacity style={styles.modalContainer} onPress={() => setModalVisible(false)}>
              <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
                <Text style={styles.modalTitle}>통신사</Text>
                <FlatList
                  data={carriers}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.modalItem}
                      onPress={() => handleCarrierSelect(item)}
                    >
                      <Text style={styles.modalItemText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
