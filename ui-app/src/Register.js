import React from 'react';
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

const Register = () => {
  return (
    <>
      <RegisterBox>
        <div>Register</div>
        <p>Please fill in this form to create an account.</p>

        <InputField type="text" placeholder="Name" name="name" />

        <InputField type="text" placeholder="Email" name="email" />

        <InputField type="text" placeholder="Address" name="address" />

        <InputField type="text" placeholder="Username" name="username" />

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
