// Assuming the root font size is 16px (you can adjust this according to your project settings)

import React from "react";
import styled from 'styled-components';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../assets/images/img_1.png";
import img2 from "../../assets/images/img_2.png";
import img3 from "../../assets/images/img_3.png";

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
    width: 45.4375rem; /* Convert 727px to rem */
    height: 45.4375rem; /* Convert 727px to rem */
    margin: 0 auto;
    display: block;
    object-fit: cover;
    box-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.5); /* Convert 2px to rem */
  }
`;
