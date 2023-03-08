import React from 'react'
import {Carousel, Container, Row} from "react-bootstrap";
import pic1 from "../assets/img_carousel/1.png";
import pic2 from "../assets/img_carousel/zr2_tacoma.png";
import pic3 from "../assets/img_carousel/2.png";
import pic4 from "../assets/img_carousel/night_wheel.jpg";
import pic5 from "../assets/img_carousel/jeep_zr2.jpg";
import '../App.css';




function ImgCarousel() {
  return (
    <Container className="carousel_container">
      <Row className="carousel_row">
        <Carousel className="home_carousel">
          <Carousel.Item interval={2000}>
            <img className="slider d-block" src={pic1} alt="First slide" />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="slider d-block" src={pic2} alt="Second slide" />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="slider d-block" src={pic3} alt="Third slide" />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="slider d-block" src={pic4} alt="Forth slide" />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="slider d-block" src={pic5} alt="Fifth slide" />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}

export default ImgCarousel
