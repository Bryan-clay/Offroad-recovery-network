import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react'
import "../App.css";


function HomePage({activeUser}) {

  return (
    <div>
      
      <div>
        {activeUser && <h3>Welcome {activeUser.email}</h3>}
        </div>
        <div>
          <h3>Welcome to Wahington Trail Offroad Network</h3>
          <p>Washington Trail Recovery Network is a community volunteer group dedicated to keeping roads and trails safe. 
          Our goal is to ensure that offroad enthusiasts of all skill levels are able to get home safely after offraoding or exploring the countryside. 
          Our experienced team is located in all regions of the state and are well-equipped to handle most stranded vehicle situations. </p></div>
    </div>
  );
}

export default HomePage
