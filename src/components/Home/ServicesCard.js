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
  width: 29.0625rem; /* Convert 465px to rem */
  height: 21rem; /* Convert 336px to rem */
  flex-shrink: 0;
  border-radius: 1.25rem; /* Convert 20px to rem */
  border: 0.125rem solid #afadad; /* Convert 2px to rem */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 8.125rem; /* Convert 130px to rem */
    height: 8.125rem; /* Convert 130px to rem */
    flex-shrink: 0;
    border-radius: 8.125rem; /* Convert 130px to rem */
  }
  h2 {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 2.25rem; /* Convert 36px to rem */
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 0.9375rem; /* Convert 15px to rem */
  }
  span {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 1.5rem; /* Convert 24px to rem */
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
