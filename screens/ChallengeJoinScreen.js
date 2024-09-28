import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ArrowIcon from "../components/ArrowIcon";
import ChallengeBox from "../components/ChallengeBox";
import { useApi } from "../hooks/useApi";
import { requester } from "../lib/api";

const getDateTxt = (d) => {
  const dd = new Date(d)
  return `${dd.getMonth()}.${dd.getDay()}`
}

export default function ChallengeJoinScreen({ navigation }) {
  const { state: pubChallenge } = useApi(() => requester.fetchPublicChallenge(), "PUB_CHALLENGE")
  const { state: challengeHdr } = useApi(() => requester.fetchDSTChallengeHeader(), "DST_CHALLENGE_JOIN_HDR")

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ImageBackground
          source={require("../assets/LogoBackground.png")}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <ArrowIcon color={"white"} />
            </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <View style={{ alignItems: "center", marginBottom: 17 }}>
              <Text style={{ fontSize: 18, color: "white", fontWeight: 'bold' }}>
                챌린지
              </Text>
            </View>

            <View style={styles.process}>
              {challengeHdr && challengeHdr.element.map(e => {
                return <View key={e.name}>
                  <Text style={{ fontSize: 15, color: "white" }}>{e.name}</Text>
                  <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>{e.value}</Text>
                </View>
              })}
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.contents}>
        {pubChallenge && pubChallenge.challenges.map(e => {
          return <ChallengeBox key={"PUB_CHALLENGE_" + e.id} challengeId={e.id} title={e.name} date={e.endsAt} people={e.people} coin={e.totalReward} cost={e.entryFee} />
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
  headerContainer: {
    marginHorizontal: -5,
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
    zIndex: 99,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    alignItems: "center",
    position: "absolute",
    height: 151,
    width: "100%",
    paddingTop: 35,
    padding: 12,
  },
  process: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contents: {
    padding: 12,
    gap: 12,
  },
});
