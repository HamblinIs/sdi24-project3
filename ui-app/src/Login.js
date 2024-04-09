import React, {useState} from 'react';
import styled from 'styled-components';
// import { useAuth0 } from "@auth0/auth0-react";

const LoginBox = styled.div`
  margin: 100px;
  text-align:center;
  border-radius:50px;`

const Background = styled.div`
background-image: url('http://wallpapercave.com/wp/pEeUsp1.jpg');
background-image: cover`

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState ('');

  return (
    <Background style= {{'backgroundI'}}>
    <LoginBox>
    <div>Login</div>
    <br />
    <div className={'inputContainer'}>
      <input
        value={username}
        placeholder="Enter your username here"
        onChange={(ev) => setUsername(ev.target.value)}
        className={'inputBox'}
      />
    </div>
    <br />
    <div className={'inputContainer'}>
      <input
        value={password}
        placeholder="Enter your password here"
        onChange={(ev) => setPassword(ev.target.value)}
        className={'inputBox'}
        />
      </div>
    </LoginBox>
    </Background>
  );
};

export default Login;