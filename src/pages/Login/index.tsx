import * as React from 'react';
import aes from '@/common/aes';
import './index.less';

const { useState } = React;

const { encrypted } = aes;

const Login = () => {
  const [usernameRef] = useState(React.createRef<HTMLInputElement>());
  const [passwordRef] = useState(React.createRef<HTMLInputElement>());

  const signin = () => {
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    encrypted(JSON.stringify(data));
  };

  return (
    <div className="login-wrapper">
      <div className="login-content">
        <input
          className="login-input"
          type="text"
          ref={usernameRef}
          placeholder="用户名"
        />
        <input
          className="login-input"
          type="password"
          ref={passwordRef}
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
