import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateInfo from "../components/updateInfo";
import Recoveries from "./Recoveries";



function Account({ activeUser, setActiveUser, getCurrentUser, isAdmin, activeRecoveries}) {
  const [update, setUpdate] = useState(false)
  const [showPending, setShowPending] = useState(false)
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
      const response = await axios.put('update_user/', user);

          if (response.data["update_info"] == true) {
            console.log("success!");
            window.location.href='/';
          }
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }

  };
    const approveRecovery = async (id) => {
      console.log(id);
      const response = await axios.put(`edit_recovery/${id}/`);
      console.log(response);
      if (response["approved"]) {
        window.location.href = "/";
      }
    };

  const deleteRecovery = async (id) => {
    const response = await axios.delete(`edit_recovery/${id}/`);
    if (response["delete"]) {
      alert('Request Deleted')
      window.location.href = '/';
    }
  };

    const deleteAccount = async (id) => {
      const response = await axios.delete(`delete_account/`,{
        id: id
      });
      if (response["delete"]) {
        window.location.href = "/";
      }
    };

console.log(activeUser)

  return (
    <div>
      {isAdmin && (
        <div>
          <h3>View requests pending approval</h3>
          <button onClick={() => setShowPending(!showPending)}>View</button>
          {showPending ? (
            <div>
              {activeRecoveries
                .filter((status) => status.approved == false)
                .map((filteredRecovery) => (
                  <div>
                    <p>Recovery #</p>
                    <h6>{filteredRecovery.id}</h6>
                    <h3>{filteredRecovery.name}</h3>
                    <h4>{filteredRecovery.recovery_date}</h4>
                    <span>
                      <p>Coordinates</p>
                      <h5>{filteredRecovery.location_longitude},</h5>{" "}
                      <h5>{filteredRecovery.location_latitude}</h5>
                    </span>
                    <p>Description</p>
                    <h6>{filteredRecovery.description}</h6>

                    <h6>{filteredRecovery.status}</h6>
                    <div>
                      <button
                        onClick={() => {
                          approveRecovery(filteredRecovery.id);
                        }}
                      >
                        Approve
                      </button>
                    </div>
                    <br />
                    <button
                      onClick={() => {
                        deleteRecovery(filteredRecovery.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ))}
            </div>
          ) : null}
        </div>
      )}
      <h1>Account</h1>

      {activeUser && (
        <div>
          <h3>Welcome {activeUser.email}</h3>

          <p>
            <span style={{ fontWeight: "bold" }}>Email:  </span>
            {activeUser.email}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>First Name:  </span>
            {activeUser.first_name}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Last Name:  </span>
            {activeUser.last_name}
          </p>
        </div>
      )}

      <div>{/* <h3>My assigned Recoveries</h3> */}</div>

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
      <br />
      {/* <div>
        {activeUser &&
        <button onClick={deleteAccount(activeUser.id)} >Delete Account</button>
}
      </div> */}
    </div>
  );

}

export default Account;

