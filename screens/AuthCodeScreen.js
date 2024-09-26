import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import BackIcon from '../components/BackIcon';
import { requester } from '../lib/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthCodeScreen = ({ navigation }) => {
  const [authCode, setAuthCode] = useState('');  
  const [timer, setTimer] = useState(180);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0)); 
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleResendCode = () => {
    setTimer(180); 
  };

  const handleConfirmCode = async () => {
    // console.log("입력한 인증코드:", authCode);
    // const FuckUuid = await AsyncStorage.getItem('CODE_UUID');
    // await requester.authenticate(FuckUuid, authCode);
    navigation.navigate('CardAuthentication');
  };

  return (
    <View style={styles.container}>
      {navigation.canGoBack() && (
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
      )}

      <Text style={styles.title}>문자로 받은{'\n'}인증번호 6자리를 입력해주세요</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={authCode}
          onChangeText={setAuthCode}
          placeholder="6자리 숫자"
          keyboardType="numeric"
          maxLength={6}
          placeholderTextColor="#BDBDBD"
        />
        <Text style={styles.timer}>{formatTime(timer)}</Text>
      </View>

      <TouchableOpacity style={styles.resendButton} onPress={handleResendCode}>
        <Text style={styles.resendButtonText}>문자 다시 받기</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.confirmButton,
          authCode.length === 6 ? styles.confirmButtonActive : styles.confirmButtonInactive,
        ]}
        onPress={handleConfirmCode}
        disabled={authCode.length !== 6}
      >
        <Text
          style={[
            styles.confirmButtonText,
            authCode.length === 6 ? styles.confirmButtonTextActive : styles.confirmButtonTextInactive,
          ]}
        >
          확인
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 80,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#389348', 
    marginBottom: 40,
  },
  input: {
    flex: 1,
    fontSize: 24,
    paddingVertical: 10,
    color: '#333',
  },
  timer: {
    fontSize: 16,
    color: '#666',
  },
  resendButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  resendButtonText: {
    fontSize: 14,
    color: '#333',
  },
  confirmButton: {
    position: 'absolute', 
    bottom: 45, 
    left: 20,
    right: 20, 
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#389348', 
    alignItems: 'center',
  },
  confirmButtonActive: {
    backgroundColor: '#389348',
  },
  confirmButtonInactive: {
    backgroundColor: '#F0F0F0',
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  confirmButtonTextActive: {
    color: '#FFF',
  },
  confirmButtonTextInactive: {
    color: '#333',
  },
});

export default AuthCodeScreen;
