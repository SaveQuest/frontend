import { StyleSheet, Text, View } from "react-native";
import SafeIcon from "./SafeIcon";

export default function QuestItem({
  title,
  amountUsed,
  progress,
  goal,
  points,
  iconColor,
}) {
  return (
    <View style={styles.task}>
      <View style={styles.header}>
        <View style={styles.pointContainer}>
          <SafeIcon />
          <Text style={styles.points}>{points}</Text>
        </View>
        <View>
          <Text style={styles.xp}>+25xp</Text>
        </View>
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.amountContainer}>
        <View style={styles.amountSection}>
          <Text style={styles.label}>오늘 사용한 금액</Text>
          <Text style={styles.amount}>{amountUsed.toLocaleString()}</Text>
        </View>

        <View style={[styles.amountSection, { alignItems: "flex-end" }]}>
          <Text style={styles.label}>목표 금액</Text>
          <Text style={styles.amount}>{goal.toLocaleString()}</Text>
        </View>
      </View>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progress,
              {
                width: `${progress}%`,
                backgroundColor:
                  progress >= 100
                    ? "#f52d2d"
                    : progress >= 50
                      ? "#ff7b00"
                      : "#43b319",
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 10
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pointContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  points: {
    marginLeft: 4,
    fontSize: 15,
    fontWeight: "bold",
    color: "#43B319",
  },
  xp: {
    color: "#43B319",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    color: "#23282F",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: -0.45,
    marginTop: 12,
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amountSection: {
    alignItems: "flex-start",
    marginTop: 15,
  },
  label: {
    color: "#4D5764",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: -0.325,
  },
  amount: {
    color: "#23282F",
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 23,
    letterSpacing: -0.375,
  },
  progressBarContainer: {
    alignItems: "center",
    marginTop: 12
  },
  progressBar: {
    width: "100%",
    height: 10,
    backgroundColor: "#E5E7EB",
    borderRadius: 5,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    borderRadius: 5,
  },
});
