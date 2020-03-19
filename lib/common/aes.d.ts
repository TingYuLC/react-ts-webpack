interface AesProps {
    key: string;
    iv: string;
    encrypted: (str: string) => string;
}
declare const aes: AesProps;
export default aes;
