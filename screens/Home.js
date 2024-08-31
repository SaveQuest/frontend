import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import QuestList from "../components/QuestList";
import Header from "../components/Header";
import Card from "../components/Card";
import styles from '../styles/HomeStyle';
import tasks from '../stores/tasks';

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
          {tasks.map((task, index) => (
            <QuestList
              key={index}
              title={task.title}
              amountUsed={task.amountUsed}
              status={task.status}
              progress={task.progress}
              goal={task.goal}
              iconColor={task.iconColor}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
