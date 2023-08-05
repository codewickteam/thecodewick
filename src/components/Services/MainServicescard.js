import React from "react";
import styled from "styled-components";

const MiddleAboutCard = ({ imageUrl, name, para }) => {
  return (
    <Container>
      <Container2>
      <img src={imageUrl} alt="Team Member" />
      <span>
        <h2>{name}</h2>
        <p>{para}</p>
      </span>
      </Container2>   
    </Container>
  );
};

export default MiddleAboutCard;

const Container = styled.div` 
  img {
    width: 6.5rem;
    height: 6.5rem;
    flex-shrink: 0;
    border-radius: 1.25rem; 
    margin:0 20px 0 40px ;
    top:-50px;
    background-color: white;
    position: relative;
  }
  span {
    top:-50px;
    position: relative;
    padding-left: 20px;;
    h2 {
      color: #000;
      font-family: Poppins;
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    p{
      color: #000;
    font-family: Poppins;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.6000000238418579;
    }
  }
  @media (max-width: 430px){
    img {
    width: 3rem;
    height: 3rem;
    margin:0 1.5rem 0 2rem ;
    top:-2.1rem;
  }
  span {
    top:-2.2rem;
    padding-left: 20px;;
    h2 {
      font-size: 0.875rem;
    }
    p{
    font-size: 0.625rem;
    width: 17.625rem;
    }}
  }
`;

const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 700px;
    max-height: 281px;
    border-radius: 10px;
    border: 1px solid gray;
    padding-right:5rem;
    
  @media (max-width: 430px){
    max-width: 19.625rem;
    max-height: 8.8125rem;
    padding-right:5rem;
  }
`;
