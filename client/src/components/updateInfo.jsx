import React from 'react'
import axios from 'axios'

function UpdateInfo({ activeUser, setActiveUser, getCurrentUser}) {


const updateAccount = async  (event, id) => {
event.preventDefault()

// let firstName = document.getElementById('firstName')
// let lastName = document.getElementById("lastName");
// let email = document.getElementById("email");


let response = await axios.put(`account/${id}/`, {
  firstName: document.getElementById("fName"),
  lastName: document.getElementById("lName"),
  email: document.getElementById("email"),
})
if (response.data['user update']) {
    getCurrentUser()
}


}


  return (
    <div>
      Update
      <form onSubmit={(event) => updateAccount(event, activeUser.pk)}>
        <input id="fName" type="text" placeholder="First Name" />
        <input id="lName" type="text" placeholder="Last Name" />
        <input id="email" type="text" placeholder="Update email" />
        <br />

        <button onClick={(event) => updateAccount(event, activeUser.pk)}>
          Submit
        </button>
        <button onClick={() => setUpdate(!update)}>Cancel</button>
      </form>
    </div>
  );
}

export default UpdateInfo