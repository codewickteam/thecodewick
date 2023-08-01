import React from "react";
import styled from "styled-components";
import HeaderContactUs from "./HeaderContactUs";
import FormContactus from "./FormContactus.js";
import imag40 from "../../assets/image 40.png";

const Contact = () => {
  return (
    <Container>
      <HeaderContactUs />
      <div className="coutactusForm">
        <FormContactus />
        <span>
          <img src={imag40} alt="img"/>
          <div className="cirlceContactusmain" >
          <div className="cirlceContactus"></div>
          <div className="cirlceContactus"></div>
          <div className="cirlceContactus"></div>
          </div>
        </span>
      </div>
    </Container>
  );
};

export default Contact;
const Container = styled.div`
  .coutactusForm {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap-reverse;
    margin: 2rem 0 7rem 0;
    span{
        display:flex;
        flex-direction: column;
    }
    img {
      width: 25.125rem;
      height: 25.125rem;
      flex-shrink: 0;
    }
  }
  .cirlceContactusmain{
    display:flex;
    flex-direction:row;
    justify-content:center;
    gap:2rem;
    margin-top: 2rem;;
  }
  .cirlceContactus{
    width: 3.5rem;
    height: 3.5rem;
    flex-shrink: 0;
    background-color:#D9D9D9 ;
    border-radius: 50%;
    
    

  }

  @media (max-width: 770px){
    .coutactusForm {
    margin: 2rem 0 7rem 0;
    img {
      width: 20.125rem;
      height: 20.125rem;
    }
  }
  .cirlceContactusmain{
    gap:2rem;
    margin-top: 1rem;;
  }
  .cirlceContactus{
    width: 3rem;
    height: 3rem;
      
    

  }
  }
`;
