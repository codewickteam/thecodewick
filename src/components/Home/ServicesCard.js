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
    width: 130px;
    height: 130px;
    flex-shrink: 0;
    border-radius: 130px;
  }
  h2 {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 15px;
  }
  span {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
