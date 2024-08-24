import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { styles } from '../styles/AgreementScreenStyles';  // 스타일 파일 경로를 가져옵니다

export default function AgreementScreen({ navigation, setAgreed }) {
  const [allChecked, setAllChecked] = useState(false);
  const [terms, setTerms] = useState({
    service: false,
    privacy: false,
    openBanking: false,
    thirdParty: false,
    identity: false,
    marketing: false,
  });
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Pretendard-Regular': require('../assets/fonts/Pretendard-Regular.otf'),
        'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.otf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  const toggleAll = () => {
    const newValue = !allChecked;
    setAllChecked(newValue);
    setTerms({
      service: newValue,
      privacy: newValue,
      openBanking: newValue,
      thirdParty: newValue,
      identity: newValue,
      marketing: newValue,
    });
  };

  const toggleCheckbox = (key) => {
    const newTerms = { ...terms, [key]: !terms[key] };
    setTerms(newTerms);
    setAllChecked(Object.values(newTerms).every((value) => value === true));
  };

  const handleNext = () => {
    if (terms.service && terms.privacy && terms.openBanking && terms.thirdParty && terms.identity) {
      setAgreed(true);
      navigation.navigate('Verification'); 
    } else {
      Alert.alert('필수 항목에 모두 동의해 주세요.'); 
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.agreementTitle}>약관동의</Text>
  
      <Text style={styles.title}>
        SaveQuest{'\n'}
        <Text style={styles.highlight}>약관 동의</Text>가 필요해요
      </Text>
  
      <TouchableOpacity
        style={[
          styles.allCheckboxContainer,
          { borderColor: allChecked ? '#389348' : '#ccc' }
        ]}
        onPress={toggleAll}
      >
        <Ionicons
          name="checkmark"
          size={24}
          color={allChecked ? "#389348" : "#ccc"}
        />
        <Text style={[styles.allCheckboxText, { color: allChecked ? '#389348' : '#ccc' }]}>
          서비스 이용약관 전체동의
        </Text>
      </TouchableOpacity>
  
      <Text style={styles.noticeTitle}>유의사항</Text>
  
      <Text style={styles.notice}>
        SaveQuest 서비스는 만 17세 이상만 이용할 수 있으며, 만 17세 미만의 경우 서비스 가입이 제한될 수 있습니다.
      </Text>
  
      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkboxItem} onPress={() => toggleCheckbox('service')}>
          <View style={[styles.checkboxIconContainer, terms.service && styles.checked]}>
            <Ionicons
              name="checkmark"
              size={16}
              color={terms.service ? "#fff" : "#888"}
            />
          </View>
          <Text style={styles.checkboxText}>SaveQuest 서비스 이용약관 (필수)</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.checkboxItem} onPress={() => toggleCheckbox('privacy')}>
          <View style={[styles.checkboxIconContainer, terms.privacy && styles.checked]}>
            <Ionicons
              name="checkmark"
              size={16}
              color={terms.privacy ? "#fff" : "#888"}
            />
          </View>
          <Text style={styles.checkboxText}>개인정보 수집 이용 동의 (필수)</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.checkboxItem} onPress={() => toggleCheckbox('openBanking')}>
          <View style={[styles.checkboxIconContainer, terms.openBanking && styles.checked]}>
            <Ionicons
              name="checkmark"
              size={16}
              color={terms.openBanking ? "#fff" : "#888"}
            />
          </View>
          <Text style={styles.checkboxText}>오픈뱅킹서비스 수집 · 이용 · 제공 전체 동의 (필수)</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.checkboxItem} onPress={() => toggleCheckbox('thirdParty')}>
          <View style={[styles.checkboxIconContainer, terms.thirdParty && styles.checked]}>
            <Ionicons
              name="checkmark"
              size={16}
              color={terms.thirdParty ? "#fff" : "#888"}
            />
          </View>
          <Text style={styles.checkboxText}>본인인증/전자서명을 위한 개인정보 제3자 제공동의 (필수)</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.checkboxItem} onPress={() => toggleCheckbox('identity')}>
          <View style={[styles.checkboxIconContainer, terms.identity && styles.checked]}>
            <Ionicons
              name="checkmark"
              size={16}
              color={terms.identity ? "#fff" : "#888"}
            />
          </View>
          <Text style={styles.checkboxText}>본인 확인 서비스 전체 동의 (필수)</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.checkboxItem} onPress={() => toggleCheckbox('marketing')}>
          <View style={[styles.checkboxIconContainer, terms.marketing && styles.checked]}>
            <Ionicons
              name="checkmark"
              size={16}
              color={terms.marketing ? "#fff" : "#888"}
            />
          </View>
          <Text style={styles.checkboxText}>마케팅 이용에 대한 동의 (선택)</Text>
        </TouchableOpacity>
      </View>
  
      <TouchableOpacity
        style={[
          styles.submitButton,
          terms.service && terms.privacy && terms.openBanking && terms.thirdParty && terms.identity
            ? styles.submitButtonActive
            : styles.submitButtonInactive
        ]}
        onPress={handleNext}
        disabled={!terms.service || !terms.privacy || !terms.openBanking || !terms.thirdParty || !terms.identity}
      >
        <Text style={[
          styles.submitButtonText,
          terms.service && terms.privacy && terms.openBanking && terms.thirdParty && terms.identity
            ? styles.submitButtonTextActive
            : styles.submitButtonTextInactive
        ]}>다음</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
