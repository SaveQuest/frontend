import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ArrowIcon from "./ArrowIcon";
import RankBox from "./RankBox";

export default function DetailRank({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("MainPage")}>
          <ArrowIcon />
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            width: "100%",
            alignItems: "center",
            padding: 15,
            paddingTop: 30,
          }}
        >
          <Text style={styles.title}>순위</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    padding: 15,
    marginTop: 30,
    paddingBottom:50
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    padding: 15,
    paddingTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
  },
});
