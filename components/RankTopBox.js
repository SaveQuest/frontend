import { Image, StyleSheet, Text, View } from "react-native";
import Crown1 from "./Crown1";
import Crown2 from "./Crown2";
import Crown3 from "./Crown3";

export default function RankTopBox({ rank, name, content, money,style }) {
  const rankColor =
    rank == 1
      ? ["#E9D063", "#E4BD04"]
      : rank == 2
      ? ["#D5D6D8", "#ACAFB4"]
      : rank == 3
      ? ["#AC835B", "#956532"]
      : null;
  const styles = StyleSheet.create({
    box: {
      marginTop: 30,
      backgroundColor: "#282830",
      height: 167,
      width: 114,
      borderRadius: 6,
      flexDirection: "column-reverse",
      position: "relative",
    },
    userBox: {
      width: "100%",
      height: 75,
      backgroundColor: rankColor[0],
      borderRadius: 6,
      alignContent: "center",
      alignItems: "center",
      padding: 4,
      gap: 1,
    },
    name: {
      fontSize: 18,
      fontWeight: "bold",
    },
    moneyBox: {
      width: 85,
      height: 20,
      backgroundColor: rankColor[1],
      borderRadius: 8,
      alignItems: "center",
    },
    money: {
      fontWeight: "bold",
    },
    content: {
      fontSize: 13,
    },
    characterImage: {},
    characterImageBox: {
      position: "absolute",
      height: 167,
      width: 114,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10,
    },
    Crown: {
      position: "absolute",
      bottom: 150,
      left: 37,
    },
  });

  return (
    <View style={[styles.box,style]}>
      {rank == 1 ? (
        <Crown1 style={styles.Crown} />
      ) : rank == 2 ? (
        <Crown2 style={styles.Crown} />
      ) : rank == 3 ? (
        <Crown3 style={styles.Crown} />
      ) : null}
      <View style={styles.characterImageBox}>
        <Image
          style={styles.characterImage}
          source={require("../assets/character.png")}
          resizeMode="contain"
        />
      </View>

      <View style={styles.userBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.content}>{content}</Text>
        <View style={styles.moneyBox}>
          <Text style={styles.money}>₩{money}</Text>
        </View>
      </View>
    </View>
  );
}
