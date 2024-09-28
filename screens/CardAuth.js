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
      <Text style={styles.title}>내 카드를{"\n"}등록할 수 있어요</Text>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {cardCompanies.map((company, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.card,
              {
                borderColor: selectedCardIndexes.includes(index) ? '#b2d8b2' : '#f0f0f0',
              }
            ]}
            onPress={() => handleCardPress(index)}
          >
            <Image source={company.image} style={styles.cardImage} />
            <Text style={styles.cardName}>{company.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity disabled={!isCardSelected} onPress={handleOkay} style={[{ alignItems: "center", justifyContent: "center", borderRadius: 12, padding: 16, marginBottom: 24, backgroundColor: "#43B319" }, !isCardSelected && {
        backgroundColor: "#b4e1a3"
      }]}>
        <Text style={[styles.cardSelectFinishText]}>
          완료
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Alert.alert("ㅁㄴㅇㄹ", "본 SaveQuest 팀은 여러 카드사를 지원하기 위해 최선을 다하고 있습니다.")
        }}
      >
        <Text style={{
          color: "gray",
          alignSelf: "center"
        }}>내가 쓰는 카드가 없어요</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 25,
    paddingTop: 75,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 24,
  },
  card: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "#f0f0f0"
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
    fontFamily: "WantedSans-Medium"
  },
});

export default CardAuthentication;
