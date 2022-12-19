import './components.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

function Login({activeUser, setActiveUser}) {

// const [user, setUser] = useState(null)
// TODO: SIGN IN DOES NOT WORK


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
      window.location.reload()
    }
  };

  // const currentUser =async() => {
  //   let response = await axios.get('current_user/')
  //   let user = response.data && response.data[0] && response.data[0].fields
  //   setActiveUser(user);
  // }
  // useEffect(()=>{
  //   currentUser()
  // },[])

  return (
    <div>
      LOGIN
      <div>
        <form onSubmit={signIn}>
          <input id='signInEmail' type="text" placeholder="e-mail" />
          <input id = 'signInPassword' type="password" placeholder="password" />
          <br/>
          <button onClick={signIn}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;