import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RankItem from "./RankItem";
import DetailHeader from "./DetailHeader";
import { Ionicons } from '@expo/vector-icons'; // 아이콘 사용

export default function DetailRank({ navigation }) {
  return (
    <View style={styles.container}>
      <DetailHeader navigation={navigation} title={'순위'} n={'MainPage'} />

      {/* 전체 순위 리스트 */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.anyRank}>
          {[1, 2, 3].map((rank, index) => (
            <RankItem
              key={index}
              count={rank}
              name={`차호림`}
              lv={998}
              cName={"지금까지 줄인 소비 금액"}
              money={5000}
              icon={
                <Ionicons
                  name={rank === 1 ? "md-crown" : rank === 2 ? "md-crown-outline" : "md-crown"}
                  size={20}
                  color={rank === 1 ? "#FFD700" : rank === 2 ? "#C0C0C0" : "#CD7F32"} // 금, 은, 동 색상
                />
              }
            />
          ))}

          {Array.from({ length: 30 }, (_, index) => (
            <RankItem
              key={index + 3}
              count={index + 4}
              name={`차호림`}
              lv={998}
              cName={"지금까지 줄인 소비 금액"}
              money={5000}
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