import * as sjcl from 'sjcl-all';

interface AesProps {
  key: string;
  iv: string;
  encrypted: (str: string) => string;
}

const aes: AesProps = {
  key: '2807f71e9e8c7463b68c1d0089b13c41f494cfd020744d883233a4de2019561e',
  iv: '1749d46c9363691ccdb18cc9ce07e8d2',
  encrypted: (str) => {
    const bitKey = sjcl.codec.hex.toBits(aes.key);
    const bitIv = sjcl.codec.hex.toBits(aes.iv);
    const bitStr = sjcl.codec.utf8String.toBits(str);
    sjcl.beware["CBC mode is dangerous because it doesn't protect message integrity."]();
    // eslint-disable-next-line new-cap
    const aes256 = new sjcl.cipher.aes(bitKey);
    const encrypted = sjcl.mode.cbc.encrypt(aes256, bitStr, bitIv);
    const encryptedBase64 = sjcl.codec.base64.fromBits(encrypted);

    return encryptedBase64;
  },
};

export default aes;
