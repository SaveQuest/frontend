import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

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

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  agreementTitle: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Pretendard-Regular',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    marginTop: 105,
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontFamily: 'Pretendard-Bold',
  },
  highlight: {
    color: '#389348',
    fontFamily: 'Pretendard-Bold',
  },
  allCheckboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1.2,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    height: 58,
    marginTop: 10,
  },
  allCheckboxText: {
    fontSize: 19,
    color: '#555',
    marginLeft: 8,
    fontWeight: '15',
    fontFamily: 'Pretendard-Bold',
  },
  noticeTitle: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'flex-start',
    fontFamily: 'Pretendard-Bold',
    textAlign: 'left',
  },
  notice: {
    fontSize: 14,
    color: '#888',
    marginTop: 0,
    marginBottom: 30,
    textAlign: 'left',
    fontFamily: 'Pretendard-Regular',
    alignSelf: 'flex-start',
  },
  checkboxContainer: {
    width: '100%',
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  checkboxIconContainer: {
    width: 20,
    height: 20,
    borderRadius: 12,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2,
  },
  checked: {
    backgroundColor: '#389348',
  },
  checkboxText: {
    fontSize: 18,
    color: '#333',
    marginLeft: 10,
    fontFamily: 'Pretendard-Regular',
    flexWrap: 'wrap',
    maxWidth: '72%',
  },
  submitButton: {
    marginTop: 24,
    paddingVertical: 20,
    paddingHorizontal: 80,
    borderRadius: 10,
    width: '100%',
  },
  submitButtonActive: {
    backgroundColor: '#389348',
  },
  submitButtonInactive: {
    backgroundColor: '#E0E0E0',
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Pretendard-Bold',
    textAlign: 'center',
  },
  submitButtonTextActive: {
    color: '#fff',
  },
  submitButtonTextInactive: {
    color: '#A0A0A0',
  },
});
