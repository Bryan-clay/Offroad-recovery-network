import { useState, useEffect } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Archive from './pages/archive';
import HomePage from './pages/HomePage';
import Recovery from './pages/RequestRecovery';
import DisplayMap from './components/display_map';
import Account from './pages/Account';
import Login from './pages/UserLogin';





function App() {
  const [show, setShow] = useState(false);
  const [activeUser, setActiveUser] = useState(null);

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();

        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  const csrftoken = getCookie("csrftoken");
  axios.defaults.headers.common["X-CSRFToken"] = csrftoken;

  const getCSRFToken = () => {
    let csrfToken;

    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      const crumbs = cookie.split("=");
      if (crumbs[0].trim() === "csrftoken") {
        csrfToken = crumbs[1];
      }
    }
    return csrfToken;
  };
  console.log("token? ", getCSRFToken());
  axios.defaults.headers.common["X-CSRFToken"] = getCSRFToken();


    // const currentUser = async () => {
    //   let response = await axios.get("current_user/");
    //   let user = response.data && response.data[0] && response.data[0].fields;
    //   if (activeUser !== null){
    //   setActiveUser(user);
    // }};

    //   useEffect(() => {
    //     currentUser();
    //   }, []);

  return (
    <div className="app">
      <div>
        <header>
          <h1>Washington Trail Recovery Network</h1>

          <Navbar className="navbar navbar-dark bg-dark">
            {/* <Container> */}
            <Navbar.Brand href="">WTRN</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/recovery">Request Recovery</Nav.Link>
              <Nav.Link href="/recoveries">Recovery Database</Nav.Link>
              <Nav.Link href="/archive">Archive</Nav.Link>
              <Nav.Link href="/user">Log in</Nav.Link>
              <Nav.Link href="/account">Account</Nav.Link>
              {/* <Nav.Link href="/login">Log out</Nav.Link> */}
            </Nav>
            {/* </Container> */}
          </Navbar>
        </header>
        <div>
          <Router>
            <Routes>
              <Route
                path=""
                element={
                  <h1>
                    <HomePage activeUser={activeUser} />
                  </h1>
                }
              />
              <Route
                path="archive/"
                element={
                  <h1>
                    <Archive />
                  </h1>
                }
              />
              <Route
                path="recovery/"
                element={
                  <h1>
                    <Recovery />
                  </h1>
                }
              />
              <Route
                path="account/"
                element={
                  <h1>
                    <Account
                      activeUser={activeUser}
                      setActiveUser={setActiveUser}
                    />
                  </h1>
                }
              />
              <Route
                path="user/"
                element={
                  <h1>
                    <Login
                      activeUser={activeUser}
                      setActiveUser={setActiveUser}
                    />
                  </h1>
                }
              />
              <Route
                path="displayMap"
                element={
                  <div>
                    <DisplayMap />
                  </div>
                }
              />
            </Routes>
          </Router>
        </div>
      </div>
      <div style={{ border: "3px solid black" }}>
        <button onClick={() => setShow(!show)}> Show/Hide Map</button>
        {show && <DisplayMap />}
      </div>
    </div>
  );
}

export default App
