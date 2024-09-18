import React from "react";
import { View, ScrollView, TouchableOpacity, Text, ImageBackground } from "react-native";
import Head from "../components/Header";
import SafeIcon from "../components/SafeIcon";
import styles from "../styles/QuestsScreenStlyes";
import RankBox from "../components/RankBox";
import QuestList from "../components/QuestList";
import Card from "../components/Card";
import BeforeQuest from "../components/BeforeQuest";
import Feather from 'react-native-vector-icons/Feather';

const QuestsScreen = ({ navigation }) => {
  return (
    <>
      <Head />
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollView}>
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
                  챌린지 참여하기
                </Text>
              </View>
              <Feather name="chevron-right" size={20} color="#000" />
            </View>
          </TouchableOpacity>
        </Card>

        <View style={styles.challenge}>

          <ImageBackground
            source={require("../assets/LogoBackground.png")}
            style={styles.header}
          >
            <Text style={styles.challengeHead}>challenge</Text>
            <Text style={styles.challengeContext}>Save Quest</Text>
          </ImageBackground>
          <View style={styles.content}>
            <View style={styles.border}>
              <View style={styles.title}>
                <Text style={styles.titleTitle}>
                  한달동안 평균 소비 금액 줄이기
                </Text>
                <Text style={styles.titleDate}>6월 15일 까지</Text>
              </View>
              <View style={styles.my}>
                <View style={styles.left}>
                  <View>
                    <Text style={styles.one}>이전 달 소비금액</Text>
                    <Text style={styles.two}>₩54,000</Text>
                  </View>
                  <View>
                    <Text style={styles.one}>지금까지 줄인 소비 금액</Text>
                    <Text style={styles.two}>₩3,000</Text>
                  </View>
                </View>

                <View style={styles.right}>
                  <View style={styles.myGame}>
                    <Text style={styles.gameName}>절약의 신</Text>

                    <Text style={styles.level}>
                      <Text style={styles.levelLog}>Lv.</Text>998
                    </Text>
                  </View>

                  <View style={styles.box}>
                    <Text style={styles.myRank}>현재 1위</Text>
                  </View>

                </View>
              </View>
            </View>

            <View style={styles.rank}>
              <TouchableOpacity
                style={styles.rankTab}
                onPress={() => navigation.navigate("DetailRank")}
              >
                <Text style={styles.rankTabText}>순위</Text>
                <View style={styles.rankBoxFlex}>
                  <Text style={styles.seeRankMore}>자세히보기</Text>
                  <Feather name="chevron-right" size={24} color="#000" />
                </View>
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
        </View>
      </ScrollView>
    </View></>
  );
};

export default QuestsScreen;