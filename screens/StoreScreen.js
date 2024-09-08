import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import SafeIcon from '../components/SafeIcon'; 
import NotificationIcon from '../components/NotificationIcon';
import SettingsIcon from '../components/SettingsIcon';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const StoreScreen = () => {
  const [selectedTab, setSelectedTab] = useState('character');

  const renderContent = () => {
    switch (selectedTab) {
      case 'character':
        return <Text style={styles.storeText}>캐릭터 항목</Text>;
      case 'pet':
        return <Text style={styles.storeText}>펫 항목</Text>;
      case 'background':
        return <Text style={styles.storeText}>배경 항목</Text>;
      case 'randombox':
        return <Text style={styles.storeText}>랜덤박스 항목</Text>;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconsContainer}>
          <View style={styles.iconWithText}>
            <SafeIcon />
            <Text style={styles.iconText}>260</Text>
          </View>
          <View style={styles.iconWithText}>
            <NotificationIcon />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>2</Text>
            </View>
          </View>
          <SettingsIcon />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="상품 검색" />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>검색</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setSelectedTab('character')}
        >
          <FontAwesome name="smile-o" size={24} color={selectedTab === 'character' ? '#4CAF50' : '#BDBDBD'} />
          <Text style={selectedTab === 'character' ? styles.tabTextActive : styles.tabText}>캐릭터</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setSelectedTab('pet')}
        >
          <MaterialIcons name="pets" size={24} color={selectedTab === 'pet' ? '#4CAF50' : '#BDBDBD'} />
          <Text style={selectedTab === 'pet' ? styles.tabTextActive : styles.tabText}>펫</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setSelectedTab('background')}
        >
          <Feather name="home" size={24} color={selectedTab === 'background' ? '#4CAF50' : '#BDBDBD'} />
          <Text style={selectedTab === 'background' ? styles.tabTextActive : styles.tabText}>배경</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setSelectedTab('randombox')}
        >
          <Feather name="box" size={24} color={selectedTab === 'randombox' ? '#4CAF50' : '#BDBDBD'} />
          <Text style={selectedTab === 'randombox' ? styles.tabTextActive : styles.tabText}>랜덤박스</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.storeContainer}>
          {renderContent()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f5f6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 4,
    paddingRight: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  iconText: {
    marginLeft: 4,
    fontSize: 15,
    fontWeight: '700',
    color: '#5D5D5D',
  },
  notificationBadge: {
    position: 'absolute',
    right: -6,
    top: -4,
    backgroundColor: 'green',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20, 
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#FFF',
    fontSize: 16, 
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  searchButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16, 
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    marginHorizontal: 20,
    borderRadius: 8,
  },
  tabButton: {
    alignItems: 'center',
  },
  tabText: {
    color: '#BDBDBD',
    fontSize: 14,
    marginTop: 5,
  },
  tabTextActive: {
    color: '#4CAF50',
    fontSize: 14,
    marginTop: 5,
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
});

export default StoreScreen;
