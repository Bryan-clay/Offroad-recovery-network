import "./components.css";
import axios from 'axios';
import { Button, Container, Card, Form } from "react-bootstrap";

function Signup() {

  const signUp=async(event)=> {
    event.preventDefault()
    let email= document.getElementById('signUpEmail').value
    let password = document.getElementById("signUpPassword").value;

    // api/user/signup
    let response = await axios.post("signup/",{
      'email': email,
      'password': password
    })
    if (response.data["signup"]) {
      window.location.href = "/";
    } else {
      alert("Email already exists")
    }
  }


  return (
    <div>
      Sign Up
      <div className="d-flex justify-content-center align-items-center">
        <Form classname="rounded p-4 p-sm-3" onSubmit={signUp}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              id="signUpEmail"
              type="email"
              placeholder="Enter Email"
            />
          </Form.Group>

          <Form.Group className="bm-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="signUpPassword"
              type="password"
              placeholder="password"
            />
          </Form.Group>
          <Button className="mainButton" onClick={signUp}>
            Submit
          </Button>
        </Form>
      {/* </div> */}
      {/* <div>
        <form onSubmit={signUp}>
          <div>
            <h3>Please enter your e-mail</h3>
            <input id="signUpEmail" type="text" placeholder="e-mail" />
          </div>
          <div>
            <h3>Please enter your password</h3>
            <input id="signUpPassword" type="password" placeholder="password" />
            {/* <h3>Please re-enter your password</h3>
            <input type="password" placeholder="password" /> */}
          {/* </div>
          <Button className="mainButton" onClick={signUp}>
            Submit
          </Button>
        </form> */}
      </div> 
    </div>
  );
}

export default Signup;
