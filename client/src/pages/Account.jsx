import React, { useState, useEffect } from "react";
import Login from "../components/login";
import Signup from "../components/signup";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import UpdateInfo from "../components/updateInfo";


function Account({ activeUser, setActiveUser, getCurrentUser}) {
  const [update, setUpdate] = useState(false)
  const [user, setUser] = useState({
    email: '',
    first_name: '',
    last_name: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user)
    try {
      const response = await axios.put('/update_user/', user);
          if (response.data["update_info"] == true) {
            console.log("success!");
            window.location.reload();
          }
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }

  };

console.log(activeUser)
  return (
    <div>
      <h1>Account</h1>
      
      {activeUser && 
      <div>
      <h3>Welcome {activeUser.email}</h3>
      
      <p>Email: {activeUser.email}</p>
      <p>First Name: {activeUser.first_name}</p>
      <p>Last Name: {activeUser.last_name}</p>
      </div>
      }
      

      <button onClick={() => setUpdate(!update)}>Update Info</button>
      {update ? (
        <form onSubmit={handleSubmit}>
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            name="first_name"
            value={user.first_name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={user.last_name}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Update</button>
        </form>
      ) : null}
    </div>
  );

}

export default Account;











    {/* <h1>Account</h1>
      {activeUser && <h3>Welcome {activeUser.email}</h3>}
      <button onClick={() => setUpdate(!update)}>Update Info</button>
      {update ? ( */}
        {/* <div> */}
          {/* <button onClick={() => setUpdate(!update)}>Cancel</button> */}
          {/* <UpdateInfo setActiveUser={setActiveUser} activeUser={activeUser} getCurrentUser={getCurrentUser}/> */}
          
        {/* </div> */}
      {/* ) : null} */} 
    {/* </div>
  );
} */}