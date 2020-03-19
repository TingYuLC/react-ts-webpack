interface SigninProps {
    auth: string;
}
/**
 * @func 登录
 * @param {data} 请求主体
 */
declare const signin: (data: SigninProps) => Promise<unknown>;
export default signin;
