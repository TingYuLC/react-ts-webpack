import * as React from 'react';
import { connect } from 'react-redux';
import './index.less';
import colorConfigs from '@/configs/theme';
import updateTheme from '@/store/theme/action';

interface ThemeConfigProps {
  dispatch: (payload: object) => void;
}

const Theme = ({ dispatch }: ThemeConfigProps) => (
  <div className="demo-theme">
    <div className="theme-wrapper">
      {
        colorConfigs.map((item) => (
          <div role="presentation" onClick={() => dispatch(updateTheme({ color: item.color }))} className="theme-item" style={{ backgroundColor: item.color }}>
            <p style={{ color: item.color }}>{item.name}</p>
          </div>
        ))
      }
    </div>
  </div>
);

export default connect()(Theme);
