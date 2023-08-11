// Assuming the root font size is 16px (you can adjust this according to your project settings)

import React from "react";
import styled from 'styled-components';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../assets/images/sizar-fashion.png";
import img2 from "../../assets/images/sizar.png";
import img3 from "../../assets/images/skybags.png";

const Banner = () => {
  const start = [img1, img2, img3];

  return (
    <Container>
      <Carousel fade>
        {start.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="slider" src={item} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  img {
    width: 727px;
    height: 727px;
    margin: 0 auto;
    display: block;
    object-fit: cover;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 1025px){
    img {
    width: 500px;
    height: 500px;
  }
  }
  @media (max-width: 770px){
    img {
    width: 450px;
    height: 450px;
  }
  }

  @media (max-width: 430px){
    img {
    width: 350px;
    height: 350px;
  }
  }
  @media (max-width: 390px){
    img {
    width: 250px;
    height: 250px;
  }
  }
`;

