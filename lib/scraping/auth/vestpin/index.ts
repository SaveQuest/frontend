import QuickCrypto from "react-native-quick-crypto";
import { Buffer } from "@craftzdog/react-native-buffer";
import type { RidResp, SeedResp } from "./models";
import { deriveEccKey, derivePinKey, eccSignData, encryptPin, getCurrentTimestamp, getEncSeed, hashChallenge, obfuscatePin } from "./core";

/**
 * VestPIN
 * 
 * PIN 등록시 makeReqRidReq, makeRegisterReq (RidResp는 저장해둬야함)
 * 
 * PIN 로그인시 makeReqSeed, makeLoginReq
 */
export class VestPIN {
    private readonly fingerPrint: Buffer

    constructor(
        private readonly interval: number,
        fingerPrintBase64: string
    ) {
        this.fingerPrint = Buffer.from(fingerPrintBase64, "base64")
        if (this.fingerPrint.length !== 32) {
            throw new Error("Invalid FingerPrint Length")
        }
    }

    makeReqSeedReq(rid: string, hrid: string) {
        return {
            msgCode:"REQSEED",
            rid,
            hrid,
            requestDate: getCurrentTimestamp(),
            reqChallenge: "Y"
        }
    }

    makeLoginReq(pin: string, rid: string, { challenge, seed1 }: SeedResp) {
        const RID = Buffer.from(rid, "base64")
        const SEED1 = Buffer.from(seed1, "base64")
        const OBF_PIN = obfuscatePin(pin, this.interval)

        const HASHED_CHALLENGE = hashChallenge(challenge)

        const ECC_KEY = deriveEccKey(RID, OBF_PIN, SEED1)
        const SIGNED_DATA = eccSignData(ECC_KEY, Buffer.concat([RID, this.fingerPrint]))
        const CHALL_SIGNED_DATA = eccSignData(ECC_KEY, Buffer.from(HASHED_CHALLENGE))

        return {
            signature: SIGNED_DATA.toString("base64"),
            challengeSignature: CHALL_SIGNED_DATA.toString("hex"),
        }
    }

    makeReqRidReq(userId: string) {
        return {
            authType: "0",
            fingerPrint: this.fingerPrint.toString("base64"),
            msgCode: "REQRID",
            userId
        }
    }

    makeRegisterReq(pin: string, nickName: string, { rid, seed1, token, hrid }: RidResp) {
        const RID = Buffer.from(rid, "base64")
        const SEED1 = Buffer.from(seed1, "base64")
        const OBF_PIN = obfuscatePin(pin, this.interval)

        const ECC_KEY = deriveEccKey(RID, OBF_PIN, SEED1)
        const ECC_PUB_KEY = Buffer.from(ECC_KEY.getPublic(false, "array"))

        const SIGN_DATA = Buffer.concat([RID, ECC_PUB_KEY, this.fingerPrint])
        const SIGNED_DATA = eccSignData(ECC_KEY, SIGN_DATA)

        const PIN_SEED = QuickCrypto.randomBytes(32)
        const ENC_SEED = getEncSeed(PIN_SEED)
        const PIN_KEY = derivePinKey(PIN_SEED)

        const ENCRYPTED_PIN = encryptPin(PIN_KEY, OBF_PIN)
        const ENC_PIN = Buffer.from(JSON.stringify({
            count: 1,
            cipher: ENCRYPTED_PIN.toString("hex"),
            interval: this.interval,
        }).replaceAll(" ", "")).toString("hex")

        return {
            signedData: SIGNED_DATA.toString("base64"),
            pub1: ECC_PUB_KEY.toString("base64"),
            token,
            fingerPrint: this.fingerPrint.toString("base64"),
            nickName,
            hrid,
            encPin: ENC_PIN,
            encSeed: ENC_SEED
        }
    }

    static generateFingerPrint() {
        return QuickCrypto.randomBytes(32).toString("base64")
    }
}