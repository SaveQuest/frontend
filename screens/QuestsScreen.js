import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import Head from "../components/Header";
import SafeIcon from "../components/SafeIcon";
import styles from "../styles/QuestsScreenStlyes";
import RankBox from "../components/RankBox";
import QuestList from "../components/QuestList";
import Card from "../components/Card";
import BeforeQuest from "../components/BeforeQuest";
import Feather from 'react-native-vector-icons/Feather';
import ChallengeHeaderComponent from '../components/ChallengeHeaderComponent'; 

const QuestsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Head />
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.challenge}>  
          <ChallengeHeaderComponent />

          <View style={[styles.rank, { paddingBottom: 50 }]}>  
            <TouchableOpacity
              style={styles.rankTab}
              onPress={() => navigation.navigate("DetailRank")}
            >
              <Text style={styles.rankTabText}>랭킹</Text>
              <Feather name="chevron-right" size={24} color="#000" />
            </TouchableOpacity>

            <RankBox
              count={1}
              name={"차호림"}
              lv={998}
              cName={"지금까지 줄인 소비 금액"}
              money={"3,000"}
            />
            <RankBox
              count={2}
              name={"한유찬"}
              lv={998}
              cName={"지금까지 줄인 소비 금액"}
              money={"3,000"}
            />
            <RankBox
              count={3}
              name={"신이현"}
              lv={998}
              cName={"지금까지 줄인 소비 금액"}
              money={"3,000"}
            />
          </View>
        </View>

        <Card>
          <TouchableOpacity onPress={() => navigation.navigate("DetailChallenge")}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <SafeIcon />
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  현재 진행중인 챌린지
                </Text>
              </View>

              <Feather name="chevron-right" size={20} color="#000" />
            </View>
          </TouchableOpacity>
        </Card>

        <View>
          <Text style={styles.sectionTitle}>진행중인 도전과제</Text>
          <QuestList
            title="편의점에서 총 5,000원 이하로 사용하기 [~6/12]"
            amountUsed="₩1,000"
            status="safe"
            progress={20}
            goal="5,000원"
            iconColor="#81C966"
          />
          <QuestList
            title="쇼핑몰에서 총 15,000원 이하로 사용하기 [~6/12]"
            amountUsed="₩14,000"
            status="warning"
            progress={93}
            goal="15,000원"
            iconColor="#F7941D"
          />
          <QuestList
            title="게임에서 총 50,000원 이하로 사용하기 [~6/12]"
            amountUsed="₩999,999,999"
            status="danger"
            progress={100}
            goal="50,000원"
            iconColor="#FF4C4C"
          />
        </View>
        <BeforeQuest navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default QuestsScreen;
