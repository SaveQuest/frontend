import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ArrowIcon from "./ArrowIcon";
import RankBox from "./RankBox";
import RankTopBox from "./RankTopBox";
import DetailHeader from "./DetailHeader";

export default function DetailRank({ navigation }) {
  return (
    <View style={styles.container}>
      <DetailHeader navigation={navigation} title={'순위'} n={'MainPage'}/>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.topRank}>
          <RankTopBox
            rank={2}
            name={"차호림"}
            content={"줄인 소비 금액"}
            money={"3,000"}
          />
          <RankTopBox
            style={{
              bottom: 19,
            }}
            rank={1}
            name={"차호림"}
            content={"줄인 소비 금액"}
            money={"3,000"}
          />
          <RankTopBox
            rank={3}
            name={"차호림"}
            content={"줄인 소비 금액"}
            money={"3,000"}
          />
        </View>

        <View style={styles.anyRank}>
          {Array.from({ length: 30 }, (_, index) => (
            <RankBox
              key={index}
              count={index + 4}
              name={`차호림`}
              lv={998}
              cName={"지금까지 줄인 소비 금액"}
              money={"3,000"}
            />
          ))}
        </View>
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
    paddingBottom: 50,
  },
  Arrow: {},
  topRank: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderColor: "#D9D9D9",
    paddingBottom: 20,
    marginBottom: 20,
  },
});
