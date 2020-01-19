import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { AppState } from '@/store';
import { ThemeState } from '@/store/theme/types';
import { toning, search, back } from '@/static';
import './index.less';

const { useState } = React;

interface BaseProps {
  title?: string;
  leftImg?: string;
  rightImg?: string;
  leftClick?: () => void;
  rightClick?: () => void;
}

interface HeaderProps {
  theme: ThemeState;
}

interface HeaderConfigProps {
  [name: string]: BaseProps;
}

const Header = ({
  theme, history,
}: RouteComponentProps & HeaderProps) => {
  const headerConfig: HeaderConfigProps = {
    '/theme': {
      title: '主题',
      leftImg: back,
      rightImg: search,
      leftClick: () => { history.goBack(); },
    },
    default: {
      title: '豆瓣App',
      leftImg: back,
      rightImg: search,
      leftClick: () => { history.push('/'); },
    },
    '/': {
      title: '豆瓣App',
      leftImg: toning,
      rightImg: search,
      leftClick: () => { history.push('/theme'); },
    },
  };
  const defaultConfig = headerConfig[history.location.pathname] || headerConfig.default;
  const [title, setTitle] = useState(defaultConfig.title);
  const [leftImg, setLeftImg] = useState(defaultConfig.leftImg);
  const [rightImg, setRightImg] = useState(defaultConfig.rightImg);

  history.listen(() => {
    const config = headerConfig[history.location.pathname] || headerConfig.default;
    if (!config) return;
    setTitle(config.title);
    setLeftImg(config.leftImg);
    setRightImg(config.rightImg);
  });

  const leftClick = () => {
    const config = headerConfig[history.location.pathname] || headerConfig.default;
    config.leftClick();
  };

  return (
    <div className="app-header" style={{ backgroundColor: theme.color }}>
      <img role="presentation" src={leftImg} onClick={leftClick} alt="leftImg" />
      <p className="title">{title}</p>
      <img src={rightImg} alt="rightImg" />
    </div>
  );
};

export default withRouter(connect((state: AppState) => ({
  theme: state.theme,
}))(Header));
