import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RankBox from './RankBox'; // 랭크 박스 컴포넌트 가져오기

export default function ChallengeDetail({ visible, onClose, title }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>6월 15일 까지</Text>

          <View style={styles.participants}>
            <View style={styles.target}>
              <Text style={styles.participantLabel}>참가 인원:</Text>
              <Text style={styles.participantCount}>290</Text>
            </View>
            <View style={styles.target}>
              <Text style={styles.coinLabel}>걸려있는 코인 수:</Text>
              <Text style={styles.coinCount}>29,000</Text>
            </View>
          </View>

          <View style={styles.rankings}>
            <RankBox count={1} name="차호림" lv={998} money="5,000" />
            <RankBox count={2} name="차호림" lv={998} money="5,000" />
            <RankBox count={3} name="차호림" lv={998} money="5,000" />
          </View>

          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinButtonText}>참가하기</Text>
          </TouchableOpacity>

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  participants: {
    marginBottom: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 10,
    marginTop: 10,
  },
  target: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10, // 간격 조정
  },
  participantLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 5, // 간격 조정
  },
  participantCount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#43b319',
    marginLeft: 5, // 간격 조정
  },
  coinLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 5, // 간격 조정
  },
  coinCount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#43b319',
    marginLeft: 5, // 간격 조정
  },
  rankings: {
    marginBottom: 20,
  },
  joinButton: {
    backgroundColor: '#81C966',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  joinButtonText: {
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
