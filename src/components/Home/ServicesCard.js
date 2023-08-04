import React from "react";
import styled from "styled-components";

const ServicesCard = ({ imageUrl, name }) => {
  return (
    <Container>
      <img src={imageUrl} alt="Team Member" />
      <h2>{name}</h2>
    </Container>
  );
};

export default ServicesCard;

const Container = styled.div`
  width: 465px;
  height: 336px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 2px solid #afadad;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 10vw;
    height: 10vw;
    flex-shrink: 0;
    border-radius: 130px;
  }

  h2 {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 2vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 15px;
  }


  @media (max-width: 1025px){
  width: 350px;
  height: 300px;
  
  img {
    width: 100px;
    height: 100px;
  }

  h2 {
    font-size: 26px;
    margin-top: 15px;
  }

  }
  @media (max-width: 770px){
  width: 290px;
  height: 220px;
  
  img {
    width: 80px;
    height: 80px;
  }

  h2 {
    font-size: 21px;
    margin-top: 15px;
  }

  }
  @media (max-width: 430px){
    width: 250px;
    height: 180px;
  
  img {
    width: 60px;
    height: 60px;
  }

  h2 {
    font-size: 19px;
    margin-top: 15px;
  }
  }
  @media (max-width: 390px){
    width: 200px;
    height: 150px;
  
  img {
    width: 50px;
    height: 50px;
  }

  h2 {
    font-size: 15px;
    margin-top: 15px;
  }
  }
`;
