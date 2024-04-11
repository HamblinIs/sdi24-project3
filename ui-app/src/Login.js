import React, {useState} from 'react';
import styled from 'styled-components';
// import Register from "./Register";
import { Link } from "react-router-dom";
import ResponsiveAppBar from './Components/Headerbar';
// import { useAuth0 } from "@auth0/auth0-react";

const LoginBox = styled.div`
  // margin: 100px;

  text-align:center;
  // border-radius:50;
  border: 2px solid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;`

const Title =styled.div`
font-size:20px;
color:black`

const Label = styled.div`
font-size: 15px;
display:flex;
width:24%;
text-align:left;
padding-left: 10px;
color:black;`

const InputField = styled.input`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
box-sizing: border-box;`

// const Background = styled.div`
// background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfLTJ4M6oQwfGs9waFkLFz1I5UPlNdlj2iJlQip1d-8Ds_h_oRM9DeF_U_XM1Uyn5G68&usqp=CAU');
// height: 100vh;
// display: cover;
// background-size: cover;
// image-rendering: auto;
// `;

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
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  // const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");
  // const [error, setError] = useState(null);

const handleSubmit = (event) => {
  event.preventDefault();

  // const response = await fetch('http://localhost:8080/data/user_accounts', {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ userData})
  //   })

  fetch('http://localhost:8080/auth/signin', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
  })
    .then(response => {
     if (response.status === 201) {
      window.location.href ='http://localhost:8080/Home';
     }else {
      throw new Error('Not a valid Username or Password');
    }
  })
}


    // if (response.status === 201) {
    //   const data = await response.json();
    //   setUserData(data);
    // }else{
    //   setError('User not found');
    // }



  return (
   <>
   <ResponsiveAppBar/>
    <LoginBox>
    <Title>Login Form</Title>
    <br />
    <form onSubmit={handleSubmit}>
    <div>
    <Label>Username</Label>
      <InputField
        type="text"
        placeholder="Enter Username"
        // onChange={(e) => setUsername(e.target.value)}
      />
    </div>
    <br />
    <div>
    <Label>Password</Label>
      <InputField
        type="text"
        placeholder="Enter Password"
        // onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button type = "submit" onClick={() => console.log('Button Clicked')}>Login</Button>
      {/* <Button3 type = "forgot-pw" onClick={() => console.log('Button Clicked')}>Forgot Password</Button3> */}
      <Link to={'/register'} style={{color:"black"}}>Click Here to Register</Link>
      </form>
    </LoginBox>
    </>
  );
};

export default Login;
