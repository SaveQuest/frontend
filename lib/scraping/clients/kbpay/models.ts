import type { Telecom } from "../../models"

export interface KBPayState {
    version: number
    vestPinFP: string
    vestPinRid?: string
    vestPinHRid?: string
    pin: string
}

export interface UserSMSAuthInfo {
    name: string
    rrn: string
    phoneNo: string
    telecom: Telecom
}