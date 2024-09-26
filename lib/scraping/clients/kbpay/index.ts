import { VestPIN } from "../../auth/vestpin"
import { SqClientError, SqDomainError } from "../../errors"
import { HttpClient } from "../../http"
import { QueryRange, TxItem } from "../../models"
import { generateRandomPIN } from "../../utils"
import type { KBPayState, UserSMSAuthInfo } from "./models"
import qs from "qs"

export class KBPayClient {
    private state: KBPayState
    private http: HttpClient

    constructor(stateString?: string) {
        if (stateString) {
            // TODO: 검증
            this.state = JSON.parse(stateString) as any as KBPayState
        } else {
            this.state = {
                version: 1,
                vestPinFP: VestPIN.generateFingerPrint(),
                pin: generateRandomPIN(6)
            }
        }

        this.http = new HttpClient()
    }

    async registerPINStep1(
        { name, rrn, phoneNo, telecom }: UserSMSAuthInfo
    ) {
        if (!/^\d{7,13}$/.test(rrn)) {
            throw new SqDomainError("주민등록번호가 올바르지 않습니다")
        }


        await this.http.instance.get("https://m.kbcard.com/CMN/DVIEW/MOBMCXOHMLGC0032")
        const resp = await this.http.instance.post("https://m.kbcard.com/CMN/API/MODMCXHIACMC0014?isAjax=Y&isNoFrame=Y&responseContentType=json&mainCC=a&smsAttackCheck=Y", qs.stringify({
            userNm1: name,
            smsUserSsno1: rrn.substring(0, 6),
            smsUserSsno2: rrn.substring(6, 7),
            phoneNo: phoneNo,
            telCom: telecom,
            orderType: "2",
            selfCertnResnNo: "15",
        })).then(res => res.data)

        console.log(resp, {
            userNm1: name,
            smsUserSsno1: rrn.substring(0, 6),
            smsUserSsno2: rrn.substring(6, 7),
            phoneNo: phoneNo,
            telCom: telecom,
            orderType: "2",
            selfCertnResnNo: "15",
        })

        if (resp?.errorcode !== "0000") {
            throw new SqClientError("인증번호 요청 실패")
        }
    }

    async registerPINStep2(
        code: string,
        { name, rrn, phoneNo, telecom }: UserSMSAuthInfo
    ) {

        const resp = await this.http.instance.post("https://m.kbcard.com/CMN/API/MODMCXHIACMC0014?isAjax=Y&isNoFrame=Y&responseContentType=json&mainCC=b", qs.stringify({
            userNm1: name,
            smsUserSsno1: rrn.substring(0, 6),
            smsUserSsno2: rrn.substring(6, 7),
            phoneNo: phoneNo,
            telCom: telecom,
            orderType: "2",
            selfCertnResnNo: "15",
            cphnCertnNo: code
        })).then(res => res.data)

        console.log(resp)

        if (resp?.errorcode !== "0000") {
            throw new SqClientError("인증번호 검증 실패")
        }
    }

    async registerPINStep3() {
        const vestPin = new VestPIN(5, this.state.vestPinFP)

        const res = await this.http.instance.get("https://m.kbcard.com/CMN/DVIEW/MOBMCXOHMLGC0032?mainCC=a&isMberJoin=N").then(res => res.data);

        const nickNameMatch = /var nickName = '(.*?)';/.exec(res);
        const userIdMatch = /var userID = '(.*?)';/.exec(res);

        if (!nickNameMatch || !userIdMatch || !nickNameMatch[1] || !userIdMatch[1]) {
            throw new SqClientError("사용자 정보가 없습니다")
        }

        const nickName = nickNameMatch[1]
        const userId = userIdMatch[1]

        const res1 = await this.http.instance.post("https://m.kbcard.com/CMN/API/MOBMCXOBCZZC0017?responseContentType=json",
            vestPin.makeReqRidReq(userId)
        ).then(res => res.data);

        console.log("RES1", res1)
        if (res1?.errorcode !== "0000" && res1?.errCode !== 0) {
            throw new SqClientError("STEP3-1 오류")
        }

        this.state.vestPinRid = res1.rid
        this.state.vestPinHRid = res1.hrid

        // TODO: res1 검증
        const res2 = await this.http.instance.post("https://m.kbcard.com/CMN/API/MOBMCXOHMLGC0032?isAjax=Y&isNoFrame=Y&responseContentType=json&mainCC=b",
            qs.stringify(vestPin.makeRegisterReq(this.state.pin, nickName, res1 as any))
        ).then(res => res.data)

        console.log("RES2", res2)
        if (res2?.errorcode !== "0000" && res1?.errCode !== 0) {
            throw new SqClientError("STEP3-2 오류")
        }
    }

    async fetchLoginedUserInfo() {
        const data = await this.http.instance.post<{ userName: string }>("https://m.kbcard.com/MKB/API/MOEM0302", "mainCC=c").then(res => res.data)
        return {
            userName: data.userName
        }
    }

    async login() {
        console.log(this.state)
        if (!this.state.vestPinRid || !this.state.vestPinHRid) {
            throw new Error("로그인에 필요한 정보가 부족합니다.")
        }

        const vestPin = new VestPIN(5, this.state.vestPinFP)

        const seedRes = await this.http.instance.post("https://m.kbcard.com/CMN/API/MOBMCXOBCZZC0017?responseContentType=json",
            vestPin.makeReqSeedReq(this.state.vestPinRid, this.state.vestPinHRid)
        ).then(res => res.data)

        if (seedRes.errCode !== 0) {
            throw new SqClientError("SEED를 가져오는데 실패했습니다.")
        }

        const req1 = vestPin.makeLoginReq(this.state.pin, this.state.vestPinRid, seedRes)
        const res1 = await this.http.instance.post("https://m.kbcard.com/CMN/API/MOBMCXOHMLGC0018?isAjax=Y&isNoFrame=Y&responseContentType=json",
            qs.stringify({
                procId: "i",
                mobileAppCmnYn: "Y",
                prmSignature: req1.signature,
                prmPub2: "",
                prmToken: seedRes.token,
                prmFingerprint: this.state.vestPinFP,
                prmUsage: "Login",
                prmChallengeSignature: req1.challengeSignature,
                prmReferrerKey: seedRes.referrerKey,
            })
        ).then(res => res.data)
        console.log(res1, {
            procId: "i",
            mobileAppCmnYn: "Y",
            prmSignature: req1.signature,
            prmPub2: "",
            prmToken: seedRes.token,
            prmFingerprint: this.state.vestPinFP,
            prmUsage: "Login",
            prmChallengeSignature: req1.challengeSignature,
            prmReferrerKey: seedRes.referrerKey,
        })
    }

    async fetchTxList(range: QueryRange): Promise<TxItem[]> {
        let seq = 0;
        const list = [];

        while (1) {
            console.log("request", seq)
            await this.http.instance.get("https://m.kbcard.com/MKB/DVIEW/KMBM0001")

            const res = await this.http.instance.post("https://m.kbcard.com/MKB/API/KMBM0001?responseContentType=json&mainCC=a",
                "" + new URLSearchParams({
                    cardSeq: String(seq),
                    startDate: range.startQueryDate.toDateString(),
                    endDate: range.endQueryDate.toDateString()
                })
            )

            const data = res?.data!
            console.log(data)

            if (data.resultCode !== "UCXH0000") break

            // TODO: 함수로 분리
            const [year, month, day] = data.allowDate.split(".")
            const time = data.allowTime

            const date = new Date(`20${year}-${month}-${day}T${time}Z`)
            date.setHours(date.getHours() - 9); // kb가 주는건 kst로 간주하고 -9
            //

            const isDomestic = data.domesticOverseaDstic === "1"; // 1: 국내, 2: 해외, 다른 값은 아마 없을 것으로 사료.
            const isForeign = data.domesticOverseaDstic === "2";

            if (isForeign) continue;

            list.push(
                {
                    cardIssuer: "KB",
                    approvalNumber: data.allowNo,
                    approvalTime: date.getTime() / 1000 | 0,
                    amount: parseInt(data.athorAmt.replaceAll(",", "")),
                    merchant: {
                        id: data.storeNo,
                        name: data.storeName,
                        isForeign,
                        businessNumber: data.storeBusinessNo
                    },
                } as TxItem
            )
            seq++
        }

        return list
    }

    serialize() {
        return JSON.stringify(this.state)
    }
}
