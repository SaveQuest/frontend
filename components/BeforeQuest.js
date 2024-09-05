import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Card from "./Card";
import Feather from 'react-native-vector-icons/Feather';
import SafeIcon from "./SafeIcon";

export default function BeforeQuest({ navigation }) {
  return (
    <Card>
      <TouchableOpacity onPress={() => navigation.navigate("DetailBeforeQuest")}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>이전 도전과제</Text>
            <Feather name="chevron-right" size={20} color="#000" />
          </View>

          <View style={styles.contents}>
            <SafeIcon width="35" height="35" />
            <View style={styles.details}>
              <View style={styles.content}>
                <Text style={styles.label}>누적 획득한 코인</Text>
                <Text style={styles.value}>4600</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.label}>성공한 도전과제</Text>
                <Text style={[styles.value, { color: "#389348" }]}>321</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.label}>실패한 도전과제</Text>
                <Text style={[styles.value, { color: "#EC2424" }]}>11</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5, 
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,  
  },
  headerText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  headerArrow: {
    fontSize: 20,
    fontWeight: "bold",
  },
  contents: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginLeft: 15,
  },
  content: {
    alignItems: "flex-start", 
  },
  label: {
    fontSize: 14,
  },
  value: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#87cc6e",
  },
});
