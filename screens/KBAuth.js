import { useEffect, useState } from "react"
import { Text, Alert, View, TouchableOpacity, StyleSheet, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AsyncStorage from '@react-native-async-storage/async-storage';

import { KBPayClient, Telecom } from "../lib/scraping"

export default function KBCardAuthScreen({ navigation }) {
    const [reqUserData, setReqUserData] = useState()
    const [client,] = useState(() => new KBPayClient())
    const [code, setCode] = useState("")

    useEffect(() => {
        console.log(client);

        (async () => {
            const name = await AsyncStorage.getItem("NAME")
            const rrn = await AsyncStorage.getItem("ID_NUM")
            const carrier = await AsyncStorage.getItem("CARRIER")
            const phoneNo = await AsyncStorage.getItem("PHONE_NO")

            if (!Telecom[carrier]) {
                Alert.prompt("", "올바르지 않은 통신사")
                return
            }


            const userData = {
                name, rrn, phoneNo: /^(010)(\d{4})(\d{4})$/.exec(phoneNo).splice(1).join("-"), telecom: Telecom[carrier]
            }
            인증번호요청(userData)
            setReqUserData(userData)
        })();
    }, [])

    const 인증번호요청 = async (userData) => {
        console.log("DATA", userData)
        await client.registerPINStep1(userData)
            .catch(err => {
                console.error(err)
                Alert.prompt("", "오류")
            })
    }

    const 확인 = async () => {
        await client.registerPINStep2(code, reqUserData)
        await client.registerPINStep3()
        await AsyncStorage.setItem("CARD_CRED", client.serialize())
        navigation.replace('Main');
    }

    return <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
            <Text style={styles.title}>카드 인증을{"\n"}진행하고 있어요</Text>
            <TextInput placeholder="인증번호" style={{ borderBottomWidth: 2, paddingVertical: 16, fontSize: 16, fontFamily: "WantedSans-Medium" }} value={code} onChangeText={(txt) => setCode(txt)} />
        </View>

        <TouchableOpacity onPress={확인} style={[{ alignItems: "center", justifyContent: "center", borderRadius: 12, padding: 16, marginBottom: 24, backgroundColor: "#43B319" }]}>
            <Text style={[styles.cardSelectFinishText]}>
                확인
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        paddingTop: 75,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
    },
    card: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: "#f0f0f0"
    },
    cardImage: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    cardName: {
        fontSize: 14,
        textAlign: 'center',
        color: '#333',
    },
    noCardButton: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#d3d3d3',
        borderRadius: 5,
    },
    noCardText: {
        color: '#555',
        fontSize: 16,
    },
    cardSelectFinish: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#4CAF50', // 완료 버튼의 배경색
        borderRadius: 5,
    },
    cardSelectFinishText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: "WantedSans-Medium"
    },
});