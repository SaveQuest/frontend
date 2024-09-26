import { useEffect, useState } from "react"
import { Alert, Button, Text, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AsyncStorage from '@react-native-async-storage/async-storage';

import { KBPayClient, Telecom } from "../lib/scraping"

export default function KBCardAuthScreen() {
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

            setReqUserData({
                name, rrn, phoneNo: /^(010)(\d{4})(\d{4})$/.exec(phoneNo).splice(1).join("-"), telecom: Telecom[carrier]
            })
        })();
    }, [])

    const 인증번호요청 = async () => {
        if (!reqUserData) return

        console.log("DATA", reqUserData)
        await client.registerPINStep1(reqUserData)
            .catch(err => {
                console.error(err)
                Alert.prompt("", "오류")
            })
    }

    const 확인 = async () => {
        await client.registerPINStep2(code, reqUserData)
        await client.registerPINStep3()

        await AsyncStorage.setItem("CARD_CRED", client.serialize())
    }

    return <SafeAreaView>
        <Button title="인증번호 요청" onPress={인증번호요청} />
        <TextInput placeholder="인증번호" style={{ borderWidth: 1 }} value={code} onChangeText={(txt) => setCode(txt)} />
        <Button title="확인" onPress={확인} />
    </SafeAreaView>
}
