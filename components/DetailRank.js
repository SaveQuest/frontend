import {
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import RankItem from "./RankItem";
import DetailHeader from "./DetailHeader";
import { Ionicons } from '@expo/vector-icons'
import { useApi } from "../hooks/useApi.js"
import { requester } from "../lib/api";

export default function DetailRank({ route, navigation }) {
  const { id } = route.params
  const { state: challData } = useApi(() => { if (id) return requester.fetchChallengeDetail(id) }, "CHALL_DETAIL")

  if (!id) {
    navigation.goBack()
    return <></>
  }


  return (

    <View style={styles.container}>
      <DetailHeader navigation={navigation} title={'순위'} n={'Main'} />

      {/* 전체 순위 리스트 */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.anyRank}>
          {challData && challData.ranking.map((rank, index) => (
            <RankItem
              key={index}
              count={rank.rank}
              name={rank.name}
              lv={rank.level}
              cName={rank.element[0].name}
              money={rank.element[0].value}
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
    padding: 10,
    paddingTop: 10,
  },
  anyRank: {
    marginTop: 20,
    backgroundColor: "#f0f0f0",
  },
});