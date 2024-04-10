import React, {useState} from 'react';
import styled from 'styled-components';
// import Register from "./Register";
import { Link } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

const LoginBox = styled.div`
  // margin: 100px;

  text-align:center;
  // border-radius:50;
  border: 5px solid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;`

const Title =styled.div`
font-size:20px;
color:white`

const Label = styled.div`
display:flex;
width:24%;
text-align:left;
padding-left: 10px;
color:white;`

const InputField = styled.input`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
box-sizing: border-box;`

const Background = styled.div`
background-image: url('http://wallpapercave.com/wp/pEeUsp1.jpg');
height: 100vh;
display: cover;
background-size: cover;
`;

const Button = styled.button`
background-color: blue;
color: white;
padding: 10px 20px;
margin: 8px 0;
border: none;
cursor: pointer;
width: 100%;
`
// const Button2 = styled.button`
// color:blue;
// background-color: none;
// border: none;
// `
// const Button3 = styled.button`
// color:blue;
// background-color: none;
// border: none;
// `

// const UserDetails =
// {
//   username: "galaxy-traveler",
//   password: "secret-pass"
// }

const Login = () => {
  const [userData, setUserData] = useState(null);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

const handleSubmit = async (event) => {
  event.preventDefault();

  const response = await fetch('http://localhost:8080/auth/signin', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password})
    })
    // .then(response => {
    //  if response.status !== 200) {
    //   throw new Error('Not a valid Username or Password');
    // }
    // .then(data => {
    //   setUserData(data);
    // })
    if (response.status === 200) {
      const data = await response.json();
      setUserData(data);
    }else{
      setError('User not found');
    }
}


  return (
   <>
    <Background>
    <LoginBox>
    <Title>Login Form</Title>
    <br />
    <form onSubmit={handleSubmit}>
    <div>
    <Label>Username</Label>
      <InputField
        type="text"
        placeholder="Enter Username"
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
    <br />
    <div>
    <Label>Password</Label>
      <InputField
        type="text"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button type = "submit" onClick={() => console.log('Button Clicked')}>Login</Button>
      {/* <Button3 type = "forgot-pw" onClick={() => console.log('Button Clicked')}>Forgot Password</Button3> */}
      <Link to={'/register'} style={{color:"white"}}>Click Here to Register</Link>
      </form>
    </LoginBox>
    </Background>
    </>
  );
};

export default Login;
