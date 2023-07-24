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
width: 104px;
height: 204px;
margin: 40px; 
  img {
    width: 104px;
    height: 104px;
    flex-shrink: 0;
    border-radius: 1.25rem; /* Convert 20px to rem */
    margin:0 20px 0 20px ;
    top:-50px;
    position :relative;
    @media (max-width: ){
      height: 104px;
      flex-shrink: 0;      
    };
    @media (max-width: 48px){
      height: 49px;
      flex-shrink: 0;      
    };
    
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
    @media (max-width: 363px){
      color: #000;
      font-family: Poppins;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;      
    };
    @media (max-width: 267px){
      color: #000;
      text-align: center;
      font-family: Poppins;
      font-size: 10px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;           
    };

    }
  }
}`;

const Container2 = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    border: 1px solid gray;
    position :absolute;
    @media (max-width: 411px){
      height: 138px;
      flex-shrink: 0;    
    };
    @media (max-width: 282px){
      height: 109px;
      flex-shrink: 0;      
    };    
`;
