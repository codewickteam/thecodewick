import React from "react";
import styled from "styled-components";
import Rectangle30 from "../../assets/Rectangle30.png";

const TopAboutUs = () => {
  return (
    <Container>
      <h1>About Us From Us</h1>
      <p>
        As a Web Development Service are committed to building custom website
        solutions that drive business towards success.
      </p>
      <Left>
        <img src={Rectangle30} alt="Rectangle30" />
        <span>
          <Paragraph>
            Outsource software development with Codewick leveraging an array of
            IT technologies for all company sizes. The right technology stack
            can significantly reduce the total cost of ownership & scale up your
            business.
          </Paragraph>
          <Paragraph>
            Our team of tech strategists, enterprise architects & transformation
            experts help harness technology & innovation as a way to reinvent
            every business.
          </Paragraph>
          <button>Get in touch</button>
        </span>
      </Left>
    </Container>
  );
};

export default TopAboutUs;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12.5rem; /* 200px / 16 = 12.5rem */
  h1 {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 4rem; /* 64px / 16 = 4rem */
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    max-width: 61.3125rem; /* 981px / 16 = 61.3125rem */
    color: #000;
    margin-top: 1.25rem; /* 20px / 16 = 1.25rem */
    text-align: center;
    font-family: Poppins;
    font-size: 1.375rem; /* 22px / 16 = 1.375rem */
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.7; /* No need to convert opacity */
  }
  @media (max-width: 1025px){
  margin-top: 12.5rem;
  h1 {
    font-size: 2.5rem;
  }
  p {
    width: 48.3125rem; 
    margin-top: 1.25rem; 
    font-size: 1.25rem;
  }
  }
  @media (max-width: 770px){
    margin-top: 10.5rem;
  h1 {
    font-size: 2.5rem;
  }
  p {
    width: 40.3125rem; 
    margin-top: 1.25rem; 
    font-size: 1.1rem;
  }
  }
  @media (max-width: 430px){
    margin-top: 6.5rem;
  h1 {
    font-size: 1.5rem;
  }
  p {
    max-width: 20.625rem; 
    margin-top: 1.25rem; 
    font-size: 0.75rem;
  }
  }
  @media (max-width: 390px){ 
    margin-top: 5.5rem;
  h1 {
    font-size: 1.5rem;
  }
  p {
    max-width: 18.625rem; 
    margin-top: 1.25rem; 
    font-size: 0.75rem;
  }
  }
`;

const Left = styled.div`
  display: flex;
  margin-top: 6.25rem; /* 100px / 16 = 6.25rem */
  img {
    /* width: 37.5rem; */ /* Commented out as it's not using rem units */
    height: 25rem; /* 400px / 16 = 25rem */
    flex-shrink: 0;
    border-radius: 1.25rem; /* 20px / 16 = 1.25rem */
    padding: 0 1.875rem 0 4.3125rem; /* 0 20px / 16 = 0 1.875rem, 69px / 16 = 4.3125rem */
  }
  span {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 5rem 0 3.125rem; /* 0 80px / 16 = 0 5rem, 50px / 16 = 3.125rem */
  }
  button {
    width: 15.0625rem; /* 241px / 16 = 15.0625rem */
    height: 4.875rem; /* 78px / 16 = 4.875rem */
    flex-shrink: 0;
    border-radius: 0.625rem; /* 10px / 16 = 0.625rem */
    border: 0.125rem solid #000; /* 2px / 16 = 0.125rem */
    color: #000;
    font-family: Poppins;
    font-size: 1.375rem; /* 22px / 16 = 1.375rem */
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background-color:white;
  }
  @media (max-width: 1025px){
  margin-top: 6.25rem; 
  img {
    max-width: 25.25rem; 
    max-height: 18.25rem; 
    padding: 0 1rem ; 
  }
  span {
    margin: 0 3rem 0 3.125rem; 
  }
  button {
    width: 10.0625rem; 
    height: 3.25rem; 
    font-size: 1.25rem;
  }
  }
  @media (max-width: 770px){
    margin-top: 4.25rem; 
  img {
    max-width: 18.25rem; 
    max-height: 13.25rem; 
    padding: 0 0.9rem 0 2rem; 
  }
  span {
    margin: 0 3rem 0 2.125rem; 
  }
  button {
    width: 9.0625rem; 
    height: 3.2rem; 
    font-size: 1.2rem;
  }
  }
  @media (max-width: 430px){
    margin-top: 4.25rem; 
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;;
  img {
    max-width: 20.25rem; 
    max-height: 15.25rem; 
  }
  span {
   align-items: center;
   width: 10.0625rem;
  }
  button {
    width: 10.0625rem; 
    height: 3.25rem; 
    font-size: 1.25rem;
    margin: 1.5rem;
  }
  }
  @media (max-width: 390px){
   margin-top: 4.25rem; 
    flex-wrap: wrap;
    justify-content: center;
  img {
    max-width: 20.25rem; 
    max-height: 15.25rem; 
  }
  span {
   align-items: center;
  }
  button {
    width: 10.0625rem; 
    height: 3.25rem; 
    font-size: 1.25rem;
    margin: 1.5rem;
  }
  }
`;

const Paragraph = styled.div`
  display:flex;
  flex-wrap: wrap;
  color: #000;
  font-family: Poppins;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  opacity: 0.7; 
  max-width: 62.5rem;
  min-width: 25rem;
  @media (max-width: 1025px){
  font-size: 1rem;
  max-width: 24rem;
  }
  @media (max-width: 770px){
  font-size: 0.9rem;
  max-width: 20rem;
 
  }
  @media (max-width: 430px){
  font-size: 0.75rem;
  text-align:center;
  width: 10rem;
  height: 6rem;
  padding: 0 1rem 0 1rem;
 
  }
  @media (max-width: 390px){ 
  font-size: 0.75rem;
  text-align:center;
  width: 10rem;
  height: 6rem;
  padding: 0 2rem 0 2rem;
 
  }
`;
