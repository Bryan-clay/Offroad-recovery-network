import "./components.css";
import axios from 'axios';

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
      <div>
        <form onSubmit={signUp} >
          <div>
            <h3>Please enter your e-mail</h3>
            <input id="signUpEmail" type="text" placeholder="e-mail" />
          </div>
          <div>
            <h3>Please enter your password</h3>
            <input id="signUpPassword" type="password" placeholder="password" />
            {/* <h3>Please re-enter your password</h3>
            <input type="password" placeholder="password" /> */}
          </div>
          <button onClick={signUp}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
