import React, { useState } from 'react';
import { TextInput, Modal, View, Text, StyleSheet, TouchableOpacity, Image, Linking, Alert, TouchableWithoutFeedback, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useApi } from '../hooks/useApi';
import { requester } from '../lib/api';
import { useUserStore } from '../stores/userStore';

const NameModal = ({ visible, onClose, onSubmit }) => {
  const [txt, setTxt] = useState("")

  return <Modal
    visible={visible}
    transparent={true}
    onRequestClose={onClose}>
    <Pressable style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "rgba(0,0,0,0.5)"
    }}
      onPress={onClose}>
      <TouchableWithoutFeedback>
        <View style={{
          borderRadius: 12,
          backgroundColor: "white",
          padding: 20,
          borderColor: "#e4e4e4",
          borderWidth: 1,
          width: "70%"
        }}>
          <Text style={{
            fontFamily: "WantedSans-SemiBold",
            fontSize: 18
          }}>이름을 입력해주세요</Text>

          <TextInput style={{
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderColor: "#e4e4e4",
            borderWidth: 1,
            marginTop: 16,
            borderRadius: 4
          }}
            value={txt}
            onChangeText={(txt) => setTxt(txt)} />

          <View style={{
            marginTop: 16,
            marginLeft: "auto",
            gap: 8,
            flexDirection: "row"
          }}>
            <TouchableOpacity
              activeOpacity={0.4}
              style={{
                padding: 8,
              }}
              onPress={onClose}>
              <Text style={{
                fontFamily: "WantedSans-SemiBold",
                fontSize: 16,
                color: "#575757"
              }}>취소</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.4}
              style={{
                padding: 8,
              }}
              onPress={() => onSubmit(txt)}>
              <Text style={{
                fontFamily: "WantedSans-SemiBold",
                fontSize: 16,
                color: "#43B319"
              }}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Pressable>
  </Modal>
}

export default function SettingsScreen() {
  const refreshUserData = useUserStore(s => s.refreshUserData)

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false)

  const { state: userProfile, refresh: refreshProfile } = useApi(requester.fetchProfile, "PROFILE")

  const clickNameItem = () => {
    setModalVisible(true)
  }

  const onNameSubmit = (txt) => {
    requester.updateProfile({
      name: txt,
      isProfilePublic: userProfile.isProfilePublic
    }).then(res => {
      refresh()
    })
  }

  const toggleProfileVisibility = () => {
    requester.updateProfile({
      name: userProfile.name,
      isProfilePublic: !userProfile.isProfilePublic
    }).then(res => {
      refresh()
    })
  };

  const refresh = () => {
    refreshProfile()
    refreshUserData()
  }

  const openInstagram = () => {
    const instagramUrl = 'https://www.instagram.com/savequest_official';
    Linking.openURL(instagramUrl);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={30} color="black" />
          </TouchableOpacity>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>설정</Text>
          </View>
        </View>

        <View style={styles.profileSection}>
          {userProfile && <>
            <Image
              source={{ uri: userProfile.profileImage }}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>{userProfile.name}</Text>
          </>}
        </View>

        <View style={styles.sectionGroup}>
          <TouchableOpacity style={styles.section} onPress={clickNameItem}>
            <Text style={styles.sectionTitle}>이름</Text>
            {userProfile && <Text style={styles.sectionContent}>{userProfile.name}</Text>}
          </TouchableOpacity>

          <TouchableOpacity style={styles.section} onPress={toggleProfileVisibility}>
            <Text style={styles.sectionTitle}>프로필 공개 여부</Text>
            {userProfile && <Text style={styles.sectionContent}>{userProfile.isProfilePublic ? '공개' : '비공개'}</Text>}
          </TouchableOpacity>
        </View>

        <View style={styles.sectionGroup}>
          <TouchableOpacity style={styles.section} onPress={openInstagram}>
            <Text style={styles.sectionTitle}>공식 인스타그램</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section}>
            <Text style={styles.sectionTitle}>로그아웃</Text>
          </TouchableOpacity>
        </View>
      </View>

      <NameModal visible={modalVisible} onSubmit={onNameSubmit} onClose={() => setModalVisible(false)} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f5f6',
    marginTop: 35,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 27,
    letterSpacing: -0.45,
    fontFamily: 'WantedSans-Medium',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 30,
    marginRight: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'WantedSans-Medium',
  },
  sectionGroup: {
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'WantedSans-Medium',
  },
  sectionContent: {
    fontSize: 16,
    color: '#888',
    textAlign: 'right',
    fontFamily: 'WantedSans-Medium',
  },
});
