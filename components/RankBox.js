import { StyleSheet, Text, View } from "react-native";

export default function RankBox({ count,name,lv,cName,money }) {
  const getRankColor = () => {
    if (count === 1) return "#E9D063";
    if (count === 2) return "#D5D6D8";
    if (count === 3) return "#AC835B";
    return "#4D5764";
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
          <Text style={{color:'black', fontWeight:'bold', fontSize:24}}>{name}</Text>
          <Text style={{color:'#55555E', fontSize:16,}}>
            Lv.<Text style={{fontWeight:'bold', fontSize:15}}>{lv}</Text>
          </Text>
        </View>

        <View style={styles.two}>
          <Text style={{fontSize:14}}>{cName}</Text>
          <Text style={{fontSize:20, fontWeight:'bold'}}>₩{money}</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Box: {
    width: "100%",
    height: 75,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#B4B9BE",
    flexDirection: "row",
    marginBottom:3
  },
  BoxLeft: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  BoxRight: {
    flex: 4,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:18
  },
  one:{
    flexDirection: "row",
    alignItems: "baseline",
  },
  two:{

  },
  tree:{

  },

  rankCount: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 0,
    padding: 0,
    position:'relative',
    bottom:3
  },
});
