import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DetailHeader from "./DetailHeader";
import ArrowIcon from "./ArrowIcon";

export default function DetailChallenge({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/LogoBackground.png")}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.navigate("MainPage")}>
            <ArrowIcon color={"white"} />
          </TouchableOpacity>
        </View>
        <View style={styles.title}>
          <View style={{ alignItems: "center", marginBottom:17 }}>
            <Text style={{ fontSize: 14, color: "white", opacity: 0.8 }}>
              challenge
            </Text>
            <Text style={{ fontSize: 22, color: "white", fontWeight: "bold" }}>
              Save Quest
            </Text>
          </View>

          <View style={styles.process}>
            <View>
              <Text style={{ fontSize: 15, color: "white"}}>진행중인 챌린지 수</Text>
              <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>21</Text>
            </View>
            <View>
              <Text style={{ fontSize: 15, color: "white"}}>챌린지 플레이어</Text>
              <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>21</Text>
            </View>
            <View>
              <Text style={{ fontSize: 15, color: "white"}}>얻을 수 있는 코인 수</Text>
              <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>21</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    paddingTop: 15,
    height: 151,
  },
  headerContent: {
    flexDirection: "row",
    width: "100%",
    padding: 12,
    zIndex:99
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    alignItems: "center",
    position: "absolute",
    height: 151,
    width: "100%",
    paddingTop: 15,
    padding: 12,
  },
  process: {
    width: "100%",
    flexDirection:'row',
    justifyContent:'space-between'
  },
});
