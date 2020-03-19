import * as React from 'react';
import './index.less';
interface CarouseProps {
    index?: string;
    autoPlay?: boolean;
}
interface CarouseState {
    index: number;
    lock: boolean;
}
declare class Carouse extends React.Component<CarouseProps, CarouseState> {
    constructor(props: Readonly<{}>);
    componentDidMount(): void;
    carouseAnimate(width?: number): void;
    prevClick(): void;
    nextClick(): void;
    render(): JSX.Element;
}
export default Carouse;
