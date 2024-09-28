import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import DetailHeader from "../components/DetailHeader";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import CharacterDetail from "../components/MyRoomItemModal";
import { useUserStore } from "../stores/userStore";
import { useApi } from "../hooks/useApi";
import { requester } from "../lib/api";

export default function MyRoom({ navigation }) {
  const userData = useUserStore(s => s.data)
  const { state: userRoom, refresh } = useApi(() => requester.fetchUserRoom())

  const [selectedTab, setSelectedTab] = useState("character");
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null)

  const { state: zz } = useApi(() => requester.fetchInventory(selectedTab), "", selectedItem)
  console.log(zz)

  const handleItemSelect = async (item) => {
    await requester.equipInventoryItem(item.id)
    refresh()
  };

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  return (
    <View style={styles.container}>
      <DetailHeader navigation={navigation} title={"마이룸"} n={"Main"} />
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row", position: 'relative' }}>
          {userRoom?.character && <Image
            style={styles.character}
            source={{ uri: userRoom.character.imageUrl }}
          />}
          {userRoom?.pet && (
            <View style={styles.petWrapper}>
              <Image
                style={styles.petImage}
                source={{ uri: userRoom.pet.imageUrl }}
                resizeMode="contain"
              />
            </View>
          )}
        </View>

        <View style={{ flexDirection: "row", width: "100%", alignItems: "flex-end", justifyContent: "center", marginTop: 10 }}>
          <Text style={{ alignItems: "center", fontSize: 32, fontWeight: "bold", padding: 0, margin: 0 }}>{userData.name}</Text>
          <View style={{ flexDirection: "row", marginBottom: 5, alignItems: "flex-end", marginLeft: 5 }}>
            {/* <Text style={{ color: "#55555E", fontSize: 14, fontWeight: 500, marginBottom: 2 }}>Lv.</Text>
            <Text style={{ color: "#81C966", fontSize: 21, fontWeight: 700 }}>{userData.}</Text> */}
          </View>
        </View>
        {userRoom?.tag && <View style={{ alignSelf: "center", paddingHorizontal: 12, paddingVertical: 3, backgroundColor: "#DCF5E9", borderRadius: 8, marginTop: 5 }}>
          <Text style={{ color: "#87AD8E", fontSize: 16, fontWeight: 700, textAlign: "center" }}>{userRoom.tag.name}</Text>
        </View>}

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
            <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab("tag")}>
              <Feather name="tag" size={24} color={selectedTab === "tag" ? "#4CAF50" : "#BDBDBD"} />
              <Text style={selectedTab === "tag" ? styles.tabTextActive : styles.tabText}>칭호</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab("randombox")}>
              <Feather name="box" size={24} color={selectedTab === "randombox" ? "#4CAF50" : "#BDBDBD"} />
              <Text style={selectedTab === "randombox" ? styles.tabTextActive : styles.tabText}>랜덤박스</Text>
            </TouchableOpacity>
          </View>

          {zz && selectedTab !== "tag" && (
            <ScrollView contentContainerStyle={styles.characterList}>
              {zz.map((item, index) => (
                <TouchableOpacity key={"CHA" + index} style={styles.characterItem} onPress={() => handleItemPress(item)}>
                  <Image source={{ uri: item.imageUrl }} style={styles.characterItemImage} />
                  <Text style={styles.characterItemLabel}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}

          {zz && selectedTab === "tag" && (
            <ScrollView style={styles.titleList}>
              {zz.map((item, index) => (
                <TouchableOpacity
                  key={"TAG" + index}
                  style={[styles.titleBox, { backgroundColor: item.isEquipped ? "#4CAF50" : "#DCF5E9" }]}
                  onPress={() => handleItemPress(item)} // 칭호 선택 시 호출
                >
                  <Text style={[styles.titleBoxText, { color: item.isEquipped ? "#FFF" : "#87AD8E" }]}>{item.name}</Text>
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
              product={selectedItem}
              onSelect={handleItemSelect}
            />
          </Modal>
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
    right: 60,
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
