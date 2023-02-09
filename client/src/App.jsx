import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HomePage from "./pages/HomePage";
import RequestRecovery from "./pages/RequestRecovery";
import Account from "./pages/Account";
import Login from "./pages/UserLogin";
import MapBox from "./components/mapBox";
import Recoveries from "./pages/Recoveries";
import Weather from "./components/weather";
import { Button, Card } from "react-bootstrap";
import logo from "./assets/WTRN_logo_dark.png";
<asset></asset>

import "mapbox-gl/dist/mapbox-gl.css";

function App({ lng, lat, zoom, setLat, setLng, getWeather }) {
  axios.defaults.baseURL = "http://localhost:8000/api";

 
  

  const [show, setShow] = useState(false);
  const [activeUser, setActiveUser] = useState(null);
  const [recoveries, setRecoveries] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeRecoveries, setActiveRecoveries] = useState([]);
  const [marker, setMarker] = useState(null);


  const filterActiveRecoveries = async () => {
    let response = await axios.get("recoveries/get_all/");
    console.log(response.data.all_recoveries);
    setActiveRecoveries(response.data.all_recoveries);
  };


  const getCurrentUser = async () => {
    try {
      const response = await axios.get("current_user/");
      setActiveUser(response.data);
      if (response.data['is_staff']){
        setIsAdmin(true)
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {

    getCurrentUser();
    filterActiveRecoveries();
    
      },[]);
 


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
  // axios.defaults.headers.common["X-CSRFToken"] = getCSRFToken();

  // const currentUser = async () => {
  //   let response = await axios.get("current_user/");
  //   let user = response.data && response.data[0] && response.data[0].fields;
  //   if (activeUser !== null){
  //   setActiveUser(user);
  // }};

  console.log(activeUser);
  console.log("IS ADMIN")
  console.log(isAdmin)
  return (
    <Card>
      <Router>
        <div className="App">
          <header>
            <Container fixed="top">
              <h1 className="title">Washington Trail Recovery Network</h1>
              <Navbar
                // expand="lg"
                variant="dark"
                className="navbar"
              >
                <br />
                <Nav className="navigation">
                  <Navbar.Brand href="/">
                    <img
                      src={logo}
                      width="30px"
                      height="30px"
                      className="logo"
                      alt="WTRN"
                    />
                  </Navbar.Brand>
                  <NavLink className="nav-item mx-auto px-3" to="/">
                    Home
                  </NavLink>
                  <NavLink
                    className="nav-item mx-auto px-3"
                    to="/requestRecovery"
                  >
                    Request Recovery
                  </NavLink>
                  <NavLink className="nav-item mx-auto px-3" to="/recoveries">
                    Recovery Database
                  </NavLink>
                  <NavLink className="nav-item mx-auto px-3" to="/user">
                    Log in
                  </NavLink>
                  <NavLink className="nav-item mx-auto px-3" to="/account">
                    Account
                  </NavLink>
                </Nav>
              </Navbar>
            </Container>
          </header>

          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage activeUser={activeUser} />} />
              <Route
                path="requestRecovery"
                element={
                  <RequestRecovery
                    activeUser={activeUser}
                    marker={marker}
                    setMarker={setMarker}
                  />
                }
              />

              <Route
                path="recoveries"
                element={
                  <Recoveries
                    weather={getWeather}
                    recoveries={recoveries}
                    setRecoveries={setRecoveries}
                    isAdmin={isAdmin}
                    activeUser={activeUser}
                    activeRecoveries={activeRecoveries}
                    setActiveRecoveries={setActiveRecoveries}
                  />
                }
              />

              <Route
                path="/account"
                element={
                  <Account
                    activeUser={activeUser}
                    isAdmin={isAdmin}
                    recoveries={recoveries}
                    activeRecoveries={activeRecoveries}
                  />
                }
              />

              <Route
                path="/user"
                element={
                  <Login
                    activeUser={activeUser}
                    setActiveUser={setActiveUser}
                    getCurrentUser={getCurrentUser}
                  />
                }
              />

              <Route
                path="/mapBox"
                element={<MapBox marker={marker} setMarker={setMarker} />}
              />

              <Route
                path="/weather"
                element={
                  <Weather
                    lat={lat}
                    lng={lng}
                    setLat={setLat}
                    setLng={setLng}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </Card>
  );
}

export default App;

