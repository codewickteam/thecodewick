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


const Container =styled.div`
img{
    width: 727px;
    height: 727px;
    margin: 0 auto;
    display: block;
    object-fit: cover;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
`;