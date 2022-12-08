import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Archive from './pages/archive';
import HomePage from './pages/HomePage';
import Login from './pages/login';
import Signup from './pages/signup';
import Recovery from './pages/recovery';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <header>
          <h1>Washington Trail Recovery Network</h1>

          <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand href="">WTRN</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/recovery">Request Recovery</Nav.Link>
                <Nav.Link href="/archive">Archive</Nav.Link>
                <Nav.Link href="/logIn">Log In</Nav.Link>
                <Nav.Link href="/signUp">Sign Up</Nav.Link>
              </Nav>
            </Container>
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
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App
