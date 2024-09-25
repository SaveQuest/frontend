// ProductItem.js
import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SafeIcon from '../components/SafeIcon'; // 가격 아이콘

const StoreItem = ({ title, price, onPress, imgUrl }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <Image source={{ uri: imgUrl }} resizeMode="contain" style={styles.itemImage} />
      <Text style={styles.itemLabel}>{title}</Text>
      <View style={styles.priceContainer}>
        <SafeIcon style={styles.priceIcon} />
        <Text style={styles.itemPrice}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: '48%', // 두 개의 아이템이 한 줄에 들어가도록 설정
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eeeeee',
    alignItems: 'center',
  },
  itemImage: {
    width: '100%',
    height: 100,
    backgroundColor: '#E0E0E0', // 임시로 흰 박스
    borderRadius: 8,
    marginBottom: 5,
  },
  itemLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5, // 이미지와 가격 간의 간격 조정
  },
  priceIcon: {
    marginRight: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: '#43b319',
  },
});

export default StoreItem;
