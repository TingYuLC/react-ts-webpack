// import sjcl from '@/vendor/sjcl';

// interface AesProps {
//   key: string;
//   iv: string;
//   encrypted: (str: string) => string;
// }

// const aes: AesProps = {
//   key: '2807f71e9e8c7463b68c1d0089b13c41f494cfd020744d883233a4de2019561e',
//   iv: '1749d46c9363691ccdb18cc9ce07e8d2',
//   encrypted: (str) => {
//     const bitKey = sjcl.codec.hex.toBits(aes.key);
//     const bitIv = sjcl.codec.hex.toBits(aes.iv);
//     const bitStr = sjcl.codec.utf8String.toBits(str);
//     const aes256 = new sjcl.cipher.aes(bitKey);
//     let encrypted = sjcl.mode.cbc.encrypt(aes256, bitStr, bitIv);
//     encrypted = sjcl.codec.base64.fromBits(encrypted);

//     return encrypted;
//   },
// };

// export default aes;
