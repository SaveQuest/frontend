import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Crown1 from "./Crown1";
import Crown2 from "./Crown2";
import Crown3 from "./Crown3";
import { numberWithCommas } from "../utils"

export default function RankItem({ count, name, lv, cName, money }) {
  return (
    <View style={styles.Box}>
      {
        count == 1 ? <Crown1 /> :
          count == 2 ? <Crown2 /> :
            count == 3 ? <Crown3 /> :
              <View style={styles.rankTextWrapper}>
                <Text style={styles.rankText}>{count}</Text>
              </View>
      }

      <View style={styles.Box2}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.lvl}>Lv. {lv}</Text>
      </View>

      <View style={styles.Box3}>
        <Text style={styles.valueName}>{cName}</Text>
        <Text style={styles.value}>{money}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rankTextWrapper: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  rankText: {
    fontFamily: "WantedSans-SemiBold",
    fontSize: 18,
    color: "#4D5764"
  },
  Box: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#B4B9BE",
    flexDirection: "row",
    marginBottom: 14,
    paddingVertical: 16,
    alignItems: "center",
    gap: 10
  },
  Box2: {
    alignItems: "center",
    flexDirection: "row",
    gap: 4
  },
  name: {
    fontFamily: "WantedSans-SemiBold",
    fontSize: 15
  },
  lvl: {
    fontFamily: "WantedSans-Medium",
    fontSize: 12,
    color: "#4D5764"
  },
  Box3: {
    marginLeft: "auto"
  },
  valueName: {
    fontFamily: "WantedSans-Medium",
    fontSize: 11
  },
  value: {
    fontFamily: "WantedSans-SemiBold",
    fontSize: 13
  }
});