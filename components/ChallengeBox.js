import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PeopleIcon from "./PeopleIcon";
import SafeIcon from "./SafeIcon";

export default function ChallengeBox({ title, date, people, coin, cost }) {
  return (
    <View style={styles.box}>
      <View style={styles.title}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>{title}</Text>
        <Text style={{ fontSize: 15 }}>~{date}</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.contentItems}>
          <View style={styles.contentItem}>
            <PeopleIcon />
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>{people}</Text>
          </View>
          <View style={styles.contentItem}>
            <SafeIcon />
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>{coin}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.StartButton}>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "white" }}>
              참가
            </Text>
            <View style={styles.StartButtonContext}>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 4,
                  borderColor: "white",
                }}
              >
                <SafeIcon width="23" height="23" />
              </View>
              <Text
                style={{ fontSize: 13, fontWeight: "bold", color: "white" }}
              >
                -{cost}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 17,
    padding: 12,
    gap: 13,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  contentItems: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  StartButton: {
    flexDirection: "row",
    alignItems: "center",
    width: 118,
    height: 32,
    backgroundColor: "#81C966",
    justifyContent: "center",
    borderRadius: 8,
    gap: 18,
  },
  StartButtonContext: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
