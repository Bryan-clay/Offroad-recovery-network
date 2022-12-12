import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Archive from './pages/archive';
import HomePage from './pages/HomePage';
import Login from './pages/login';
import Signup from './pages/signup';
import Recovery from './pages/recovery';
import DisplayMap from './components/display_map';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from "ol/layer/Tile";
// import XYZ from "ol/source/XYZ";
// import Layer from 'ol/Layer';



function App() {
  const [show, setShow] = useState(false);

    function getCookie(name) {
      let cookieValue = null;
      if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
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
              <Nav.Link href="/archive">Archive</Nav.Link>
              <Nav.Link href="/login">Log In</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
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
                    <HomePage />
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
                path="login/"
                element={
                  <h1>
                    <Login />
                  </h1>
                }
              />
              <Route
                path="signup/"
                element={
                  <h1>
                    <Signup />
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
