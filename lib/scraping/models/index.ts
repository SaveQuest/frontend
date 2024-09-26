import { SqDomainError } from "../errors"

export const CardIssuer = {
    KB: "KB",
    HANA: "HANA",
} as const
export type CardIssuer = typeof CardIssuer[keyof typeof CardIssuer];

export const Telecom = {
    SKT: 1,
    KT: 2,
    LGU_PLUS: 3,
    SKT_MVNO: 4,
    KT_MVNO: 5,
    LGU_PLUS_MVNO: 6,
} as const
export type Telecom = typeof Telecom[keyof typeof Telecom];


export interface Merchant {
    id: string
    name: string
    isForeign: boolean
    businessNumber?: string
}

export interface TxItem {
    cardIssuer: CardIssuer
    approvalNumber: string
    approvalTime: number
    amount: number
    merchant: Merchant
}

export class QueryDate {
    constructor(
        public readonly year: number,
        public readonly month: number,
        public readonly day: number,
    ) {
        const validMonth = 1 <= month && month <= 12
        if (!validMonth) {
            throw new SqDomainError(`올바르지 않은 월입니다 (${month})`)
        }

        const lastDay = new Date(year, month - 1, 0).getDate()
        const validDay = 1 <= day && day <= lastDay
        if (!validDay) {
            throw new SqDomainError(`올바르지 않은 일입니다 (${month})`)
        }
    }

    toDateString() {
        return `${this.year}${this.month.toString().padStart(2, "0")}${this.day.toString().padStart(2, "0")}`
    }
}

export class QueryRange {
    constructor(
        public readonly startQueryDate: QueryDate,
        public readonly endQueryDate: QueryDate
    ) { }
}
