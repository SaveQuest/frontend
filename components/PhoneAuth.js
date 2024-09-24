import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';

const VerificationScreen = ({ navigation }) => {
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(180); // 3분 (180초) 타이머

  // 타이머 감소 로직
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const resendCode = () => {
    // 인증번호 다시 받기 로직 추가
    setTimer(180);
  };

  // 6자리 인증번호 입력 체크
  const handleCodeInput = text => {
    if (text.length <= 6) {
      setCode(text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>문자로 받은 인증번호 6자리를 입력해주세요</Text>

      <TextInput
        style={styles.input}
        value={code}
        onChangeText={handleCodeInput}
        placeholder="6자리 숫자"
        keyboardType="numeric"
        maxLength={6}
      />

      <Text style={styles.timer}>{`${String(Math.floor(timer / 60)).padStart(2, '0')}:${String(timer % 60).padStart(2, '0')}`}</Text>

      <TouchableOpacity onPress={resendCode}>
        <Text style={styles.resendText}>문자 다시 받기</Text>
      </TouchableOpacity>

      <Button title="확인" onPress={() => console.log('Code confirmed')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 10,
  },
  timer: {
    fontSize: 16,
    textAlign: 'right',
    marginTop: 10,
    marginBottom: 20,
  },
  resendText: {
    color: '#4CAF50',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 20,
  },
});

export default VerificationScreen;
