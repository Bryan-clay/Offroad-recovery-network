import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react'


function HomePage({activeUser}) {

  return (
    <div>
      HOME
      <div>
        {activeUser && <h3>Welcome {activeUser.email}</h3>}
        </div>
    </div>
  );
}

export default HomePage
