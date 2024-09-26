import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { requester } from '../lib/api';

// 카드사 정보 배열
const cardCompanies = [
  // { name: '신한카드', image: require('../assets/card/shinhan.png') },
  //   { name: '삼성카드', image: require('../assets/card/') },
  { name: 'KB국민카드', image: require('../assets/card/gukmin.png') },
  //   { name: '롯데카드', image: require('../assets/card/') },
  // { name: '하나카드', image: require('../assets/card/hana.png') },
  // { name: 'NH농협카드', image: require('../assets/card/nonghyeop.png') },
  // //   { name: 'BC카드', image: require('../assets/card/') },
  // { name: '우리카드', image: require('../assets/card/uri.png') },
  // { name: 'IBK기업은행', image: require('../assets/card/giup.png') },
  // //   { name: 'DGB대구은행', image: require('../assets/card/') },
  // { name: '부산은행', image: require('../assets/card/busan.png') },
  // { name: 'SC제일은행', image: require('../assets/card/jail.png') },
  // //   { name: '경남은행', image: require('../assets/card/') },
  // { name: '씨티은행', image: require('../assets/card/city.png') },
];

const CardAuthentication = ({ navigation }) => {
  const [selectedCardIndexes, setSelectedCardIndexes] = useState([]);

  const handleCardPress = (index) => {
    setSelectedCardIndexes((prevSelectedIndexes) => {
      // Check if the card is already selected
      const isSelected = prevSelectedIndexes.includes(index);
      if (isSelected) {
        // Remove the card index from the selected array
        return prevSelectedIndexes.filter((item) => item !== index);
      } else {
        // Add the card index to the selected array
        return [...prevSelectedIndexes, index];
      }
    });
  };

  const handleOkay = async () => {
    if (!isCardSelected) return

    navigation.navigate("KBCardAuthScreen");
  };

  // 선택된 카드가 있는지 확인
  const isCardSelected = selectedCardIndexes.length > 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>내 명의의 카드로 본인 인증을 할 수 있어요</Text>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {cardCompanies.map((company, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.card,
              {
                backgroundColor: selectedCardIndexes.includes(index) ? '#e6ffe6' : '#f0f0f0',
                borderColor: selectedCardIndexes.includes(index) ? '#b2d8b2' : '#f0f0f0',
                borderWidth: selectedCardIndexes.includes(index) ? 2 : 0,
              }
            ]}
            onPress={() => handleCardPress(index)}
          >
            <Image source={company.image} style={styles.cardImage} />
            <Text style={styles.cardName}>{company.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* 버튼 스타일 및 텍스트 동적 변경 */}
      <TouchableOpacity onPress={handleOkay} style={[{ backgroundColor: "red" }, !isCardSelected && {
        backgroundColor: "gray"
      }]}>
        <Text style={[styles.cardSelectFinishText]}>
          완료
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Alert.alert(";", "본 SaveQuest 팀은 여러 카드사를 지원하기 위해 최선을 다하고 있습니다. 머시기")
        }}
      >
        <Text style={{
          color: "gray"
        }}>내가 쓰는 카드가 없어요</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 25,
    paddingTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  card: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  cardImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  cardName: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
  noCardButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#d3d3d3',
    borderRadius: 5,
  },
  noCardText: {
    color: '#555',
    fontSize: 16,
  },
  cardSelectFinish: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#4CAF50', // 완료 버튼의 배경색
    borderRadius: 5,
  },
  cardSelectFinishText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CardAuthentication;
