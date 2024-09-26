import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { requester } from '../lib/api';
import { useUserStore } from '../stores/userStore';

export default function SplashScreen({ navigation }) {
  const refreshUserData = useUserStore(s => s.refreshUserData)
  useEffect(() => {
    const timer = setTimeout(async () => {
      const token = await requester.getToken();
      console.log("SAVED TOKEN", token)
      
      if (token) {
        refreshUserData()
        navigation.replace('Main');
      } else {
        navigation.replace('Agreement');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Logo.png')} style={styles.logo} />
      <Text style={styles.text}>SaveQuest</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#272727',
  },
  logo: {
    width: 150,
    height: 150,
  },
  text: {
    marginTop: 20,
    fontSize: 40,
    fontWeight: '200px',
    fontFamily: 'WantedSans-Bold',
    color: '#fff',
  },
});
