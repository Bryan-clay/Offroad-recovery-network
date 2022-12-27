import React, { useState, useEffect } from "react";

import SignIn from "../components/login";
import Signup from "../components/signup";
import axios from "axios";
// import LogOut from "../components/logout";


function Login({activeUser, setActiveUser, getCurrentUser, setIsAdmin}) {
  const [signUpShow, setSignUpShow] = useState(false);
  const [logInShow, setLogInShow] = useState(false);

  // console.log(activeUser);



  const logOut = async () => {
  
 
    let response = await axios.post("logout/");
    console.log(response)
    if (response.data["logout"] == true) {

      window.location.href='/'
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
              getCurrentUser={getCurrentUser}
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
