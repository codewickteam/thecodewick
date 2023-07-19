import React from "react";
import styled from "styled-components";

const BottomAboutUsCard = ({ imageUrl, name, para }) => {
  return (
    <Container>
      <img src={imageUrl} alt="Team Member" />
      <span>
        <h2>{name}</h2>
        <p>{para}</p>
      </span>
    </Container>
  );
};

export default BottomAboutUsCard;

const Container = styled.div`
    display: flex;
    flex-direction: row;
  img {
    width: 126px;
    height: 126px;
    flex-shrink: 0;
    border-radius: 1.25rem; /* Convert 20px to rem */
    margin:0 20px 0 20px ;
  }
  span {
    h2 {
      color: #000;
      font-family: Poppins;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    p{
      color: #000;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.6000000238418579;
    max-width: 481px;
    }
  }
}`;
