import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react'


function HomePage({ activeUser}) {
console.log(activeUser)
  return (
    <div>
      HOME
      <div>{activeUser && <h2>Welcome {activeUser.email}</h2>}</div>
    </div>
  );
}

export default HomePage
