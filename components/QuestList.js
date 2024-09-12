import { StyleSheet, Text, View } from "react-native";
import SafeIcon from "../components/SafeIcon";

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
              : status === "fail"
              ? "실패"
              : status === "success"
              ? "성공"
              : null}
          </Text>
        </View>
      </View>

      <View style={styles.taskContent}>
        <View style={styles.amountUsed}>
          <Text style={{ fontSize: 16, color: iconColor }}>지금까지 </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: iconColor }}>
            {amountUsed}원{" "}
          </Text>
          <Text style={{ fontSize: 16, color: iconColor }}>사용함</Text>
        </View>

        {/* 세로줄 추가 */}
        <View style={styles.verticalLine} />

        <View style={styles.safeIconWithText}>
          <SafeIcon />
          <Text style={styles.safeIconText}>{progress}</Text>
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
    borderRadius: 17,
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
  fail: {
    borderRadius: 3.439,
    backgroundColor: "#FF4C4C",
  },
  success: {
    borderRadius: 3.439,
    backgroundColor: "#2F6DE3",
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
    flexDirection: "row", 
    alignItems: "center",
  },
  verticalLine: {
    width: 1,
    height: "100%",
    backgroundColor: "#E6E6E6",
    marginHorizontal: 10,
  },
  safeIconWithText: {
    flexDirection: "row",
    alignItems: "center",
  },
  safeIconText: {
    marginLeft: 4,
    fontSize: 16.553,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 21.422, 
    letterSpacing: -0.414, 
    color: "#43B319",
    fontFamily: "Inter",
  },
  progressBar: {
    height: 15, 
    backgroundColor: "#E6E6E6",
    borderRadius: 3,
    marginTop: 10,
    position: "relative",
    overflow: "hidden",
  },
  progress: {
    height: "100%", 
    borderRadius: 3,
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
