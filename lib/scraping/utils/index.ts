import QuickCrypto from "react-native-quick-crypto";

const NUMBERS = "0123456789"
export function generateRandomPIN(length: number) {
    return Array.from(QuickCrypto.randomBytes(length)).map(e => NUMBERS[e % NUMBERS.length]!).join("")
}

export function objToFormData(obj: Record<string, string>) {
    const formData = new FormData();
    for (const key in obj) {
        formData.append(key, obj[key]);
    }

    return formData;
}