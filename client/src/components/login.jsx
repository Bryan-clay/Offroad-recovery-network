import './components.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Container, Card, Form } from "react-bootstrap";


function SignIn({getCurrentUser}) {

// const [user, setUser] = useState(null)



  const signIn =async(event) =>{
    
    event.preventDefault()
    let email = document.getElementById("signInEmail").value;
    let password = document.getElementById("signInPassword").value;
    let response = await axios.post("login/", {
      'email':email,
      'password': password
    });
    console.log(response.data)
    if (response.data['login']==true){
      getCurrentUser()
      window.location.href='/'
    }
  };



  return (
    <div>
      LOGIN
      <div className="d-flex justify-content-center align-items-center">
        <Form classname="rounded p-4 p-sm-3" onSubmit={signIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              id="signInEmail"
              type="email"
              placeholder="Enter Email"
            />
          </Form.Group>

          <Form.Group className="bm-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="signInPassword"
              type="password"
              placeholder="password"
            />
          </Form.Group>
          <Button className="mainButton" onClick={signIn}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;