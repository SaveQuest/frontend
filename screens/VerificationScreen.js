import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function VerificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>나중에 더 만들예정
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold', 
    color: '#333', 
  },
});
