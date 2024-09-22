import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import SafeIcon from '../components/SafeIcon'; 
import NotificationIcon from '../components/NotificationIcon';
import SettingsIcon from '../components/SettingsIcon';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Header from "../components/Header";
import StoreItem from '../components/StoreItem'; // 상품 컴포넌트 가져오기
import StoreItemDetail from '../components/StoreItemDetail'; // 상품 모달 컴포넌트 가져오기

const StoreScreen = () => {
  const [selectedTab, setSelectedTab] = useState('character');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { title: '빨간맛 캐릭터', price: '1000', type: 'character', description: '어쩌구 저쩌구' },
    { title: '펫 1', price: '1500', type: 'pet', description: '어쩌구 저쩌구' },
    { title: '펫 2', price: '2500', type: 'pet', description: '어쩌구 저쩌구' },
    { title: '캐릭터 2', price: '2000', type: 'character', description: '어쩌구 저쩌구' },
    { title: '캐릭터 2', price: '2000', type: 'character', description: '어쩌구 저쩌구' },
    { title: '캐릭터 2', price: '2000', type: 'character', description: '어쩌구 저쩌구' },
    { title: '캐릭터 2', price: '2000', type: 'character', description: '어쩌구 저쩌구' },
    { title: '캐릭터 2', price: '2000', type: 'character', description: '어쩌구 저쩌구' },
    { title: '캐릭터 2', price: '2000', type: 'character', description: '어쩌구 저쩌구' },
  ];

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const renderContent = () => {
    return (
      <View style={styles.grid}>
        {products
          .filter(item => item.type === selectedTab) // 선택된 탭에 맞는 상품 필터링
          .map((item, index) => (
            <StoreItem 
              key={index} 
              title={item.title} 
              price={item.price} 
              onPress={() => handleProductPress(item)} // 클릭 시 상품 정보 전달
            />
          ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />

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

      {/* 상품 상세 모달 */}
      <StoreItemDetail
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        product={selectedProduct}
      />
    </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f5f6',
    paddingTop: 6,
    paddingHorizontal: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: Platform.OS === 'ios' ? 4 : 16,
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default StoreScreen;