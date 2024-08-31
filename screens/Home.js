import React, { useState, useEffect } from "react";  // useEffect 추가
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";  // Image 추가
import { Ionicons } from '@expo/vector-icons'; // 아이콘 임포트
import QuestList from "../components/QuestList";
import Header from "../components/Header";
import Card from "../components/Card";
import ModalComponent from "../components/ModalComponents"; // 모달 컴포넌트 임포트
import styles from '../styles/HomeStyle';  // 스타일 파일 임포트
import tasks from '../stores/tasks';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState([]); // 선택된 태스크 관리

  const handleTasksSelected = (newTasks) => {
    setSelectedTasks((prevTasks) => [...prevTasks, ...newTasks]); // 기존 선택된 태스크에 새 태스크 추가
    setModalVisible(false); // 모달 닫기
  };

  const handleOpenModal = () => {
    setModalVisible(true); // 모달 열기
  };

  // 홈 화면이 처음 열리면 모달을 자동으로 띄운다
  useEffect(() => {
    setModalVisible(true);
  }, []);  // 빈 배열을 두어 컴포넌트가 처음 마운트될 때만 실행되게 함

  return (
    <View style={styles.container}>
      {/* 헤더를 감싸는 View에 패딩을 준다 */}
      <View style={styles.headerContainer}>
        <Header home />
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
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
          {selectedTasks.length > 0 ? (
            selectedTasks.map((task, index) => (
              <QuestList
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
              <Text style={styles.selectTaskButtonText}>오늘 도전과제 선택</Text>
              <Ionicons name="chevron-forward" size={20} color="#333" style={styles.arrowIcon} />
            </TouchableOpacity>
          )}
        </View>

        <ModalComponent
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          tasks={tasks}
          onTasksSelected={handleTasksSelected} // 선택된 태스크를 Home 컴포넌트로 전달
        />
      </ScrollView>
    </View>
  );
}
