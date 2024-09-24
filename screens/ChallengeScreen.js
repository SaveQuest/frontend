import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity, Text, ImageBackground } from "react-native";
import Head from "../components/Header";
import SafeIcon from "../components/SafeIcon";
import styles from "../styles/QuestsScreenStlyes";
import RankItem from "../components/RankItem";
import Card from "../components/Card";
import Feather from 'react-native-vector-icons/Feather';
import { requester } from "../lib/api";
import { useApi } from "../hooks/useApi";
import Skeleton from "react-native-reanimated-skeleton";

const ChallengeScreen = ({ navigation }) => {
  const { state: dstChallenge } = useApi(requester.fetchDSTChallenge, "DST_QUEST_PAGE")

  return (
    <>
      <View style={styles.container}>
        <Head />

        <ScrollView contentContainerStyle={styles.scrollView}>
          <Card>
            <TouchableOpacity onPress={() => navigation.navigate("ChallengeJoinScreen")}>
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

          {dstChallenge ? <View style={styles.challenge}>
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
                    {dstChallenge.element.questInfo.content.topRowText}
                  </Text>
                  <Text style={styles.titleDate}>{dstChallenge.element.questInfo.content.bottomRowText}</Text>
                </View>
                <View style={styles.my}>
                  <View style={styles.left}>
                    {
                      dstChallenge.element.questInfo.bottom.content.map(e => {
                        if (e.type === "QUEST_DATA_CARD") {
                          return <View key={e.type + e.content.topRowText}>
                            <Text style={styles.one}>{e.content.topRowText}</Text>
                            <Text style={styles.two}>{e.content.bottomRowText}</Text>
                          </View>
                        }
                      })
                    }
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
          </View> : <>
            <Skeleton layout={[{ id: "aaq", width: "100%", height: 100 }]} containerStyle={styles.challenge} />
          </>}

        </ScrollView>
      </View></>
  );
};

export default ChallengeScreen;