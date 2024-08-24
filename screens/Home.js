import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import QuestList from "../components/QuestList";
import Header from "../components/Header";
import Card from "../components/Card";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Header home />
        <Text style={styles.amountUsedToday}>
          오늘 <Text style={styles.bold}>1,425,765원</Text> 을 사용 하셨습니다.
        </Text>
        <Text style={styles.amountComparison}>
          어제보다 <Text style={styles.red}>434,123원</Text> 더 사용 하셨습니다.
        </Text>

        <Card>
          <View style={styles.cardContent}>
            <View style={styles.cardText}>
              <Text style={styles.title}>절약의 신</Text>
              <Text style={styles.level}>
                Lv.<Text style={styles.levelValue}>998</Text>
              </Text>
              <View style={styles.progressBarBackground}>
                <View style={styles.progressBarFill} />
              </View>
              <Text style={styles.subtitle}>성공한 도전과제</Text>
              <Text style={styles.value}>321개</Text>
              <Text style={styles.subtitle}>앱 설치후 절약한 평균 금액</Text>
              <Text style={styles.value}>321,532원</Text>
            </View>
            <Image
              style={styles.characterImage}
              source={require("../assets/character.png")}
              resizeMode="contain"
            />
          </View>
        </Card>

        <Text style={styles.sectionTitle}>진행중인 도전과제</Text>

        <View style={styles.tasks}>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    padding: 15,
  },
  amountUsedToday: {
    color: "#55555E",
    textAlign: "left",
    fontSize: 14.124,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 18.278,
  },
  amountComparison: {
    fontSize: 14,
    marginTop: 5,
    color: "#666",
    marginBottom: 26,
    textAlign: "left",
  },
  bold: {
    fontWeight: "bold",
  },
  red: {
    color: "red",
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardText: {
    flex: 1,
    marginBottom: 5,
  },
  title: {
    fontSize: 17.196,
    fontWeight: "700",
    color: "#389348",
    lineHeight: 19.489,
  },
  level: {
    fontSize: 13,
    fontWeight: "500",
    color: "#55555E",
    lineHeight: 19.489,
  },
  levelValue: {
    fontSize: 15,
    fontWeight: "700",
    color: "#389348",
    lineHeight: 19.489,
  },
  progressBarBackground: {
    height: 9,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginTop: 4,
    width: "100%",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#389348",
    borderRadius: 10,
    width: "70%",
  },
  subtitle: {
    fontSize: 12.793,
    fontWeight: "500",
    color: "#55555E",
    marginTop: 13,
    lineHeight: 19.489,
  },
  value: {
    fontSize: 15.374,
    fontWeight: "700",
    color: "#389348",
    lineHeight: 19.489,
  },
  characterImage: {
    width: 150,
    height: 150,
    marginLeft: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginTop: 20,
    marginBottom: 10,
  },
  tasks: {
    flex: 1,
  },
});
