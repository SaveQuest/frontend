import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import Head from "../components/Header";
import SafeIcon from "../components/SafeIcon";
import styles from "../styles/QuestsScreenStlyes";
import RankBox from "../components/RankBox";

const QuestsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Head />

        <View style={styles.challenge}>
          <ImageBackground
            source={require("../assets/Logo.png")}
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
                    <Text style={styles.name}>차호림
                    <Text style={styles.level}><Text style={styles.levelLog}>Lv.</Text>998</Text>
                    </Text>

                  <Text style={styles.gameName}>절약의 신</Text>
                  <View style={styles.box}>
                    <Text style={styles.myRank}>현재 순위 1위</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.rank}>
              <View style={styles.rankTab}>
                <Text style={styles.rankTabText}>랭킹</Text>
                <Text style={styles.rankTabText}>자세히 보기 &gt;</Text>
              </View>
              <RankBox Count={1}/>
              <RankBox Count={2}/>
              <RankBox Count={3}/>
            </View>

          </View>
        </View>
      </ScrollView>
    </View>
  );
};


export default QuestsScreen;
