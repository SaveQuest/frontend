import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Dimensions, Animated } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import QuestItem from "../components/QuestItem";
import Header from "../components/Header";
import ModalComponent from "../components/ModalComponents";
import tasks from '../stores/tasks';
import { useFonts } from 'expo-font';
import { requester } from "../lib/api";
import Skeleton from "react-native-reanimated-skeleton";

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
  const [selectedTasks, setSelectedTasks] = useState([]);


  const [loaded] = useFonts({
    "Pretendard-Bold": require("../assets/fonts/Pretendard-Bold.otf"),
    "Pretendard-Medium": require("../assets/fonts/Pretendard-Medium.otf"),
    "Pretendard-Regular": require("../assets/fonts/Pretendard-Regular.otf"),
    "WantedSans-Medium": require("../assets/fonts/WantedSans-Medium.otf"),
    "WantedSans-SemiBold": require("../assets/fonts/WantedSans-SemiBold.otf"),
  });

  if (!loaded) {
    return null;
  }

  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();
  const currentIndex = useRef(0);

  useEffect(() => {
    if (!dstHome) return

    const intervalId = setInterval(() => {
      if (flatListRef.current) {
        currentIndex.current = (currentIndex.current + 1) % dstHome.element.length;
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

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const [dstHeader, setDstHeader] = useState({
    "name": "주현명",
    "points": 0,
    "notificationCount": 0
  })

  const [dstHome, setDstHome] = useState({
    "id": "userId",
    "element": [
      {
        "type": "CAROUSEL_BASIC_CARD",
        "content": {
          "topRowText": "SaveQuest 이벤트",
          "bottomRowText": "홈 화면에서 친구 초대하기"
        },
        "right": {
          "imageUri": "https://sqstatic.ychan.me/character/default0.png?key=wy6hk6y1sx3gcjvkmdhef"
        },
        "style": {},
        "handler": {
          "type": "APP_SCHEME",
          "uri": "savequest://screen/quest"
        }
      },
      {
        "type": "CAROUSEL_PERCENT_CARD",
        "content": {
          "topRowText": "이번달 SaveQuest로",
          "bottomRowColorText": "13만원",
          "bottomRowText": "아꼈어요"
        },
        "right": {
          "text": "+12*"
        },
        "style": {
          "bottomRowColorText": {
            "color": "Primary/300"
          },
          "rightText": {
            "color": "Primary/400",
            "backgroundColor": "Primary/100"
          }
        },
        "handler": {
          "type": "WEBLINK",
          "uri": "https://ychan.me"
        }
      }
    ]

  })

  useEffect(() => {
    requester.getDSTHeader().then(res => setDstHeader(res))
    requester.getDSTHome().then(res => setDstHome(res))
  }, [])

  return (
    <View style={styles.container}>
      <Header point={dstHeader?.point} notificationCnt={dstHeader?.notificationCount} />

      <ScrollView contentContainerStyle={styles.scrollView}>
        {
          dstHeader ? <>
            <View style={styles.welcomeMessageContainer}>
              <Text style={styles.welcomeMessage}>
                <Text style={styles.userName}>{dstHeader.name}</Text>님 화창한 날{'\n'}SaveQuest로 절약해보세요!
              </Text>
            </View>
          </> : <>
            <Skeleton layout={[
              { key: "someId", width: "100%", height: 64 },
            ]} isLoading={true} containerStyle={styles.welcomeMessageContainer} />
          </>
        }

        {
          dstHome ? <>
            <FlatList
              data={dstHome.element}
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
            <View style={styles.indicatorContainer}>
              {dstHome.element.map((_, index) => {
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
          </> : <>
            <Skeleton layout={[
              { key: "someId", width: "100%", height: 64 },
            ]} isLoading={true} containerStyle={styles.welcomeMessageContainer} />
          </>
        }

        <Text style={styles.sectionTitle}>일일 도전과제</Text>

        <View style={[styles.tasks, { marginTop: 10 }]}>
          {selectedTasks.length > 0 ? (
            selectedTasks.map((task, index) => (
              <QuestItem
                key={index}
                title={task.title}
                amountUsed={task.amountUsed}
                status={task.status}
                progress={task.progress}
                goal={task.goal}
                iconColor={task.iconColor}
              />
            ))
          ) : (
            <TouchableOpacity style={styles.selectTaskButton} onPress={handleOpenModal}>
              <Text style={styles.selectTaskButtonText}>오늘의 도전과제 선택</Text>
              <Ionicons name="chevron-forward" size={20} color="#333" style={styles.arrowIcon} />
            </TouchableOpacity>
          )}
        </View>

        <ModalComponent
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          tasks={tasks}
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