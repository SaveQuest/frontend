import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Header from '../components/Header'; 
import CameraIcon from '../components/CameraIcon';
import MyroomIcon from '../components/MyroomIcon'; 
import StoreIcon from '../components/StoreIcon';
import ShareSection from '../Share/ShareSection ';
import BeforeQuest from '../components/BeforeQuest';

const ProfileScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCameraIconPress = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setSelectedImage(pickerResult.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header home />
      </View>

      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.topSection}>
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>차호림</Text>
            <View style={styles.subtitleContainer}>
              <Text style={styles.profileSubtitle}>절약의 신</Text>
            </View>
          </View>
          <View style={styles.profileImageContainer}>
            {selectedImage ? (
              <Image source={{ uri: selectedImage }} style={styles.profileImage} />
            ) : (
              <View style={styles.profileImagePlaceholder} />
            )}
            <TouchableOpacity style={styles.cameraIcon} onPress={handleCameraIconPress}>
              <CameraIcon />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.moneyInfoRow}>
          <Text style={styles.moneyLabelRow}>지금까지 줄인 소비 금액</Text>
          <Text style={styles.moneyAmountRow}>₩99,000</Text>
        </View>

        <View style={styles.challengeInfoRow}>
          <Text style={styles.challengeLabel}>성공한 도전과제</Text>
          <Text style={styles.challengeAmount}>321개</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.levelBarSection}>
          <View style={styles.levelTextContainer}>
            <Text style={styles.levelLabelText}>Lv.</Text> 
            <Text style={styles.levelNumberText}>998</Text>  
          </View>
          <View style={styles.levelBarContainer}>
            <View style={styles.levelBarFill} />
          </View>
        </View>

        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.menuButton}>
            <MyroomIcon />
            <Text style={styles.menuButtonText}>마이홈</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('StoreScreen')}>
            <StoreIcon />
            <Text style={[styles.menuButtonText, styles.storeText]}>상점</Text>
          </TouchableOpacity>
        </View>

        <ShareSection />
        <BeforeQuest navigation={navigation} />
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
    backgroundColor: '#F3F5F6',  
  },
  scrollView: {
    flexGrow: 1,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileTextContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  profileName: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitleContainer: {
    backgroundColor: '#DCF5E9',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 30,
    marginTop: 10,
    alignItems: 'flex-start',
  },
  profileSubtitle: {
    fontSize: 18,
    color: '#87AD8E',
    fontWeight: 'bold',
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#81c966',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderRadius: 50,
    padding: 5,
  },
  moneyInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  moneyLabelRow: {
    fontSize: 19,
    fontWeight:'bold',
    color: '#7E7E7E',
  },
  moneyAmountRow: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333',
  },
  challengeInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 1,
  },
  challengeLabel: {
    fontSize: 19,
    fontWeight:'bold',
    color: '#7E7E7E',
  },
  challengeAmount: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  separator: {
    borderBottomWidth: 2,
    borderColor: '#BDBDBD',
    marginVertical: 10,
  },
  levelBarSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  levelTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  levelLabelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',  
  },
  levelNumberText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8BC34A',  
  },
  levelBarContainer: {
    flex: 1,
    height: 15,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  levelBarFill: {
    width: '75%', 
    height: '100%',
    backgroundColor: '#8BC34A',
    borderRadius: 10,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  menuButton: {
    backgroundColor: '#ffffff',  
    paddingVertical: 20,
    opacity: 0.7, 
    paddingHorizontal: 40,
    borderRadius: 20,  
    alignItems: 'center',
    width: '45%',
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10, 
    color: '#4683EE', 
  },
  storeText: {
    color: '#E15558',  
  },
});

export default ProfileScreen;
