import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Crown1 from "./Crown1";
import Crown2 from "./Crown2";
import Crown3 from "./Crown3";

export default function RankTopBox({ rank }) {
  // Rank에 따라 왕관 또는 숫자 표시
  const getCrownOrRank = () => {
    if (rank === 1) return <Crown1 />;
    if (rank === 2) return <Crown2 />;
    if (rank === 3) return <Crown3 />;
    // 순위가 1~3이 아닐 경우 숫자로 표시
    return <Text style={styles.rankNumber}>{rank}</Text>;
  };

  return <View style={styles.crownOrRank}>{getCrownOrRank()}</View>;
}

const styles = StyleSheet.create({
  crownOrRank: {
    marginRight: 8, // 이름 옆 여백
    alignItems: "center",
    justifyContent: "center",
  },
  rankNumber: {
    fontSize: 55,
    fontWeight: "bold",
    color: "#4D5764", // 등수 숫자 색상
  },
});
