import React, { useState } from "react";
import Login from "../components/login";
import Signup from "../components/signup";
import Nav from "react-bootstrap/Nav";

function Account() {
  const [signUpShow, setSignUpShow] = useState(false);
  const [logInShow, setLogInShow] = useState(false);

  return (
    <div>
      Account
      <div>
        <p>Already have an account?</p>
        <button onClick={() => setLogInShow(!logInShow)}>Log In</button>
        {logInShow ? (
          <div>
            <Login />
          </div>
        ) : null}
      </div>
      <div>
        <p>New user?</p>
        <button onClick={() => setSignUpShow(!signUpShow)}>Sign Up</button>
        {signUpShow ? (
          <div>
            <Signup />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Account;
