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
                <Text style={styles.plac}>나의 한달 평균 소비 금액</Text>
                <Text style={styles.left}>₩54,000</Text>
              </View>
              <View style={styles.right}>

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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  content: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 8,
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
  },
});

export default QuestsScreen;
