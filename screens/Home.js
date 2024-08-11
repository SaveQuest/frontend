import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import * as Font from 'expo-font';
import SafeIcon from '../components/SafeIcon';
import NotificationIcon from '../components/NotificationIcon';
import SettingsIcon from '../components/SettingsIcon';
import PlusIcon from '../components/PlusIcon';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 77,
    alignItems: 'center',
  },
  userName: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Pretendard-Bold',
    fontSize: 27.077,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 35.041,
  },
  userSuffix: {
    color: '#55555E',
    fontFamily: 'Pretendard-Medium',
    fontSize: 27.077,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 35.041,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  iconText: {
    marginLeft: 4,
    fontSize: 15.287,
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
    color: '#5D5D5D',
    textAlign: 'center',
    lineHeight: 19.783,
  },
  notificationBadge: {
    position: 'absolute',
    right: -6,
    top: -4,
    backgroundColor: 'green',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: '#FFF',
    fontSize: 12,
    fontFamily: 'Pretendard-Bold',
    fontWeight: 'bold',
  },
  amountUsedToday: {
    color: '#55555E',
    textAlign: 'left',
    fontFamily: 'Pretendard-Medium',
    fontSize: 14.124,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18.278,
    marginTop: 12,
  },
  amountComparison: {
    fontSize: 14,
    fontFamily: 'Pretendard-Medium',
    marginTop: 5,
    color: '#666',
    marginBottom: 26,
    textAlign: 'left',
  },
  bold: {
    fontFamily: 'Pretendard-Bold',
    fontWeight: 'bold',
  },
  red: {
    fontFamily: 'Pretendard-Bold',
    color: 'red',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 17.196,
    padding: 20,
    marginBottom: 20,
    marginTop: 8,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText: {
    flex: 1,
    marginBottom: 5,
  },
  title: {
    fontSize: 17.196,
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
    color: '#389348',
    lineHeight: 19.489,
  },
  level: {
    fontSize: 9.171,
    fontFamily: 'Pretendard-Medium',
    fontWeight: '500',
    color: '#55555E',
    lineHeight: 19.489,
  },
  levelValue: {
    fontSize: 12.611,
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
    color: '#389348',
    lineHeight: 19.489,
  },
  progressBarBackground: {
    height: 9,
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    marginTop: 4,
    width: '100%',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#389348',
    borderRadius: 10,
    width: '70%',
  },
  subtitle: {
    fontSize: 12.793,
    fontFamily: 'Pretendard-Medium',
    fontWeight: '500',
    color: '#55555E',
    marginTop: 13,
    lineHeight: 19.489,
  },
  challengeCount: {
    fontSize: 13,
    fontFamily: 'Pretendard-Bold',
    fontWeight: 'bold',
    color: '#389348',
    marginTop: 2,
  },
  value: {
    fontSize: 15.374,
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
    color: '#389348',
    lineHeight: 19.489,
  },
  characterImage: {
    width: 150,
    height: 150,
    marginLeft: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  tasks: {
    flex: 1,
  },
  task: {
    backgroundColor: '#FFF',
    borderRadius: 17.196,
    padding: 20,
    marginBottom: 10,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskTitle: {
    fontSize: 15,
    fontFamily: 'Pretendard-Medium',
    fontWeight: '500',
    color: '#333',
    lineHeight: 19.489,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: '#E6E6E6',
  },
  safe: {
    borderRadius: 3.439,
    backgroundColor: '#81C966',
  },
  warning: {
    borderRadius: 3.439,
    backgroundColor: '#F7941D',
  },
  danger: {
    borderRadius: 3.439,
    backgroundColor: '#FF4C4C',
  },
  statusBadgeText: {
    fontSize: 12,
    fontFamily: 'Pretendard-Bold',
    fontWeight: 'bold',
    color: '#FFF',
  },
  taskContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  amountUsed: {
    fontSize: 13,
    fontFamily: 'Pretendard-Medium',
    fontWeight: '500',
    color: '#333',
    lineHeight: 19.489,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  safeIconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  safeIconText: {
    marginLeft: 4,
    fontSize: 15,
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
    color: '#5D5D5D',
  },
  progressBar: {
    height: 9,
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    marginTop: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    borderRadius: 10,
  },
  goalLine: {
    position: 'absolute',
    height: '100%',
    width: 2,
    backgroundColor: '#333',
  },
  goalAmountContainer: {
    position: 'absolute',
    right: 0,
    top: -20,
  },
  goalAmount: {
    fontSize: 13,
    fontFamily: 'Pretendard-Bold',
    fontWeight: '700',
    color: '#333',
  },
});
