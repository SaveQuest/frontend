import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import SafeIcon from '../components/SafeIcon'; // SafeIcon 컴포넌트 가져오기
import NotificationDetail from '../components/NotificationDetail'; // NotificationDetail 컴포넌트 가져오기

const notifications = [
  { id: '1', title: '접속 보상', date: '2024. 07. 12', amount: 1000, content: '아직 사용하지 않으셨습니다.' },
  { id: '2', title: '공지사항', date: '2024. 07. 12', amount: 0, content: '새로운 업데이트가 있습니다.' },
];

export default function NotificationList() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedNotification(item);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedNotification(null);
  };

  const renderItem = ({ item }) => (
    <View style={styles.notificationItem} >
      <View style={styles.notificationContent}>
        {/* 아이콘 위치 */}
        <SafeIcon style={styles.icon} /> {/* SafeIcon 사용 */}
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationDate}>{item.date}</Text>
      </View>
      <View style={styles.amountContainer}>
        {item.amount > 0 && <Text style={styles.amountText}>{item.amount}</Text>}
        <TouchableOpacity style={styles.receiveButton} onPress={() => handleOpenModal(item)}>
          <Text style={styles.receiveButtonText}>수령</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      {selectedNotification && (
        <NotificationDetail
          visible={modalVisible}
          onClose={handleCloseModal}
          notification={selectedNotification}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    elevation: 2,
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    width: "50%",
  },
  icon: {
    width: 40, // 아이콘 너비
    height: 40, // 아이콘 높이
    marginRight: 10,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationDate: {
    fontSize: 12,
    color: '#888',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#43b319',
    marginRight: 10,
  },
  receiveButton: {
    backgroundColor: '#43b319',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  receiveButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});
