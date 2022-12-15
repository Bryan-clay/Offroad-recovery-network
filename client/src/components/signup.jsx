import "./components.css";
import axios from 'axios';

function Signup() {

  function signUp () {
    axios.post("signup/",{email: 'bryan@c.com', password: 'password'})
    .then(response => {
      console.log(response)
    });
  }


  return (
    <div>
      Sign Up
      <div>
        <form >
          <div>
            <h3>Please enter your e-mail</h3>
            <input id="email" type="text" placeholder="e-mail" />
          </div>
          <div>
            <h3>Please enter your password</h3>
            <input id="password" type="password" placeholder="password" />
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
