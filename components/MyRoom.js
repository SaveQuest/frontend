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

export default function MyRoom({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("character");

  return (
    <View style={styles.container}>
      <DetailHeader navigation={navigation} title={"마이룸"} n={"MainPage"} />
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <View style={styles.my}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              style={styles.character}
              source={require("../assets/character/black.png")}
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
                배경
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

  items: {
    flex: 1.2,
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#EFEFEF",
    paddingHorizontal:8,
    paddingVertical:10
  },
  tabContainer: {
    width:'100%',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth:1,
    borderColor:'#EFEFEF'
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
});
