import React, { useState, useRef, useEffect } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CoinIcon from './SafeIcon';
import { requester } from '../lib/api';
import { useApi } from '../hooks/useApi';

const ModalComponent = ({ visible, onClose, onTasksSelected }) => {
  const { state: questData } = useApi(() => requester.fetchWeeklyQuest(), "DST_QUEST_MODAL")

  const [selectedTaskIdList, setSelectedTaskList] = useState([]);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  console.log("questData", questData)
  const handleTaskSelect = (id) => {
    if (selectedTaskIdList.includes(id)) {
      setSelectedTaskList((prev) => prev.filter(i => i !== id));
    } else if (selectedTaskIdList.length < 3) {
      setSelectedTaskList((prev) => [...prev, id]);

      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  const handleDone = () => {
    if (selectedTaskIdList.length !== 3) {
      Alert.alert("도전과제 선택", "3개의 도전과제를 선택해주세요.");
      return;
    }

    requester.selectWeeklyQuest(selectedTaskIdList).then(
      () => onTasksSelected()
    )
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={{ fontFamily: "WantedSans-SemiBold", fontSize: 24 }}>주간 도전과제 선택</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#888" />
            </TouchableOpacity>
          </View>
          <Text style={{ marginTop: 0 }}></Text>

          {questData && <ScrollView contentContainerStyle={styles.taskList}>
            {questData.quest.map((task, index) => {
              const selected = selectedTaskIdList.includes(task.id);

              return <TouchableOpacity
                key={index}
                style={[styles.taskItem, selected ? styles.taskItemSelected : null]}
                onPress={() => handleTaskSelect(task.id)}
              >
                <Animated.View style={{ transform: [{ scale: selected ? scaleAnim : 1 }] }}>
                  <Text style={[styles.taskText, selected ? styles.taskTextSelected : null]}>
                    {task.name}
                  </Text>
                </Animated.View>
                <View style={styles.taskPointsContainer}>
                  <Text style={styles.plustext}>+</Text><CoinIcon size={20} />
                  <Text style={[styles.taskPoints, selected ? styles.taskPointsSelected : null]}>
                    {task.reward}
                  </Text>
                </View>
              </TouchableOpacity>
            })}
          </ScrollView>}

          <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
            <Text style={styles.doneButtonText}>완료</Text>
          </TouchableOpacity>
        </View>
      </View>

    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    height: '65%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  chaText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 18,
    color: '#81C966',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  taskList: {
    width: '100%',
    flex: 1
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E4E4E4',
  },
  taskItemSelected: {
    backgroundColor: '#00C817',
  },
  taskText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  taskTextSelected: {
    color: 'white',
  },
  taskPointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  plustext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 5,
  },
  taskPoints: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  taskPointsSelected: {
    color: 'white',
  },
  doneButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ModalComponent;
