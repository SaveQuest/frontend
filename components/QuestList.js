import { StyleSheet, Text, View } from "react-native";
import SafeIcon from "../components/SafeIcon";
import PlusIcon from "../components/PlusIcon";

export default function QuestList({
  title,
  amountUsed,
  status,
  progress,
  goal,
  iconColor,
}) {
  return (
    <View style={styles.task}>
      <View style={styles.taskHeader}>
        <Text style={styles.taskTitle}>{title}</Text>
        <View style={[styles.statusBadge, styles[status]]}>
          <Text style={styles.statusBadgeText}>
            {status === "safe"
              ? "안전"
              : status === "warning"
              ? "위험"
              : "실패"}
          </Text>
        </View>
      </View>

      <View style={styles.taskContent}>
        <Text style={styles.amountUsed}>
          <Text style={{ color: "777777", fontSize: 15 }}>지금까지</Text>
          {"\n"}
          <Text style={[styles.bold, { color: iconColor, fontSize: 18 }]}>
            {amountUsed}
          </Text>{" "}
          사용
        </Text>
        <View style={styles.iconContainer}>
          <PlusIcon />
          <View style={styles.safeIconWithText}>
            <SafeIcon />
            <Text style={styles.safeIconText}>50</Text>
          </View>
        </View>
      </View>

      <View style={styles.progressBar}>
        <View
          style={[
            styles.progress,
            { width: `${progress}%`, backgroundColor: iconColor },
          ]}
        />
        <View style={[styles.goalLine, { left: "100%" }]} />
        <View style={styles.goalAmountContainer}>
          <Text style={styles.goalAmount}>{goal}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  task: {
    backgroundColor: "#FFF",
    borderRadius: 17.196,
    padding: 20,
    marginBottom: 10,
  },
  taskHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
    lineHeight: 19.489,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: "#E6E6E6",
  },
  safe: {
    borderRadius: 3.439,
    backgroundColor: "#81C966",
  },
  warning: {
    borderRadius: 3.439,
    backgroundColor: "#F7941D",
  },
  danger: {
    borderRadius: 3.439,
    backgroundColor: "#FF4C4C",
  },
  statusBadgeText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFF",
  },
  taskContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  amountUsed: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
    lineHeight: 19.489,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  safeIconWithText: {
    flexDirection: "row",
    alignItems: "center",
  },
  safeIconText: {
    marginLeft: 4,
    fontSize: 15,
    fontWeight: "700",
    color: "#5D5D5D",
  },
  progressBar: {
    height: 9,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginTop: 10,
    position: "relative",
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    borderRadius: 10,
  },
  goalLine: {
    position: "absolute",
    height: "100%",
    width: 2,
    backgroundColor: "#333",
  },
  goalAmountContainer: {
    position: "absolute",
    right: 0,
    top: -20,
  },
  goalAmount: {
    fontSize: 13,
    fontWeight: "700",
    color: "#333",
  },
});
