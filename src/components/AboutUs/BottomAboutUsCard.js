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
    border-radius: 1.25rem; 
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
  @media (max-width: 1025px){
    img {
    width: 120px;
    height: 120px;
    margin:0 20px 0 20px ;
  }
  span {
    h2 {
      font-size: 26px;
    }
    p{
    font-size: 16px;
    max-width: 481px;
    }
  }
}
  @media (max-width: 430px){
    img {
    width: 70px;
    height: 70px;
    margin:0 20px 0 10px ;
  }
  span {
    h2 {
      font-size: 16px;
    }
    p{
    font-size: 9px;
    max-width: 300px;
    }
  }
  }
  @media (max-width: 390px){
    img {
    width: 60px;
    height: 60px;
    margin:0 10px 0 10px ;
  }
  span {
    h2 {
      font-size: 16px;
    }
    p{
    font-size: 9px;
    max-width: 200px;
    }
  }
  }
`;
