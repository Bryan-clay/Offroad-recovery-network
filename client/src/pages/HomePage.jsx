import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react'
import "../App.css";
import ImgCarousel from "../components/carousel";


function HomePage({activeUser}) {

  return (
    <div className= 'main_container'>
      
      <div>
        {activeUser && <h5>Logged in as {activeUser.email}</h5>
        }
        </div>
        <div>
          <h3>Welcome to Wahington Trail Offroad Network</h3>
          <p>Washington Trail Recovery Network is a community volunteer group dedicated to keeping roads and trails safe. 
          Our goal is to ensure that offroad enthusiasts of all skill levels are able to get home safely after offraoding or exploring the countryside. 
          Our experienced team is located in all regions of the state and are well-equipped to handle most stranded vehicle situations. </p>
          </div>
          <div>
            <ImgCarousel/>
          </div>
    </div>
  );
}

export default HomePage
