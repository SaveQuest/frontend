import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Header from '../components/Header';
import CameraIcon from '../components/CameraIcon';
import ShareSection from '../Share/ShareSection ';
import BeforeQuest from '../components/BeforeQuest';
import MyroomIcon from '../components/MyroomIcon';
import { useApi } from '../hooks/useApi';
import { requester } from '../lib/api';
import { useUserStore } from '../stores/userStore';
import Skeleton from 'react-native-reanimated-skeleton';

const ProfileScreen = ({ navigation }) => {
  const { state: profileData } = useApi(() => requester.fetchProfile(), "PROFILE")
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

    if (!pickerResult.canceled && pickerResult.assets[0]) {
      const formData = new FormData();
      formData.append('image', {
        uri: pickerResult.assets[0].uri,
        type: pickerResult.assets[0].mimeType,
      });
      const response = await requester.updateProfileImage(formData);
      console.log(response);
    }
  };

  const userData = useUserStore(s => s.data)

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.topSection}>
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>{userData.name}</Text>

            {profileData.tag && <>{
              profileData ? <>
                <View style={styles.subtitleContainer}>
                  <Text style={styles.profileSubtitle}>{profileData.tag}</Text>
                </View>
              </> : <>
                <Skeleton layout={[{ id: "zq", width: "100%", height: 72 }]} containerStyle={{}} />
              </>
            }</>}
          </View>

          <View style={styles.profileImageContainer}>
            <Image source={profileData.profileImage ? { uri: profileData.profileImage } : require("../assets/Logo.png")} style={styles.profileImage} />
            <TouchableOpacity style={styles.cameraIcon} onPress={handleCameraIconPress}>
              <CameraIcon />
            </TouchableOpacity>
          </View>
        </View>

        {
          profileData ? <>
            {profileData.element.map(e => {
              return <View style={styles.moneyInfoRow} key={e.name}>
                <Text style={styles.moneyLabelRow}>{e.name}</Text>
                <Text style={styles.moneyAmountRow}>{e.value}</Text>
              </View>
            })}
          </> : <>
            <Skeleton layout={[{ id: "zq", width: "100%", height: 100 }]} containerStyle={styles.moneyInfoRow} />
          </>
        }

        <View style={styles.separator} />
        {
          profileData ? <>
            <View style={styles.levelBarSection}>
              <View style={styles.levelTextContainer}>
                <Text style={styles.levelLabelText}>Lv.</Text>
                <Text style={styles.levelNumberText}>{profileData.level}</Text>
              </View>
              <View style={styles.levelBarContainer}>
                <View style={styles.levelBarFill} />
              </View>
            </View>
          </> : <>
            <Skeleton layout={[{ id: "zq", width: "100%", height: 42 }]} containerStyle={styles.moneyInfoRow} />
          </>
        }


        <TouchableOpacity style={styles.myRoom} navigation={navigation} onPress={() => { navigation.navigate("MyRoom") }}>
          <View style={{ alignItems: 'center', gap: 5 }}>
            <MyroomIcon />
            <Text style={{ color: '#43B319', fontSize: 18 }}>마이룸</Text>
          </View>
        </TouchableOpacity>

        {
          profileData ? <>
            <BeforeQuest {...profileData.questLog} />
          </> : <>
            <Skeleton layout={[{ id: "zq", width: "100%", height: 100 }]} containerStyle={styles.moneyInfoRow} />
          </>
        }
      </ScrollView>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F6', paddingTop: 6,
    paddingHorizontal: 5,
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },

  myRoom: {
    width: '100%',
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
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
});

export default ProfileScreen;
