import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar, FlatList } from 'react-native';
import Header from '../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import SafeIcon from '../components/SafeIcon';

const TabItem = (
  { Icon, iconName, name, onPress, active }
) => {
  return (
    <TouchableOpacity
      style={styles.tabButton}
      onPress={onPress}
    >
      <Icon name={iconName} size={24} color={active ? '#4CAF50' : '#BDBDBD'} />
      <Text style={active ? styles.tabTextActive : styles.tabText}>{name}</Text>
    </TouchableOpacity>
  )
}

const ProductItem = (
  { name, point, onPress }
) => {
  return (
    <View style={styles.productItemWrapper}>
      <TouchableOpacity
        style={styles.productItem}
        onPress={onPress}
      >
        <View style={styles.productImageWrapper}>
          <Image style={styles.productImage} resizeMode="contain" source={require("../assets/character.png")} />
        </View>

        <View style={styles.productDescContainer}>
          <Text style={styles.productTitle} numberOfLines={2}>{name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <SafeIcon />
            <Text style={styles.productPrice}>1000</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const StoreScreen = () => {
  const [selectedTab, setSelectedTab] = useState('character');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header home={true} />
      </View>

      <View style={styles.tabContainer}>
        <TabItem Icon={FontAwesome} iconName="smile-o" name="캐릭터" active={selectedTab === "character"} onPress={() => setSelectedTab('character')} />
        <TabItem Icon={MaterialIcons} iconName="pets" name="펫" active={selectedTab === "pet"} onPress={() => setSelectedTab('pet')} />
        <TabItem Icon={Feather} iconName="home" name="배경" active={selectedTab === "background"} onPress={() => setSelectedTab('background')} />
        <TabItem Icon={Feather} iconName="box" name="랜덤박스" active={selectedTab === "randombox"} onPress={() => setSelectedTab('randombox')} />
      </View>

      <ScrollView>
        <View style={styles.productContainer}>
          <ProductItem name="대전광역시의대전광역시의 구름대전광역시의 구름" />
          <ProductItem name="달의 뒷편" />

          <ProductItem name="달의 뒷편" />
          <ProductItem name="달의 뒷편" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#f3f5f6',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    marginTop: -27,
    paddingHorizontal: 20,
    backgroundColor: '#f3f5f6',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    borderRadius: 8,
    marginTop: 18
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10
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
  productContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 20,
  },
  productItemWrapper: {
    width: "50%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  productItem: {
    width: "100%",
    flexDirection: "column",
  },
  productImageWrapper: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 12
  },
  productImage: {
    width: "100%",
    height: 100,
  },
  productDescContainer: {
    marginTop: 8,
    gap: 5
  },
  productTitle: {
    fontFamily: "WantedSans-Medium",
    fontSize: 18,
  },
  productPrice: {
    fontFamily: "WantedSans-Medium",
    fontSize: 18,
    color: "#318711"
  }
});

export default StoreScreen;
