
import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Terms from "./Terms"
import Popup from 'reactjs-popup';
import ResponsiveAppBar from './Components/Headerbar';

const RegisterBox = styled.div`
  text-align:center;
  border: 2px solid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
`;

const Title =styled.div`
font-size:20px;
color:black`

const Label = styled.div`
font-size:15px;
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

const Container = styled.button`
text-align: left;
background-color: #1F003E;
color: white;
border: 30px solid;
`;

const Register = () => {
  // const [userData, setUserData] = useState(null);
  // const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({
    // "id": int,
    "name": "",
    "address": "",
    "email": "",
    "username": "",
    "password": ""
  })


  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/auth/signup', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
      });

      if (response.status !== 201) {
        throw new Error("Unable to register user");
      } else {
        setNewUser({
          name: "",
          address: "",
          email: "",
          username: "",
          password: ""
        });
        alert("Registration successful");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed. Please try again.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <>
    <ResponsiveAppBar/>
      <RegisterBox>
        <Title>Register</Title>
        <p>Please fill in this form to create an account.</p>
        <form onSubmit={handleSignUp}>
        <Label>Name</Label>
        <InputField type="text" placeholder="Name" name="name" value={newUser.name} onChange={handleChange}/>
        <Label>Email</Label>
        <InputField type="text" placeholder="Email" name="email" value={newUser.email} onChange={handleChange}/>
        <Label>Address</Label>
        <InputField type="text" placeholder="Address" name="address" value={newUser.address} onChange={handleChange}/>
        <Label>Username</Label>
        <InputField type="text" placeholder="Username" name="username" value={newUser.username} onChange={handleChange}/>
        <Label>Password</Label>
        <InputField type="text" placeholder="Password" name="password" value={newUser.password} onChange={handleChange}/>
        <p> By creating an account you agree to our</p>
          <Popup
            trigger={<Button>Terms</Button>}
            modal
            nested
            style={{color:"white"}}>
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <Container>
                <Terms />
                </Container>
              </div>
            )}
          </Popup>
        <Button type = "submit" onClick={() => console.log('Button Clicked')}>Register</Button>
        </form>
        <p>Already have an account?</p>
        <Link to={'/login'} style={{color:"black"}}>Log In</Link>

      </RegisterBox>
    </>
  );
};

export default Register;
