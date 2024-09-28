import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RankItem from './RankItem';
import { useApi } from '../hooks/useApi';
import { requester } from '../lib/api'; // 랭크 박스 컴포넌트 가져오기
import { useNavigation } from '@react-navigation/native';

export default function ChallengeDetail({ visible, onClose, challengeId }) {
  const { state: detail } = useApi(() => requester.fetchChallengeDetail(challengeId), "CHALL_DETAIL")
  const navigation = useNavigation()

  const joinChallengeHandler = () => {
    requester.joinChallenge(challengeId).then(() => {
      onClose()
      navigation.goBack()
    })
  }

  if (!detail) return
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalContentHeader}>
            <Text style={styles.title}>{detail.name}</Text>
            <Text style={styles.date}>6월 15일 까지</Text>
          </View>

          {detail.rankings &&
            <View style={styles.rankings}>
              {detail.rankings.map((rank, index) => (
                <RankItem count={index+1} name={rank.name} lv={rank.level} cName={rank.element[0].name} money={rank.element[0].amount} />
              ))}
            </View>
          }
          
          <View style={styles.participants}>
            <View style={styles.target}>
              <Text style={styles.participantLabel}>참가 인원:</Text>
              <Text style={styles.participantCount}>{detail.people}</Text>
            </View>
            <View style={styles.target}>
              <Text style={styles.coinLabel}>걸려있는 코인 수:</Text>
              <Text style={styles.coinCount}>{detail.totalReward}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.joinButton} onPress={joinChallengeHandler}>
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
  modalContentHeader: {
    borderWidth: 2,
    borderColor: "#EFEFEF",
    borderRadius: 15,
    padding: 7,
    display:"flex",
    justifyContent:"center",
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
    marginTop: 10,
    flexDirection:"row",
    justifyContent:"space-around",
  },
  target: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10, // 간격 조정
  },
  participantLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 5, // 간격 조정
  },
  participantCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#43b319',
    marginLeft: 5, // 간격 조정
  },
  coinLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 5, // 간격 조정
  },
  coinCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#43b319',
    marginLeft: 5, // 간격 조정
  },
  rankings: {
    marginBottom: 10,
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
