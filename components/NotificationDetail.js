import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SafeIcon from '../components/SafeIcon'; // SafeIcon 컴포넌트 가져오기

export default function NotificationDetail({ visible, onClose, notification }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* 아이콘 위치 */}
          <View style={styles.imagePlaceholder}>
            <SafeIcon /> {/* 아이콘 컴포넌트 */}
          </View>
          
          <Text style={styles.title}>{notification.title}</Text>
          <Text style={styles.date}>{notification.date}</Text>
          <Text style={styles.content}>{notification.content}</Text>
          
          <View style={styles.amountContainer}>
            <Text style={styles.amountText}>{notification.amount}</Text>
            <TouchableOpacity style={styles.receiveButton}>
              <Text style={styles.receiveButtonText}>수령</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>닫기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
  },
  imagePlaceholder: {
    width: 40, // 아이콘 너비
    height: 40, // 아이콘 높이
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  amountText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#43b319',
    marginRight: 10,
  },
  receiveButton: {
    backgroundColor: '#43b319',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  receiveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    color: '#43b319',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});
