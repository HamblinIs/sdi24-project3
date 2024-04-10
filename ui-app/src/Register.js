import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const RegisterBox = styled.div`
  text-align:center;
  border: 5px solid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
`;

const Label = styled.div`
display:flex;
width:24%;
text-align:left;
padding-left: 10px;
color:Black;`

const InputField = styled.input`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
box-sizing: border-box;
`;

const Button = styled.button`
background-color: blue;
color: white;
padding: 10px 20px;
margin: 8px 0;
border: none;
cursor: pointer;
width: 100%;
`;

const RegisterForm = () => {
  const [userData, setUserData] = useState(null);
  // const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  const [error, setError] = useState(null);

const handleSubmit = async (event) => {
  event.preventDefault();

  const response = await fetch('http://localhost:8080/auth/signin', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({userData})
    })
    if (response.status === 200) {
      const data = await response.json();
      setUserData(data);
    }else{
      setError('User not found');
    }
}}

const Register = () => {
  return (
    <>
      <RegisterBox>
        <div>Register</div>
        <p>Please fill in this form to create an account.</p>
        <Label>Name</Label>
        <InputField type="text" placeholder="Name" name="name" />
        <Label>Email</Label>
        <InputField type="text" placeholder="Email" name="email" />
        <Label>Address</Label>
        <InputField type="text" placeholder="Address" name="address" />
        <Label>Username</Label>
        <InputField type="text" placeholder="Username" name="username" />
        <Label>Password</Label>
        <InputField type="text" placeholder="Password" name="psw" />
        <p> By creating an account you agree to our TERMS AND CONDITIONS</p>

        <Button type = "submit" onClick={() => console.log('Button Clicked')}>Register</Button>
        <p>Already have an account?</p>
        <Link to={'/'} style={{color:"black"}}>Log In</Link>
      </RegisterBox>
    </>
  );
};

export default Register;
