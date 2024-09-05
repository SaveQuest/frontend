import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArrowIcon from "./ArrowIcon";

export default function DetailHeader({title,n,navigation,style}) {
  return (
    <View style={[styles.header,style]}>
      <TouchableOpacity onPress={() => navigation.navigate(n)}>
        <ArrowIcon />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#f0f0f0",
    padding: 15,
    paddingTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    textAlign: "center",
    marginRight: 12,
  },
});
