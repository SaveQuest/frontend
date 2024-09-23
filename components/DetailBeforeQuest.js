import { ScrollView, StyleSheet, Text, View } from "react-native";
import DetailHeader from "./DetailHeader";
import QuestItem from "./QuestItem";

export default function DetailBeforeQuest({ navigation }) {
  return (
    <View style={styles.container}>
      <DetailHeader
        navigation={navigation}
        title={"이전 도전과제"}
        n={"MainPage"}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <Text style={{color:'#55555E',fontSize:17,marginBottom:9}}>2024 6 10</Text>
            <QuestItem
              title="게임에서 총 50,000원 이하로 사용하기 [~6/12]"
              amountUsed="₩999,999,999"
              status="success"
              progress={100}
              goal="50,000원"
              iconColor="#FF4C4C"
            />
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
    paddingBottom: 50,
  },
})