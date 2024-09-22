import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import DetailHeader from "./DetailHeader";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import Header from "../components/Header";
import StoreItem from "../components/StoreItem"; // 상품 컴포넌트 가져오기
import StoreItemDetail from "../components/StoreItemDetail";
import CharacterDetail from "./CharacterDetail";

export default function MyRoom({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("character");
  const [selectedTitleIndex, setSelectedTitleIndex] = useState(6);
  const [selectedCharacter, setSelectedCharacter] = useState(null); // 선택된 캐릭터 상태
  const [characterImage, setCharacterImage] = useState(require("../assets/character/black.png")); // 기본 캐릭터 이미지

  const titles = [
    "절약 초보자",
    "절약 중급자",
    "절약 상급자",
    "절약의 천재",
    "절약의 왕",
    "절약의 전설",
    "절약의 신",
  ];

  // 서버에서 레벨 가져오기
  const handleTitle = (index) => {
    let i = parseInt(index);
    if (i >= 1 && i < 5) setSelectedTitleIndex(0);
    else if (i >= 5 && i < 10) setSelectedTitleIndex(1);
    else if (i >= 10 && i < 20) setSelectedTitleIndex(2);
    else if (i >= 20 && i < 50) setSelectedTitleIndex(3);
    else if (i >= 50 && i < 70) setSelectedTitleIndex(4);
    else if (i >= 70 && i < 100) setSelectedTitleIndex(5);
    else if (i == 100) setSelectedTitleIndex(6);
  };

  const characters = [
    { name: "빨간머리 캐릭터", image: require("../assets/character/red.png") },
    { name: "초록머리 캐릭터", image: require("../assets/character/green.png") },
    { name: "파란머리 캐릭터", image: require("../assets/character/blue.png") },
    { name: "검은머리 캐릭터", image: require("../assets/character/black.png") },
  ];

  // 캐릭터 선택 처리 함수
  const handleCharacterPress = (character) => {
    setSelectedCharacter(character); // 선택된 캐릭터 정보 저장
    setSelectedTab("characterDetail"); // 캐릭터 상세 화면으로 전환
  };

  // 캐릭터 선택 후 이미지를 부모 상태에 반영
  const handleCharacterSelect = (character) => {
    setCharacterImage(character.image); // 선택된 캐릭터의 이미지로 상태 업데이트
    setSelectedTab("character"); // 다시 캐릭터 선택 화면으로 돌아가기
  };

  // 모달 닫기 처리
  const handleCloseModal = () => {
    setSelectedTab("character"); // 캐릭터 목록으로 돌아가기
    setSelectedCharacter(null); // 선택된 캐릭터 초기화
  };

  return (
    <View style={styles.container}>
      <DetailHeader navigation={navigation} title={"마이룸"} n={"MainPage"} />
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <View style={styles.my}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            {/* 선택된 캐릭터 이미지 렌더링 */}
            <Image
              style={styles.character}
              source={characterImage} // 선택된 캐릭터 이미지 상태값을 사용
            />
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "flex-end",
              }}
            >
              <Text
                style={{
                  alignItems: "center",
                  fontSize: 32,
                  fontWeight: "bold",
                  padding: 0,
                  margin: 0,
                }}
              >
                차호림
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 5,
                  alignItems: "flex-end",
                }}
              >
                <Text
                  style={{
                    color: "#55555E",
                    fontSize: 14,
                    fontWeight: 500,
                    marginBottom: 2,
                  }}
                >
                  Lv.
                </Text>
                <Text
                  style={{ color: "#81C966", fontSize: 21, fontWeight: 700 }}
                >
                  99
                </Text>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 3,
                backgroundColor: "#DCF5E9",
                borderRadius: 8,
                marginTop: 5,
              }}
            >
              <Text style={{ color: "#87AD8E", fontSize: 16, fontWeight: 700 }}>
                절약의 신
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.items}>
          {/* Tab 선택 영역 */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={styles.tabButton}
              onPress={() => setSelectedTab("character")}
            >
              <FontAwesome
                name="smile-o"
                size={24}
                color={selectedTab === "character" ? "#4CAF50" : "#BDBDBD"}
              />
              <Text
                style={
                  selectedTab === "character"
                    ? styles.tabTextActive
                    : styles.tabText
                }
              >
                캐릭터
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tabButton}
              onPress={() => setSelectedTab("pet")}
            >
              <MaterialIcons
                name="pets"
                size={24}
                color={selectedTab === "pet" ? "#4CAF50" : "#BDBDBD"}
              />
              <Text
                style={
                  selectedTab === "pet" ? styles.tabTextActive : styles.tabText
                }
              >
                펫
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tabButton}
              onPress={() => setSelectedTab("background")}
            >
              <Feather
                name="home"
                size={24}
                color={selectedTab === "background" ? "#4CAF50" : "#BDBDBD"}
              />
              <Text
                style={
                  selectedTab === "background"
                    ? styles.tabTextActive
                    : styles.tabText
                }
              >
                칭호
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tabButton}
              onPress={() => setSelectedTab("randombox")}
            >
              <Feather
                name="box"
                size={24}
                color={selectedTab === "randombox" ? "#4CAF50" : "#BDBDBD"}
              />
              <Text
                style={
                  selectedTab === "randombox"
                    ? styles.tabTextActive
                    : styles.tabText
                }
              >
                랜덤박스
              </Text>
            </TouchableOpacity>
          </View>

          {/* 캐릭터 선택 화면 */}
          {selectedTab === "character" && (
            <ScrollView contentContainerStyle={styles.characterList}>
              {characters.map((character, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.characterItem}
                  onPress={() => handleCharacterPress(character)} // 캐릭터 클릭 시 처리
                >
                  <Image source={character.image} style={styles.characterItemImage} />
                  <Text style={styles.characterItemLabel}>{character.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}

          {/* 캐릭터 상세 화면 */}
          {selectedTab === "characterDetail" && selectedCharacter && (
            <CharacterDetail
              visible={true}
              onClose={handleCloseModal} // 닫기 버튼 처리
              product={selectedCharacter} // 선택된 캐릭터 정보 전달
              onSelect={handleCharacterSelect} // 캐릭터 선택 시 처리 함수 전달
            />
          )}

          {/* 칭호 화면 */}
          {selectedTab === "background" && (
            <ScrollView style={styles.titleList}>
              {titles.map((title, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.titleBox,
                    {
                      backgroundColor:
                        selectedTitleIndex === index ? "#4CAF50" : "#DCF5E9",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.titleBoxText,
                      {
                        color: selectedTitleIndex === index ? "#FFF" : "#87AD8E",
                      },
                    ]}
                  >
                    {title}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F6",
  },
  my: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  character: {
    width: 250,
    height: 250,
  },
  characterName: {
    fontSize: 32,
    fontWeight: "bold",
  },
  level: {
    color: "#81C966",
    fontSize: 21,
    fontWeight: "700",
  },
  titleContainer: {
    paddingHorizontal: 12,
    paddingVertical: 3,
    backgroundColor: "#DCF5E9",
    borderRadius: 8,
    marginTop: 5,
  },
  titleText: {
    color: "#87AD8E",
    fontSize: 16,
    fontWeight: "700",
  },
  items: {
    flex: 1.2,
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#EFEFEF",
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  tabContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
  tabButton: {
    alignItems: "center",
  },
  tabText: {
    color: "#BDBDBD",
    fontSize: 14,
    marginTop: 5,
  },
  tabTextActive: {
    color: "#4CAF50",
    fontSize: 14,
    marginTop: 5,
  },
  characterList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // 두 아이템 사이에 간격을 균등하게 배분
    padding: 10,
  },
  characterItem: {
    width: '48%', // 반응형 그리드 레이아웃을 위해
    marginBottom: 10,
    alignItems: 'center',
    padding: 10,
  },
  characterItemImage: {
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 12,
    backgroundColor: '#FFF',
    width: 140,
    height: 150,
    marginBottom: 5,
  },
  characterItemLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleList: {
    marginTop: 20,
  },
  titleBox: {
    backgroundColor: "#DCF5E9",
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  titleBoxText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#87AD8E",
  },
});
