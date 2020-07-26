import React from 'react';
import { useHistory } from 'react-router-dom';
import aes from '@/common/aes';
import signin from '@/service/login/signin';
import './index.less';

const { useState } = React;

const { encrypted } = aes;

const Login = () => {
  const history = useHistory();
  const [usernameRef] = useState(React.createRef<HTMLInputElement>());
  const [passwordRef] = useState(React.createRef<HTMLInputElement>());

  const loginSubmit = () => {
    const submitData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    signin({
      auth: encrypted(JSON.stringify(submitData)),
    })
      .then(() => {
        history.push('/movie');
      });
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
          onClick={loginSubmit}
        >
          登录
        </button>
      </div>
    </div>
  );
};

export default Login;
