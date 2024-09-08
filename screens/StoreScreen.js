import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Head from '../components/Header';  
import SafeIcon from '../components/SafeIcon'; 
import Feather from 'react-native-vector-icons/Feather'; 

const StoreScreen = () => {
  return (
    <View style={styles.container}>
      <Head />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.storeContainer}>
          <Text style={styles.storeText}>이곳은 상점입니다</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollView: {
    padding: 20,
  },
  storeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  storeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  headerContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 15,
    paddingVertical: 10, 
    backgroundColor: '#FFF',
  },
});

export default StoreScreen;
