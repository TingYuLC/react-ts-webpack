import * as React from 'react';
import './index.less';

const Login = () => {
  const signin = () => {
  };

  return (
    <div className="login-wrapper">
      <div className="login-content">
        <input
          className="login-input"
          type="text"
          placeholder="用户名"
        />
        <input
          className="login-input"
          type="password"
          placeholder="密码"
        />
        <button
          type="submit"
          className="login-btn"
          onClick={signin}
        >
          登录
        </button>
      </div>
    </div>
  );
};

export default Login;
