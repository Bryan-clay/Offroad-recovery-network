import React from 'react'

function Signup() {
  return (
    <div>
      Sign Up
      <div>
        <form action="submit">
          <div>
            <h3>Please enter your e-mail</h3>
            <input type="text" placeholder="e-mail" />
          </div>
          <div>
            <h3>Please enter your password</h3>
            <input type="password" placeholder="password" />
            <h3>Please re-enter your password</h3>
            <input type="password" placeholder="password" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup
