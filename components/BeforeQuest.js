import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Card from "./Card";
import SafeIcon from "./SafeIcon";

export default function BeforeQuest({navigation}) {
  return (
    <Card>
      <TouchableOpacity onPress={() => navigation.navigate("DetailBeforeQuest")}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom:12
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              이전 도전과제
            </Text>
          </View>

          <Text style={{ fontSize: 20, fontWeight: "bold" }}>&gt;</Text>
        </View>

        <View style={styles.contents}>
          <SafeIcon width="35" height="35" />
          <View style={{flexDirection:'row',justifyContent:'space-between',gap:12}}>
            <View style={styles.content}>
              <Text style={{ fontSize: 13 }}>누적 획득한 코인</Text>
              <Text
                style={{ fontSize: 17, fontWeight: "bold", color: "#389348" }}
              >
                4600
              </Text>
            </View>
            <View style={styles.content}>
              <Text style={{ fontSize: 13 }}>성공한 도전과제</Text>
              <Text
                style={{ fontSize: 17, fontWeight: "bold", color: "#389348" }}
              >
                321
              </Text>
            </View>
            <View style={styles.content}>
              <Text style={{ fontSize: 13 }}>실패한 도전과제</Text>
              <Text
                style={{ fontSize: 17, fontWeight: "bold", color: "#EC2424" }}
              >
                11
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
}

const styles = StyleSheet.create({
  contents: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between'
  },
});
