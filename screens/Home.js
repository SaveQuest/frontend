import React, { useState, useEffect } from "react"; 
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native"; 
import { Ionicons } from '@expo/vector-icons'; 
import QuestList from "../components/QuestList";
import Header from "../components/Header";
import Card from "../components/Card";
import ModalComponent from "../components/ModalComponents";
import styles from '../styles/HomeStyle';  
import tasks from '../stores/tasks';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState([]); 

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

  useEffect(() => {
    setModalVisible(true);
  }, []);  

  return (
    <View style={styles.container}>
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
          onTasksSelected={handleTasksSelected}
        />
      </ScrollView>
    </View>
  );
}