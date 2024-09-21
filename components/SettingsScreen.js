import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const navigation = useNavigation();
  const [isPublic, setIsPublic] = useState(true);

  const toggleProfileVisibility = () => {
    setIsPublic(prevState => !prevState);
  };

  const openInstagram = () => {
    const instagramUrl = 'https://www.instagram.com/savequest_official'; // 여기서 원하는 인스타그램 URL로 대체하세요
    Linking.openURL(instagramUrl);
  };

  return (
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
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} 
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>asdf</Text>
      </View>

      <View style={styles.sectionGroup}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>이름</Text>
          <Text style={styles.sectionContent}>asdf</Text>
        </View>

        <TouchableOpacity style={styles.section} onPress={toggleProfileVisibility}>
          <Text style={styles.sectionTitle}>프로필 공개 여부</Text>
          <Text style={styles.sectionContent}>{isPublic ? '공개' : '비공개'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.section}>
          <Text style={styles.sectionTitle}>알림 설정</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.section}>
          <Text style={styles.sectionTitle}>상품 구매 내역</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionGroup}>
        <TouchableOpacity style={styles.section}>
          <Text style={styles.sectionTitle}>고객센터</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.section} onPress={openInstagram}>
          <Text style={styles.sectionTitle}>공식 인스타그램</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.section}>
          <Text style={styles.sectionTitle}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  sectionContainer: {
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
