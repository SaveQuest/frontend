import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NotificationDetail from './NotificationDetail';
import SafeIcon from './SafeIcon';

const notifications = [
  { id: '1', title: '접속 보상', date: '2024. 07. 12', amount: 1000, content: '아직 사용하지 않으셨습니다.' },
  { id: '2', title: '공지사항', date: '2024. 07. 12', amount: 0, content: '새로운 업데이트가 있습니다.' },
];

export default function NotificationList({ navigation }) {
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
    <View style={styles.notificationItem}>
      <View style={styles.notificationContent}>
        <SafeIcon style={styles.icon} width="40" height="40" />
        <View>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationDate}>{item.date}</Text>
        </View>
      </View>
      {item.amount > 0 && (
        <View style={styles.rewardContainer}>
          <View style={styles.rewardContent}>
            <SafeIcon style={styles.smallIcon} width="20" height="20" />
            <Text style={styles.amountText}>{item.amount}</Text>
          </View>
          <TouchableOpacity style={styles.receiveButton} onPress={() => console.log('수령')}>
            <Text style={styles.receiveButtonText}>수령</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>알림</Text>
        </View>
      </View>

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
  container: {
    flex: 1,
    marginTop: 35,
    backgroundColor: '#f3f5f6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f3f5f6',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f5f6',
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'WantedSans-Medium',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 27,
    letterSpacing: -0.45,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
  listContainer: {
    padding: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderWidth:2,
    borderColor : '#eeeeee',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  notificationTitle: {
    color: '#000',
    textAlign: 'left',
    fontFamily: "WantedSans-Medium",
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 23,
    letterSpacing: -0.375,
  },
  notificationDate: {
    color: '#B4B9BE',
    textAlign: 'left',
    fontFamily: "WantedSans-Medium",
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: -0.325,
  },
  rewardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    padding: 10,
    paddingBottom: 2,
    paddingVertical:3,
    borderRadius: 3,
    borderColor: '#eeeeee'
  },
  rewardContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:5,
    marginBottom: 5,
  },
  smallIcon: {
    marginBottom: 2,
  },
  amountText: {
    color: '#43b319',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  receiveButton: {
    flex:1,
    justifyContent:'center',
    backgroundColor: '#43b319',
    width:71,
    height:48,
    alignItems:'center',
    borderRadius: 4,
    marginLeft:5,
    marginBottom:7
  },
  receiveButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    fontFamily:"WantedSans-Medium",
  },
});
