import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CoinIcon from './SafeIcon';  
import tasks from '../stores/tasks';

const ModalComponent = ({ visible, onClose, onTasksSelected }) => {
  const [selectedTaskIndexes, setSelectedTaskIndexes] = useState([]);

  const filledTasks = [...tasks];
  while (filledTasks.length < 5) {
    filledTasks.push(...tasks);
  }
  filledTasks.length = 5;

  const handleTaskSelect = (index) => {
    if (selectedTaskIndexes.includes(index)) {
      setSelectedTaskIndexes(selectedTaskIndexes.filter(i => i !== index));
    } else if (selectedTaskIndexes.length < 3) {
      setSelectedTaskIndexes([...selectedTaskIndexes, index]);
    }
  };

  const handleDone = () => {
    if (selectedTaskIndexes.length !== 3) {
      Alert.alert("도전과제 선택", "3개의 도전과제를 선택해주세요.");
      return;
    }

    const selectedTasks = selectedTaskIndexes.map(index => {
      const task = tasks[index];
      const amountUsed = parseInt(task.amountUsed.replace(/[₩,]/g, ''), 10);
      const goal = parseInt(task.goal.replace(/[₩,]/g, ''), 10);
      const progress = Math.min(100, Math.round((amountUsed / goal) * 100)); 
      
      return { ...task, progress };  
    });

    onTasksSelected(selectedTasks);  
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.chaText}>차호림님</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#888" />
            </TouchableOpacity>
          </View>
          <Text style={styles.titleText}>오늘의 도전과제 선택</Text>

          <ScrollView contentContainerStyle={styles.taskList}>
            {filledTasks.map((task, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.taskItem,
                  selectedTaskIndexes.includes(index) ? styles.taskItemSelected : null,
                ]}
                onPress={() => handleTaskSelect(index)}
              >
                <Text style={[
                  styles.taskText, 
                  selectedTaskIndexes.includes(index) ? styles.taskTextSelected : null,
                ]}>
                  {task.title}
                </Text>
                <View style={styles.taskPointsContainer}>
                  <Text style={styles.plustext}>+</Text><CoinIcon size={20} /> 
                  <Text style={[
                    styles.taskPoints, 
                    selectedTaskIndexes.includes(index) ? styles.taskPointsSelected : null,
                  ]}>{task.progress}</Text>  
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

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
  chaText:{
    fontSize:25,
    fontWeight:'bold',
  },
  titleText: {
    fontSize: 18,
    color: '#81C966',
    marginBottom: 20,
    fontWeight:'bold',
  },
  taskList: {
    width: '100%',
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
    marginRight:5,
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