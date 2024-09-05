import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DetailHeader from "./DetailHeader";
import ArrowIcon from "./ArrowIcon";
import ChallengeBox from "./ChallengeBox";

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
            <Text style={{ fontSize: 18, color: "white",fontWeight:'bold', opacity: 0.8 }}>
              챌린지
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
      
      <View style={styles.contents}>
          <ChallengeBox title={"한달동안 평균 소비 금액 줄이기"} date={'6.15'} people={290} coin={29000} cost={100}/>
          <ChallengeBox title={"한달동안 평균 소비 금액 줄이기"} date={'6.15'} people={290} coin={29000} cost={100}/>
          <ChallengeBox title={"한달동안 평균 소비 금액 줄이기"} date={'6.15'} people={290} coin={29000} cost={100}/>
      </View>

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
    paddingTop: 30,
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
  contents:{
    padding:12,
    gap:12
  }
});