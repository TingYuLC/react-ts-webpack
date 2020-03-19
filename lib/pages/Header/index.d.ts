import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ThemeState } from '@/store/theme/types';
import './index.less';
interface HeaderProps {
    theme: ThemeState;
}
declare const _default: React.ComponentClass<Pick<Pick<RouteComponentProps<{}, import("react-router").StaticContext, any> & HeaderProps, "history" | "location" | "match" | "staticContext">, never>, any> & import("react-router").WithRouterStatics<import("react-redux").ConnectedComponent<({ theme, history, }: RouteComponentProps<{}, import("react-router").StaticContext, any> & HeaderProps) => JSX.Element, Pick<RouteComponentProps<{}, import("react-router").StaticContext, any> & HeaderProps, "history" | "location" | "match" | "staticContext">>>;
export default _default;
