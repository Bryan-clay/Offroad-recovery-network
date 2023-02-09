import './components.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Container, Card } from "react-bootstrap";


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
      <div>
        <form onSubmit={signIn}>
          <input id="signInEmail" type="text" placeholder="e-mail" />
          <input id="signInPassword" type="password" placeholder="password" />
          <br />
          <Button className="mainButton" onClick={signIn}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;