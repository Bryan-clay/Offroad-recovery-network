import './components.css'

function Login() {
  const signIn = () => {
   
    axios.post("login/"), {email:'bryan@clay.com', password:'bibo'}
    .then(response => {
      console.log(response);
    });
  };

  return (
    <div>
      LOGIN
      <div>
        <form type="submit">
          <input type="text" placeholder="e-mail" />
          <input type="password" placeholder="password" />
          <br/>
          <button onClick={signIn}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;