import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Dimensions, Animated } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import QuestItem from "../components/QuestItem";
import Header from "../components/Header";
import ModalComponent from "../components/ModalComponents";
import { useFonts } from 'expo-font';
import { requester } from "../lib/api";
import Skeleton from "react-native-reanimated-skeleton";
import { useUserStore } from "../stores/userStore";
import { useApi } from "../hooks/useApi";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KBPayClient } from '../lib/scraping';
import { QueryDate, QueryRange } from '../lib/scraping/models';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.9;
const CARD_MARGIN = 0;
const SNAP_INTERVAL = CARD_WIDTH + CARD_MARGIN;

const BasicCarouselItem = ({ item }) => (
  <View style={styles.carouselItem}>
    <View style={{ gap: 4 }}>
      <Text style={styles.carouselTitle}>{item.content.topRowText}</Text>
      <Text style={styles.carouselAmount}>{item.content.bottomRowText}</Text>
    </View>
  </View>
);

const PercentCarouselItem = ({ item }) => (
  <View style={styles.carouselItem}>
    <View style={{ gap: 4 }}>
      <Text style={styles.carouselTitle}>{item.content.topRowText}</Text>
      <Text style={styles.carouselAmount}>{item.content.bottomRowColorText} {item.content.bottomRowText}</Text>
    </View>
    <Text style={styles.carouselPercentage}>{item.right.text}</Text>
  </View>
);

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();
  const currentIndex = useRef(0);

  const userData = useUserStore((s) => s.data)
  const refreshUserData = useUserStore((s) => s.refreshUserData)

  useEffect(() => {
    refreshUserData()
  }, [])

  useEffect(() => {
    (async () => {
      const client = await AsyncStorage.getItem("CARD_CRED").then(res => new KBPayClient(res))
      await client.login()

      const today = new Date()

      const lastMonth = new Date();
      lastMonth.setMonth(lastMonth.getMonth() - 1);
      const transaction = await client.fetchTxList(new QueryRange(new QueryDate(
        lastMonth.getFullYear(),
        lastMonth.getMonth() + 1,
        lastMonth.getDate()
      ), new QueryDate(
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate()
      )))
      await requester.updateCardTransaction(transaction)
    })();
  }, []);

  useEffect(() => {
    if (!dstHome) return

    const intervalId = setInterval(() => {
      if (flatListRef.current) {
        currentIndex.current = (currentIndex.current + 1) % dstHome.elements.length;
        flatListRef.current.scrollToIndex({ index: currentIndex.current, animated: true });
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [dstHome]);

  const handleTasksSelected = (newTasks) => {
    const updatedTasks = newTasks.map(task => {
      const amountUsed = parseInt(task.amountUsed.replace(/[₩,]/g, ''), 10);
      const goal = parseInt(task.goal.replace(/[₩,]/g, ''), 10);
      const progress = Math.min(100, Math.round((amountUsed / goal) * 100));
      return { ...task, progress };
    });

    setSelectedTasks((prevTasks) => [...prevTasks, ...updatedTasks]);
    setModalVisible(false);
  };

  const handleOpenModal = async () => {
    console.log('hello')
    const weeklyQuest = await requester.fetchWeeklyQuest()
    setModalVisible(true);
  };

  const { state: dstHome, refresh: refreshDstHome } = useApi(() => requester.getDSTHome(), "DST_HOME")
  const { state: dstQuest, refresh: refreshDstQuest } = useApi(()=>requester.getDSTQuest(), "DST_QUEST")

  console.log(dstHome)
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.welcomeMessageContainer}>
          <Text style={styles.welcomeMessage}>
            <Text style={styles.userName}>{userData.name}</Text>님 화창한 날{'\n'}SaveQuest로 절약해보세요!
          </Text>
        </View>

        {
          dstHome ? <>
            <FlatList
              data={dstHome.elements}
              renderItem={({ item }) => {
                return <>
                  {
                    item.type === "CAROUSEL_BASIC_CARD" ? <BasicCarouselItem item={item} />
                      : item.type === "CAROUSEL_PERCENT_CARD" ? <PercentCarouselItem item={item} />
                        : <></>
                  }
                </>
              }}
              keyExtractor={(item, idx) => item.type + "_" + idx}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={CARD_WIDTH + CARD_MARGIN}
              decelerationRate="fast"
              contentContainerStyle={styles.carouselContainer}
              style={styles.carousel}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
              ref={flatListRef}
            />
            {dstHome.elements &&
              <View style={styles.indicatorContainer}>
                {dstHome.elements.map((_, index) => {
                  const inputRange = [(index - 1) * (CARD_WIDTH + CARD_MARGIN * 2), index * (CARD_WIDTH + CARD_MARGIN * 2), (index + 1) * (CARD_WIDTH + CARD_MARGIN * 2)];

                  const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 30, 10],
                    extrapolate: 'clamp',
                  });

                  const dotOpacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [1, 0.3, 1],
                    extrapolate: 'clamp',
                  });

                  return <Animated.View key={index} style={[styles.indicator, { width: dotWidth, opacity: dotOpacity }]} />;
                })}
              </View>
            }
          </> : <>
            <Skeleton layout={[
              { key: "someId", width: "100%", height: 64 },
            ]} isLoading={true} containerStyle={styles.welcomeMessageContainer} />
          </>
        }

        <Text style={styles.sectionTitle}>주간 도전과제</Text>
        {dstQuest ? <>
          <View style={[styles.tasks, { marginTop: 10 }]}>
            {dstQuest.element.length > 0 ? (
              dstQuest.element.map((task, index) => (
                <QuestItem
                  key={index}
                  points={task.top.topRowText}
                  title={task.top.bottomRowText}
                  amountUsed={task.right.bottomRowText}
                  status={0}
                  progress={task.bottom.percent}
                  goal={task.left.bottomRowText}
                  iconColor={0}
                />
              ))
            ) : (
              <TouchableOpacity style={styles.selectTaskButton} onPress={handleOpenModal}>
                <Text style={styles.selectTaskButtonText}>주간 도전과제 선택</Text>
                <Ionicons name="chevron-forward" size={20} color="#333" style={styles.arrowIcon} />
              </TouchableOpacity>
            )}
          </View>
        </> : <>
          <Skeleton layout={[{ id: "zz", width: "100%", height: 72 }]} containerStyle={[styles.tasks, { marginTop: 10 }]} />
        </>}


        <ModalComponent
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onTasksSelected={handleTasksSelected}
        />
      </ScrollView >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f5f6',
    paddingTop: 6,
    paddingHorizontal: 5,
  },
  scrollView: {
    flexGrow: 1,
    padding: 15,
    paddingBottom: 0,
  },
  welcomeMessageContainer: {
    marginBottom: 15,
  },
  welcomeMessage: {
    color: '#4D5764',
    fontFamily: 'WantedSans-Medium',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  userName: {
    color: '#43b319',
    fontWeight: 'bold',
  },
  carousel: {
    flexGrow: 0
  },
  carouselContainer: {
    paddingHorizontal: CARD_MARGIN,
  },
  carouselItem: {
    width: CARD_WIDTH,
    height: 72,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginHorizontal: CARD_MARGIN,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: '#efefef',
  },
  carouselTitle: {
    fontSize: 14,
    color: '#b4b9be',
    fontFamily: "WantedSans-Medium"
  },
  carouselAmount: {
    fontSize: 18,
    color: '#43b319',
    fontFamily: "WantedSans-SemiBold"
  },
  carouselPercentage: {
    backgroundColor: '#e3fada',
    color: '#318711',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 14,
    fontFamily: "WantedSans-SemiBold"
  },
  sectionTitle: {
    fontSize: 15,
    fontFamily: "WantedSans-SemiBold",
    color: '#333',
    marginTop: 28,
  },
  tasks: {
    flex: 1,
  },
  selectTaskButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#fff',
    width: '100%',
    borderColor: "#EFEFEF",
    borderWidth: 1
  },
  selectTaskButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: '#333',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 20,
  },
  indicator: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4d5764',
    marginHorizontal: 5,
  },
});