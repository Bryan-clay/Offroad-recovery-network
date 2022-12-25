import { useState, useEffect } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HomePage from './pages/HomePage';
import RequestRecovery from './pages/RequestRecovery';
import Account from './pages/Account';
import Login from './pages/UserLogin';
import MapBox from './components/mapBox';
import Recoveries from './pages/Recoveries';
import Weather from './components/weather';


import "mapbox-gl/dist/mapbox-gl.css";





function App({lng, lat, zoom, setLat, setLng, getWeather}) {

  

  axios.defaults.baseURL='http://localhost:8000'



  const [show, setShow] = useState(false);
  const [activeUser, setActiveUser] = useState(null);
  const [recoveries, setRecoveries] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false)

  const getRecoveryInfo = async () => {
    let response = await axios.get('recoveries/get_all')
    .then((response)=> {
      // console.log(response.data["all_recoveries"])
      //const recoveryInfo = response.data
    })
  }

  const getCurrentUser = async () => {

    try{
      const response = await axios.get('current_user/');
      return response.data
    }
    catch (error) {
      console.error(error)
    }
  }
    //   let response = await axios.get("current_user/");
    //   // console.log(response.data)
    //   let user =response.data[0];
    //   // console.log('INFO')
      
    //   // let user = response.data && response.data[0] && response.data[0].fields;
    //   // console.log(user);
    //   setActiveUser(user);
    // };
  useEffect(() => {
    const getUserData = async () => {
      const user = await getCurrentUser();
      if (user.is_staff){
        setIsAdmin(true)
      }
      setActiveUser(user)
    }
    getUserData()
    getRecoveryInfo();
  }, []);

  // console.log(activeUser)
  console.log(isAdmin)
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
console.log(activeUser);
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
              <Nav.Link href="/request_recovery">Request Recovery</Nav.Link>
              <Nav.Link href="/recoveries">Recovery Database</Nav.Link>
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
                path="request_recovery/"
                element={
                  <h1>
                    <RequestRecovery />
                  </h1>
                }
              />
              <Route
                path="recoveries/"
                element={
                  <h1>
                    <Recoveries weather={getWeather}
                    recoveries={recoveries}
                    setRecoveries={setRecoveries}
                    isAdmin = {isAdmin}
                    activeUser = {activeUser} />
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
                      getCurrentUser={getCurrentUser}
                    />
                  </h1>
                }
              />
              <Route
                path="mapBox"
                element={
                  <div>
                    <MapBox />
                  </div>
                }
              />
              <Route
                path="weather"
                element={
                  <div>
                    <Weather  lat={lat} lng={lng} setLat={setLat} setLng = {setLng} />
                  </div>
                }
              />
            </Routes>
          </Router>
        </div>
      </div>
      <div>
        <button onClick={() => setShow(!show)}> Show/Hide Map</button>

        {show && (
          <div>
            <MapBox />
          </div>
        )}
      </div>

      <div></div>
    </div>
  );
}

export default App
