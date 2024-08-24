import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import * as Font from 'expo-font';
import SafeIcon from '../components/SafeIcon';
import NotificationIcon from '../components/NotificationIcon';
import SettingsIcon from '../components/SettingsIcon';
import PlusIcon from '../components/PlusIcon';
import styles from '../styles/HomeStyle';  

export default function Home() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Pretendard-Regular': require('../assets/fonts/Pretendard-Regular.otf'),
        'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.otf'),
        'Pretendard-Medium': require('../assets/fonts/Pretendard-Medium.otf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.userName}>
            차호림<Text style={styles.userSuffix}>님</Text>
          </Text>

          <View style={styles.iconsContainer}>
            <View style={styles.iconWithText}>
              <SafeIcon />
              <Text style={styles.iconText}>260</Text>
            </View>
            <View style={styles.iconWithText}>
              <NotificationIcon />
              <View style={styles.notificationBadge}>
                <Text style={styles.notificationText}>2</Text>
              </View>
            </View>
            <SettingsIcon />
          </View>
        </View>

        <Text style={styles.amountUsedToday}>
          오늘 <Text style={styles.bold}>1,425,765원</Text> 을 사용 하셨습니다.
        </Text>
        <Text style={styles.amountComparison}>
          어제보다 <Text style={styles.red}>434,123원</Text> 더 사용 하셨습니다.
        </Text>

        <View style={styles.card}>
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
              <Text style={styles.challengeCount}>321개</Text>
              <Text style={styles.subtitle}>앱 설치후 절약한 평균 금액</Text>
              <Text style={styles.value}>321,532원</Text>
            </View>
            <Image
              style={styles.characterImage}
              source={require('../assets/character.png')}
              resizeMode="contain"
            />
          </View>
        </View>

        <Text style={styles.sectionTitle}>진행중인 도전과제</Text>

        <View style={styles.tasks}>
          <Task
            title="편의점에서 총 5,000원 이하로 사용하기 [~6/12]"
            amountUsed="₩1,000"
            status="safe"
            progress={20}
            goal="5,000원"
            iconColor="#81C966"
          />
          <Task
            title="쇼핑몰에서 총 15,000원 이하로 사용하기 [~6/12]"
            amountUsed="₩14,000"
            status="warning"
            progress={93}
            goal="15,000원"
            iconColor="#F7941D"
          />
          <Task
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

const Task = ({ title, amountUsed, status, progress, goal, iconColor }) => (
  <View style={styles.task}>
    <View style={styles.taskHeader}>
      <Text style={styles.taskTitle}>{title}</Text>
      <View style={[styles.statusBadge, styles[status]]}>
        <Text style={styles.statusBadgeText}>
          {status === 'safe' ? '안전' : status === 'warning' ? '위험' : '실패'}
        </Text>
      </View>
    </View>

    <View style={styles.taskContent}>
      <Text style={styles.amountUsed}>
        지금까지 {'\n'}
        <Text style={[styles.bold, { color: iconColor }]}>{amountUsed}</Text> 사용
      </Text>
      <View style={styles.iconContainer}>
        <PlusIcon />
        <View style={styles.safeIconWithText}>
          <SafeIcon />
          <Text style={styles.safeIconText}>50</Text>
        </View>
      </View>
    </View>

    <View style={styles.progressBar}>
      <View style={[styles.progress, { width: `${progress}%`, backgroundColor: iconColor }]} />
      <View style={[styles.goalLine, { left: '100%' }]} />
      <View style={styles.goalAmountContainer}>
        <Text style={styles.goalAmount}>{goal}</Text>
      </View>
    </View>
  </View>
);