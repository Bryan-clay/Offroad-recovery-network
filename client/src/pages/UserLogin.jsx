import React, { useState, useEffect } from "react";
import SignIn from "../components/login";
import Signup from "../components/signup";
import Nav from "react-bootstrap/Nav";
import axios from "axios";


function Login({activeUser, setActiveUser, currentUser}) {
  const [signUpShow, setSignUpShow] = useState(false);
  const [logInShow, setLogInShow] = useState(false);
  // const [activeUser, setActiveUser] = useState(null);
  console.log(activeUser);



  const logOut = async () => {
    // axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken()
    let response = await axios.post("user/logout/");
    if (response.data["logout"] == true) {
      window.location.reload();
    }
  };


  return (
    <div>
      <div>
        {activeUser && <h3>Welcome {activeUser.email}</h3>}
        <div>
          <p>Already have an account?</p>
          <button onClick={() => setLogInShow(!logInShow)}>Log In</button>
          {logInShow ? (
            <div>
              <SignIn 
              setActiveUser={setActiveUser}
              currentUser={currentUser}
              />
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

        <br />
        <div>
          <button onClick={logOut}>Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
