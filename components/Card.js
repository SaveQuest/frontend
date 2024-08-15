import { StyleSheet, View } from "react-native";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 17.196,
    padding: 20,
    marginBottom: 20,
    marginTop: 8,
  },
});
