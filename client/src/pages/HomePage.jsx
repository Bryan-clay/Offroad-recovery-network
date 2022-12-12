
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react'
// import Carousel from "../components/carousel";
// import img1 from './assets/1.png'
// import img2 from './assets/2.png'
// import img3 from "./assets/3.png";

function HomePage() {
//   const slides = [
//     img1,
//     img2,
//     img3
//   ];
//   const containerStyles = {
//     width: '500px',
//     height: '280px',
//     margin: "0 auto"
//   }
  return (
    <div>
      HOME
      <div>
        {/* <div style={containerStyles}>
          <Carousel slides={slides} />
        </div> */}
        <img src="/images/1.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage
