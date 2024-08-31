import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Head from "../components/Header";
import SafeIcon from "../components/SafeIcon";
import styles from "../styles/QuestsScreenStlyes";
import RankBox from "../components/RankBox";
import QuestList from "../components/QuestList";
import Card from "../components/Card";

const QuestsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Head />

        <View style={styles.challenge}>
          <ImageBackground
            source={require("../assets/LogoBackground.png")}
            style={styles.header}
          >
            <Text style={styles.challengeHead}>challenge</Text>
            <Text style={styles.challengeContext}>Save Quest</Text>
          </ImageBackground>

          <View style={styles.content}>
            <View style={styles.title}>
              <Text style={styles.titleDate}>6월 15일 토요일 까지</Text>
              <Text style={styles.titleTitle}>
                한달동안 평균 소비 금액 줄이기
              </Text>
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

              <View style={styles.right}>
                <View style={styles.myGame}>
                  <Text style={styles.name}>
                    차호림
                    <Text style={styles.level}>
                      <Text style={styles.levelLog}>Lv.</Text>998
                    </Text>
                  </Text>

                  <Text style={styles.gameName}>절약의 신</Text>
                  <View style={styles.box}>
                    <Text style={styles.myRank}>현재 순위 1위</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.rank}>
              <TouchableOpacity
                style={styles.rankTab}
                onPress={() => navigation.navigate("DetailRank")}
              >
                <Text style={styles.rankTabText}>랭킹</Text>
                <Text style={styles.rankTabText}>자세히 보기 &gt;</Text>
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
                  진행중인 챌린지
                </Text>
              </View>

              <Text style={{ fontSize: 20, fontWeight: "bold" }}>&gt;</Text>
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
      </ScrollView>
    </View>
  );
};

export default QuestsScreen;
