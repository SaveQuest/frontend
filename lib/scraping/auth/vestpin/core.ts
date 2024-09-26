import { ec as EC } from 'elliptic';
import { Buffer } from '@craftzdog/react-native-buffer';
import QuickCrypto from 'react-native-quick-crypto';

const VESTPIN_PUBKEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ" +
    "8AMIIBCgKCAQEAjhLb3pZrbaT3PVwqoJ9GoExKVEqUVS0IM6f0pg3EfIahAYyIJ4qpQJ" +
    "KaLeG8nUImjvl0EPWtkmcvjpQe42p8Ciyc0SsRarWupurSET9xIk6ohvgA7jiwB0UGOH" +
    "ipyWPPoq6Ou6ShDGo6Bg/iZnRhZuL322ui1pniOWdnBI1z8aKQazNmx9/aykhnWMmNwh" +
    "RjJeBMsfR+xhB+Q1qtbjHd20/lROvhxEUxmetUkvSFee1SnD2LQLRRm2AJwnsDkOo0IY" +
    "bhWmz3LZRq8IKl97XszcRPKj4l9CIhfuPyqepeuCW+E9aOgdjUNzaza5OidPae7rF21n" +
    "79adVFeMKXSHjiVQIDAQAB";

function getCurrentTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

function hashChallenge(challenge: string) {
    for (let i = 0; i < 3; i++) {
        challenge = QuickCrypto.Hash("sha256").update(challenge).digest().toString("hex")
    }

    return challenge
}


function obfuscatePin(pin: string, interval: number): Buffer {
    return Buffer.from(Array.from(pin).map(ch => ch.charCodeAt(0) + interval))
}

function deriveEccKey(rid: Buffer, obfuscatedPin: Buffer, seed1: Buffer): EC.KeyPair {
    const ec = new EC('p256');
    let data = Buffer.concat([obfuscatedPin, seed1, rid]);

    for (let i = 0; i < 209; i++) {
        data = QuickCrypto.createHash('sha256').update(data).digest();
    }

    let w = BigInt('0x' + data.toString('hex'));
    w |= 1n << 255n;

    const privateKeyData = Buffer.from(w.toString(16).padStart(64, '0'), 'hex');
    return ec.keyFromPrivate(privateKeyData);
}

function eccSignData(key: EC.KeyPair, data: Buffer): Buffer {
    const msgHash = QuickCrypto.createHash('sha256').update(data).digest();
    const signature = key.sign(msgHash);
    return Buffer.from(signature.toDER());
}

function derivePinKey(randData: Buffer): Buffer {
    const PIN_COUNT = 1;

    let t = randData[(2 * PIN_COUNT + 1) % randData.length]!;
    t += randData[(3 * PIN_COUNT + 1) % randData.length]!;
    t += 1;

    for (let i = 0; i < t; i++) {
        randData = QuickCrypto.createHash('sha256').update(randData).digest();
    }
    return randData;
}

function encryptPin(key: Buffer, obfPin: Buffer): Buffer {
    const IV = "1234567890123456";

    const cipher = QuickCrypto.createCipheriv('aes-256-cbc' as any, key, IV);
    cipher.setAutoPadding(false);

    const paddedPin = Buffer.concat([obfPin, Buffer.alloc(16 - obfPin.length, 0x0A)]);
    return Buffer.concat([cipher.update(paddedPin), cipher.final()]);
}

function getEncSeed(seed: Buffer): string {
    const encryptedSeed = QuickCrypto.publicEncrypt({
        padding: QuickCrypto.constants.RSA_PKCS1_PADDING,
        key: `-----BEGIN PUBLIC KEY-----\n${VESTPIN_PUBKEY}\n-----END PUBLIC KEY-----`
    }, Buffer.concat([
        seed.subarray(0, 8),
        QuickCrypto.randomBytes(4),
        seed.subarray(8, 16),
        QuickCrypto.randomBytes(4),
        seed.subarray(16, 24),
        QuickCrypto.randomBytes(4),
        seed.subarray(24, 32),
        QuickCrypto.randomBytes(4),
    ]));

    return encryptedSeed.toString('hex');
}

export {
    obfuscatePin, deriveEccKey, eccSignData, derivePinKey, encryptPin, getEncSeed, getCurrentTimestamp, hashChallenge
};