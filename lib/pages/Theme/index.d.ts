/// <reference types="react" />
import './index.less';
interface ThemeConfigProps {
    dispatch: (payload: object) => void;
}
declare const _default: import("react-redux").ConnectedComponent<({ dispatch }: ThemeConfigProps) => JSX.Element, Pick<ThemeConfigProps, never>>;
export default _default;
