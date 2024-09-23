import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import DetailHeader from "./DetailHeader";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import CharacterDetail from "./CharacterDetail";

export default function MyRoom({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("character");
  const [selectedTitleIndex, setSelectedTitleIndex] = useState(6);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characterImage, setCharacterImage] = useState(require("../assets/character/black.png"));
  const [selectedPet, setSelectedPet] = useState(null);
  const [petImage, setPetImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const titles = [
    "절약 초보자",
    "절약 중급자",
    "절약 상급자",
    "절약의 천재",
    "절약의 왕",
    "절약의 전설",
    "절약의 신",
  ];

  const characters = [
    { name: "빨간머리 캐릭터", image: require("../assets/character/red.png") },
    { name: "초록머리 캐릭터", image: require("../assets/character/green.png") },
    { name: "파란머리 캐릭터", image: require("../assets/character/blue.png") },
    { name: "검은머리 캐릭터", image: require("../assets/character/black.png") },
    { name: "보라머리 캐릭터", image: require("../assets/character/purple.png") },
    { name: "노란머리 캐릭터", image: require("../assets/character/yellow.png") },
  ];

  const pets = [
    { name: "고양이", image: require("../assets/pet/cat.png") },
    { name: "강아지", image: require("../assets/pet/dog.png") },
    { name: "햄스터", image: require("../assets/pet/ham.png") },
    { name: "판다", image: require("../assets/pet/panda.png") },
  ];

  const handleCharacterPress = (character) => {
    setSelectedCharacter(character);
    setModalVisible(true);
  };

  const handleCharacterSelect = (character) => {
    setCharacterImage(character.image);
    setModalVisible(false);
  };

  const handlePetPress = (pet) => {
    setSelectedPet(pet);
    setModalVisible(true);
  };

  const handlePetSelect = (pet) => {
    setPetImage(pet.image);
    setModalVisible(false);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedCharacter(null);
    setSelectedPet(null);
  };

  const handleTitleSelect = (index) => {
    setSelectedTitleIndex(index);
  };

  return (
    <View style={styles.container}>
      <DetailHeader navigation={navigation} title={"마이룸"} n={"MainPage"} />
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row", position: 'relative' }}>
          <Image
            style={styles.character}
            source={characterImage}
          />
          {petImage && (
            <View style={styles.petWrapper}>
              <Image
                style={styles.petImage} 
                source={petImage}
                resizeMode="contain"
              />
            </View>
          )}
        </View>

        <View style={{ flexDirection: "row", width: "100%", alignItems: "flex-end", justifyContent: "center", marginTop: 10 }}>
          <Text style={{ alignItems: "center", fontSize: 32, fontWeight: "bold", padding: 0, margin: 0 }}>차호림</Text>
          <View style={{ flexDirection: "row", marginBottom: 5, alignItems: "flex-end", marginLeft: 5 }}>
            <Text style={{ color: "#55555E", fontSize: 14, fontWeight: 500, marginBottom: 2 }}>Lv.</Text>
            <Text style={{ color: "#81C966", fontSize: 21, fontWeight: 700 }}>99</Text>
          </View>
        </View>
        <View style={{ alignSelf: "center", paddingHorizontal: 12, paddingVertical: 3, backgroundColor: "#DCF5E9", borderRadius: 8, marginTop: 5 }}>
          <Text style={{ color: "#87AD8E", fontSize: 16, fontWeight: 700, textAlign: "center" }}>{titles[selectedTitleIndex]}</Text>
        </View>

        <View style={styles.items}>
          <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab("character")}>
              <FontAwesome name="smile-o" size={24} color={selectedTab === "character" ? "#4CAF50" : "#BDBDBD"} />
              <Text style={selectedTab === "character" ? styles.tabTextActive : styles.tabText}>캐릭터</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab("pet")}>
              <MaterialIcons name="pets" size={24} color={selectedTab === "pet" ? "#4CAF50" : "#BDBDBD"} />
              <Text style={selectedTab === "pet" ? styles.tabTextActive : styles.tabText}>펫</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab("background")}>
            <Feather name="award" size={24} color={selectedTab === "background" ? "#4CAF50" : "#BDBDBD"} />
              <Text style={selectedTab === "background" ? styles.tabTextActive : styles.tabText}>칭호</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab("randombox")}>
              <Feather name="box" size={24} color={selectedTab === "randombox" ? "#4CAF50" : "#BDBDBD"} />
              <Text style={selectedTab === "randombox" ? styles.tabTextActive : styles.tabText}>랜덤박스</Text>
            </TouchableOpacity>
          </View>

          {selectedTab === "character" && (
            <ScrollView contentContainerStyle={styles.characterList}>
              {characters.map((character, index) => (
                <TouchableOpacity key={index} style={styles.characterItem} onPress={() => handleCharacterPress(character)}>
                  <Image source={character.image} style={styles.characterItemImage} />
                  <Text style={styles.characterItemLabel}>{character.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}

          {selectedTab === "pet" && (
            <ScrollView contentContainerStyle={styles.characterList}>
              {pets.map((pet, index) => (
                <TouchableOpacity key={index} style={styles.characterItem} onPress={() => handlePetPress(pet)}>
                  <View style={styles.petItemWrapper}>
                    <Image source={pet.image} style={styles.petItemImage} resizeMode="contain" />
                  </View>
                  <Text style={styles.characterItemLabel}>{pet.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}

          <Modal
            transparent={true}
            animationType="slide"
            visible={modalVisible}
            onRequestClose={handleCloseModal}
          >
            <CharacterDetail
              visible={true}
              onClose={handleCloseModal}
              product={selectedCharacter || selectedPet}
              onSelect={selectedCharacter ? handleCharacterSelect : handlePetSelect}
            />
          </Modal>

          {selectedTab === "background" && (
            <ScrollView style={styles.titleList}>
              {titles.map((title, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={[styles.titleBox, { backgroundColor: selectedTitleIndex === index ? "#4CAF50" : "#DCF5E9" }]}
                  onPress={() => handleTitleSelect(index)} 
                >
                  <Text style={[styles.titleBoxText, { color: selectedTitleIndex === index ? "#FFF" : "#87AD8E" }]}>{title}</Text>
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
  character: {
    width: 250,
    height: 250,
  },
  petWrapper: {
    position: 'absolute',
    bottom: 15, 
    right: 90, 
  },
  petImage: {
    width: 60, 
    height: 60, 
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'space-between',
    padding: 10,
  },
  characterItem: {
    width: '48%',
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
  petItemWrapper: {
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 12,
    backgroundColor: '#FFF',
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  petItemImage: {
    width: '80%',
    height: '80%',
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
