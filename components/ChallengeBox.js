import React from "react"; // React import
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PeopleIcon from "./PeopleIcon";
import SafeIcon from "./SafeIcon";
import ChallengeDetail from "../components/ChallengeDetail";
import { numberWithCommas } from "../utils";

export default function ChallengeBox({ title, date, people, coin, cost }) {
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <View style={styles.box}>
        <View style={styles.boxHeader}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>~ {date}</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.contentItems}>
            <View style={styles.contentItem}>
              <PeopleIcon />
              <Text style={styles.itemText}>{numberWithCommas(people)}</Text>
            </View>
            <View style={styles.contentItem}>
              <SafeIcon />
              <Text style={styles.itemText}>{numberWithCommas(coin)}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleOpenModal}>
            <View style={styles.startButton}>
              <Text style={styles.startButtonText}>참가</Text>
              <View style={styles.startButtonContext}>
                <View style={styles.iconContainer}>
                  <SafeIcon width="18" height="18" />
                </View>
                <Text style={styles.costText}>-{numberWithCommas(cost)}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

      </View>

      <ChallengeDetail
        visible={modalVisible}
        onClose={handleCloseModal}
        title={title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 17,
    padding: 7,
    marginBottom: 10, // 박스 간의 간격
    elevation: 2, // 그림자 효과
  },
  boxHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
  },
  date: {
    fontSize: 20,
    color: "#000000",
    marginBottom: 10,
    fontWeight: "bold",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  contentItems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20, // 간격 조정
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5, // 아이콘과 텍스트 간격
  },
  participationCount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#43b319",
  },
  startButton: {
    flexDirection: "row",
    alignItems: "center",
    width: 118,
    height: 32,
    backgroundColor: "#81C966",
    justifyContent: "center",
    borderRadius: 8,
  },
  startButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    marginRight: 5, // 텍스트와 아이콘 간격
  },
  startButtonContext: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "white",
    padding: 2,
  },
  costText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    marginLeft: 5, // 아이콘과 텍스트 간격
  },
});
