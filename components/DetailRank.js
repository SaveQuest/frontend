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
      {/* 고정된 DetailHeader */}
      <DetailHeader navigation={navigation} title={'순위'} n={'MainPage'}/>

      {/* 고정된 topRank */}
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

      {/* 스크롤 가능한 내용 */}
      <ScrollView contentContainerStyle={styles.scrollView}>
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
    marginTop: 25,
  },
  scrollView: {
    flexGrow: 1,
    padding: 15,
    paddingTop: 100,
  },
  topRank: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#D9D9D9",
    paddingBottom: 20,
    backgroundColor: "#f0f0f0", 
    position: 'absolute',   
    top: 60,                
    zIndex: 1,             
    paddingTop: 10,
    paddingHorizontal: 15,  
  },
  anyRank: {
    marginTop: 140, 
    backgroundColor: "#f0f0f0" 
  },
});
