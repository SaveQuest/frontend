import { StyleSheet, Text, View } from "react-native";

export default function RankBox({ Count }) {
  const getRankColor = () => {
    if (Count === 1) return "#C3B000";
    if (Count === 2) return "#6E6E6E";
    if (Count === 3) return "#FF9A9A";
    return "gray"; 
  };
  return (
    <View style={styles.Box}>
      <View style={styles.BoxLeft}>
        <Text style={[styles.rankCount,{color:getRankColor()}]}>{Count}</Text>
      </View>
      <View style={styles.BoxRight}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  Box: {
    width: "100%",
    height: 75,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E4E4E4",
    backgroundColor: "#282828",
    flexDirection: "row",
  },
  BoxLeft: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  BoxRight: {
    flex: 4,
    backgroundColor: "white",
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  rankCount: {
    fontSize: 55,
    fontWeight: "bold",
    margin: 0,
    padding: 0,
  },
});
