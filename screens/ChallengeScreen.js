import React from "react";
import { View, ScrollView, TouchableOpacity, Text, ImageBackground } from "react-native";
import Head from "../components/Header";
import SafeIcon from "../components/SafeIcon";
import styles from "../styles/QuestsScreenStlyes";
import RankItem from "../components/RankItem";
import Card from "../components/Card";
import Feather from 'react-native-vector-icons/Feather';

const ChallengeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Head />

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
              <View style={[{
                padding: 14
              }, styles.border]}>
                <View style={styles.title}>
                  <Text style={styles.titleTitle}>
                    한달동안 평균 소비 금액 줄이기
                  </Text>
                  <Text style={styles.titleDate}>6월 15일 까지</Text>
                </View>
                <View style={styles.my}>
                  <View style={styles.left}>
                    <View>
                      <Text style={styles.one}>나의 한달 평균 소비 금액</Text>
                      <Text style={styles.two}>₩54,000</Text>
                    </View>
                    <View>
                      <Text style={styles.one}>지금까지 줄인 소비 금액</Text>
                      <Text style={styles.two}>₩3,000</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={[styles.rank, {
                paddingHorizontal: 18,
                paddingVertical: 14
              }, styles.border]}>
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
                <RankItem
                  count={1}
                  name={"차호림"}
                  lv={998}
                  cName={"지금까지 줄인 소비 금액"}
                  money={3000}
                />
                <RankItem
                  count={2}
                  name={"한유찬"}
                  lv={998}
                  cName={"지금까지 줄인 소비 금액"}
                  money={3000}
                />
                <RankItem
                  count={3}
                  name={"신이현"}
                  lv={998}
                  cName={"지금까지 줄인 소비 금액"}
                  money={3000}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View></>
  );
};

export default ChallengeScreen;