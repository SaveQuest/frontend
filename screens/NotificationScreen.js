import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NotificationDetail from '../components/NotificationDetail';
import SafeIcon from '../components/SafeIcon';
import DetailHeader from '../components/DetailHeader';
import { useApi } from '../hooks/useApi';
import { requester } from '../lib/api';

export default function NotificationScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const { state: dstNotification } = useApi(requester.getDSTNotification, "DST_NOTI")

  const handleOpenModal = (item) => {
    setSelectedNotification(item);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedNotification(null);
  };

  const dateToTxt = (d) => {
    const dd = new Date(d)
    return `${dd.getFullYear()}. ${dd.getMonth() + 1}. ${dd.getDay() + 1}`
  }

  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <View style={styles.notificationContent}>
        <SafeIcon style={styles.icon} width="40" height="40" />
        <View>
          <Text style={styles.notificationTitle}>{item.content.leftRowTopText}</Text>
          <Text style={styles.notificationDate}>{dateToTxt(item.content.leftRowBottomText)}</Text>
        </View>
      </View>
      {item.right && (
        <View style={styles.rewardContainer}>
          <View style={styles.rewardContent}>
            <SafeIcon style={styles.smallIcon} width="20" height="20" />
            <Text style={styles.amountText}>{item.right.content.rewardAmountText}</Text>
          </View>
          <TouchableOpacity style={styles.receiveButton} onPress={() => {
            if (!item.handler) return
            requester.requestNotificationHandler(item.handler.uri, item.handler.data.id).then(res => Alert.alert("수령", res.message))
          }}>
            <Text style={styles.receiveButtonText}>수령</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <DetailHeader navigation={navigation} title={"알림"} n={"MainPage"} />

      {dstNotification && <FlatList
        data={dstNotification.element}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />}

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
    borderWidth: 2,
    borderColor: '#eeeeee',
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
    paddingVertical: 3,
    borderRadius: 3,
    borderColor: '#eeeeee'
  },
  rewardContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
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
    justifyContent: 'center',
    backgroundColor: '#43b319',
    width: 71,
    height: 48,
    alignItems: 'center',
    borderRadius: 4,
    marginLeft: 5,
    marginBottom: 7
  },
  receiveButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: "WantedSans-Medium",
  },
});
