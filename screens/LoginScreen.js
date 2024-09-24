import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = () => {
    // 로그인 처리 후 VerificationScreen으로 이동
    navigation.navigate('VerificationScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SaveQuest에 로그인하기</Text>

      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="휴대폰 번호"
        keyboardType="phone-pad"
      />

      <Button title="확인" onPress={handleLogin} />
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
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    fontSize: 18,
    paddingVertical: 10,
    marginBottom: 20,
  },
});

export default LoginScreen;
