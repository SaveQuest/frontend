import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RankTopBox from "./RankTopBox";

export default function RankBox({ count, name, lv, cName, money }) {
  return (
    <View style={styles.Box}>
      {/* 좌측 Rank 표시 (왕관 또는 숫자) */}
      <View style={styles.BoxLeft}>
        <RankTopBox rank={count} />
      </View>

      {/* 우측 정보 표시 */}
      <View style={styles.BoxRight}>
        <View style={styles.nameContainer}>
          {/* 이름과 레벨 표시 */}
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.level}>Lv.{lv}</Text>
        </View>

        {/* 설명과 금액 표시 */}
        <View style={styles.two}>
          <Text style={styles.cName}>{cName}</Text>
          <Text style={styles.money}>{money}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Box: {
    width: "100%",
    height: 75,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#B4B9BE",
    flexDirection: "row",
    marginBottom: 10,
  },
  BoxLeft: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  BoxRight: {
    flex: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
  },
  level: {
    color: "#55555E",
    fontSize: 16,
    marginLeft: 10,
  },
  two: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  cName: {
    fontSize: 14,
    color: "#55555E",
  },
  money: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
