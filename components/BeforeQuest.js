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
            <View style={styles.coinContainer}>
              <SafeIcon width="50" height="50" />  
              <View style={styles.coinInfo}>
                <Text style={styles.label}>획득한 코인</Text>
                <Text style={styles.coinValue}>4,600 코인</Text>
              </View>
            </View>

            <View style={styles.verticalLine} />

            <View style={styles.resultContainer}>
              <View style={styles.result}>
                <Text style={styles.label}>성공</Text>
                <Text style={[styles.value, { color: "#389348" }]}>321</Text>
              </View>
              <View style={styles.result}>
                <Text style={styles.label}>실패</Text>
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
    paddingHorizontal: 0,
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333", 
  },
  contents: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  coinContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinInfo: {
    marginLeft: 10,
  },
  coinValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#43B319",  
  },
  verticalLine: {
    width: 1,
    height: "100%",
    backgroundColor: "#E6E6E6",
    marginHorizontal: 20,
  },
  resultContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  result: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  label: {
    fontSize: 16,
    color: "#777777",  
  },
  value: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
