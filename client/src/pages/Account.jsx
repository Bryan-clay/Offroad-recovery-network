import React, { useState, useEffect } from "react";
import axios from "axios";

import "../App.css";
import UpdateInfo from "../components/updateInfo";
import Recoveries from "./Recoveries";
import {Button, Container, Card} from 'react-bootstrap';



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
          <Button
            className="mainButton"
            onClick={() => setShowPending(!showPending)}
          >
            View
          </Button>
          {showPending ? (
            <Container>
              <div>
                {activeRecoveries
                  .filter((status) => status.approved == false)
                  .map((filteredRecovery) => (
                    <Card>
                      <div>
                        <Card.Header className="pendingHeader">
                          Recovery # {filteredRecovery.id}
                        </Card.Header>
                        <Card.Title>{filteredRecovery.name}</Card.Title>
                        <Card.Subtitle>
                          {filteredRecovery.recovery_date}
                        </Card.Subtitle>

                        <p>Coordinates</p>
                        <h5>{filteredRecovery.location_longitude},</h5>
                        <h5>{filteredRecovery.location_latitude}</h5>

                        <h6>{filteredRecovery.vehicle_condition}</h6>
                        <h6>{filteredRecovery.recovery_type}</h6>
                        <p>Description</p>
                        <h6>{filteredRecovery.description}</h6>

                        <h6>{filteredRecovery.status}</h6>
                        <div>
                          <Button
                            className="mainButton"
                            onClick={() => {
                              approveRecovery(filteredRecovery.id);
                            }}
                          >
                            Approve
                          </Button>
                        </div>
                        <br />
                        <Button
                          className="mainButton"
                          onClick={() => {
                            deleteRecovery(filteredRecovery.id);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card>
                  ))}
              </div>
            </Container>
          ) : null}
        </div>
      )}
      <h1>Account</h1>

      {activeUser && (
        <div>
          <h3>Welcome {activeUser.email}</h3>

          <p>
            <span style={{ fontWeight: "bold" }}>Email: </span>
            {activeUser.email}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>First Name: </span>
            {activeUser.first_name}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Last Name: </span>
            {activeUser.last_name}
          </p>
        </div>
      )}

      <div>{/* <h3>My assigned Recoveries</h3> */}</div>

      <Button className="mainButton" onClick={() => setUpdate(!update)}>
        Update Info
      </Button>
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
          <Button className="mainButton" type="submit">
            Update
          </Button>
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

