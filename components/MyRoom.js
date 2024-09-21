import { StyleSheet, Text, View } from "react-native";
import DetailHeader from "./DetailHeader";

export default function MyRoom({navigation}) {
  return (
    <View>
      <DetailHeader navigation={navigation} title={"마이룸"} n={"MainPage"} />
      <Text>test</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 5,
  },
});
