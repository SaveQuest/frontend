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
                  <View>
                    <Text style={styles.name}>차호림</Text>
                    <Text style={styles.level}>Lv.998</Text>
                  </View>

                  <Text style={styles.gameName}>절약의 신</Text>
                  <Text style={styles.myRank}>현재 순위 1위</Text>
                </View>
              </View>
            </View>
            <View style={styles.rank}></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    padding: 15,
  },

  challenge: {
    backgroundColor: "#FFF",
    borderRadius: 17.196,
    overflow: "hidden",
  },
  header: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  content: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 12,
  },
  challengeHead: {
    color: "#FFF",
    fontSize: 16,
    opacity: 0.79,
  },
  challengeContext: {
    color: "#FFF",
    fontSize: 23,
    fontWeight: "bold",
  },

  title: {
    borderBottomWidth: 2.5,
    borderBottomColor: "#D9D9D9",
    marginTop: 10,
    marginBottom: 10,
  },
  titleDate: {
    fontSize: 14,
    color: "#818181",
  },
  titleTitle: {
    color: "#1E1E1E",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
  },

  my: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  left: {
    flex: 1,
    gap: 12,
  },
  one: {
    color: "#575757",
    fontSize: 14,
  },
  two: {
    color: "#000;",
    fontSize: 26,
    fontWeight: "bold",
  },

  right: {
    flex: 1,
  },
});

export default QuestsScreen;
