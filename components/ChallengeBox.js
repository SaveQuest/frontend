import { StyleSheet, Text, View } from "react-native";

export default function ChallengeBox(){
    return(
        <View style={styles.box}>
            <View style={styles.title}>
                <Text style={{fontWeight:'bold',fontSize:15}}>한달동안 평균 소비 금액 줄이기</Text>
                <Text style={{fontSize:15}}>~6. 15</Text>
            </View>
            <View style={styles.content}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        width:'100%',
        height:72,
        backgroundColor:'white',
        borderRadius:17,
        padding:12,
    },
    title:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    content:{
        
    }
})