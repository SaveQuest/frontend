import { StyleSheet, Text, View } from "react-native";

export default function RankBox({ count,name,lv,cName,money }) {
  const getRankColor = () => {
    if (count === 1) return "#C3B000";
    if (count === 2) return "#6E6E6E";
    if (count === 3) return "#FF9A9A";
    return "gray";
  };
  return (
    <View style={styles.Box}>
      <View style={styles.BoxLeft}>

        <Text style={[styles.rankCount, { color: getRankColor() }]}>
          {count}
        </Text>

      </View>


      <View style={styles.BoxRight}>

        <View style={styles.one}>
          <Text style={{color:'black', fontWeight:'bold', fontSize:18}}>{name}</Text>
          <Text style={{color:'#55555E', fontSize:16,}}>
            Lv.<Text style={{fontWeight:'bold', fontSize:15}}>{lv}</Text>
          </Text>
        </View>

        <View style={styles.two}>
          <Text style={{fontSize:14}}>{cName}</Text>
          <Text style={{fontSize:20, fontWeight:'bold'}}>₩{money}</Text>
        </View>

        {/* <View style={styles.tree}>
          <Text>지금까지 줄인 소비 금액</Text>
          <Text>₩54,000</Text>
        </View> */}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Box: {
    width: "100%",
    height: 75,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E4E4E4",
    backgroundColor: "#282828",
    flexDirection: "row",
  },
  BoxLeft: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  BoxRight: {
    flex: 4,
    backgroundColor: "white",
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:18
  },
  one:{

  },
  two:{

  },
  tree:{

  },

  rankCount: {
    fontSize: 55,
    fontWeight: "bold",
    margin: 0,
    padding: 0,
  },
});
