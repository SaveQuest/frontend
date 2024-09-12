import { Text, View, StyleSheet } from "react-native";
import SafeIcon from "./SafeIcon";
import NotificationIcon from "./NotificationIcon";
import SettingsIcon from "./SettingsIcon";

export default function Header({ home }) {
  return (
    <View style={styles.header}>
      {home ? (
        <Text style={styles.userName}>
          차호림<Text style={styles.userSuffix}>님</Text>
        </Text>
      ) : (
        <Text style={styles.userName}>
          <Text style={styles.userSuffix}></Text>
        </Text>
      )}

      <View style={styles.iconsContainer}>
        <View style={styles.iconWithText}>
          <SafeIcon />
          <Text style={styles.iconText}>260</Text>
        </View>
        <View style={styles.iconWithText}>
          <NotificationIcon />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>2</Text>
          </View>
        </View>
        <SettingsIcon />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    alignItems: "center",
    marginBottom:12,
  },
  userName: {
    color: "#000",
    textAlign: "center",
    fontSize: 27.077,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 35.041,
  },
  userSuffix: {
    color: "#55555E",
    fontSize: 27.077,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 35.041,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconWithText: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  iconText: {
    marginLeft: 4,
    fontSize: 15.287,
    fontWeight: "700",
    color: "#5D5D5D",
    textAlign: "center",
    lineHeight: 19.783,
  },
  notificationBadge: {
    position: "absolute",
    right: -6,
    top: -4,
    backgroundColor: "green",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});