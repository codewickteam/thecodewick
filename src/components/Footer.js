import React from 'react';
import styled from 'styled-components';
import logo from '../assets/image 3.png';
import { Link } from 'react-router-dom';

const arrow = (
  <svg xmlns="http://www.w3.org/2000/svg" height="39" viewBox="0 -960 960 960" width="39">
    <path d="m375-240-43-43 198-198-198-198 43-43 241 241-241 241Z" />
  </svg>
);

function Footer() {
  return (
    <Container>
      <LogoContainer>
        <LogoWrapper>
          <img src={logo} alt="logo" />
        </LogoWrapper>
        <p>
          We help organizations harness technology & innovation to shape their visions, execute their digital
          transformation journeys, & reinvent their business to create exceptional, sustainable value.
        </p>
        <EmailInput>
          <input type="text" name="input" placeholder="Subscribe to our newsletter" />
          <Button>{arrow}</Button>
        </EmailInput>
      </LogoContainer>
      <Section>
        <p>Company</p>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/">Pricing</Link>
        <Link to="/">Integrations</Link>
      </Section>
      <Section>
        <p>Help Center</p>
        <Link to="/">FAQ</Link>
        <Link to="/">Careers</Link>
        <Link to="/">Newsletter</Link>
      </Section>
      <Section>
        <p>Features</p>
        <Link to="/">Web Development</Link>
        <Link to="/">App Development</Link>
        <Link to="/">Devops Development</Link>
        <Link to="/">E-Commerce Solutions</Link>
        <Link to="/">Digital Transfomation</Link>
        <Link to="/">Cloud Computing</Link>
      </Section>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  padding: 0;
  margin: 0;
  padding-top: 54px; 
  height: 519px; 
  font-family: 'Poppins', sans-serif;
  background-color: black;
  color: white;
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  position: relative;

  @media (max-width: 1025px){
    padding-top: 54px; 
    height: 365px; 
  }
  @media (max-width: 770px){
    padding-top: 54px; 
    height: 290px; 
  }
  @media (max-width: 430px){
    padding-top: 24px; 
    height: 200px; 
  }
  @media (max-width: 390px){
    padding-top: 10px; 
    height: 139px; 
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    width: 444px; 
    font-size: 16px;
    line-height: normal;
    text-align: left;
    padding: 10px 0; 
    color: #FFF;
    font-size: 20px; 
    font-style: normal;
    line-height: normal;
  }
  @media (max-width: 1025px){
    p {
    width: 350px; 
    font-size: 15px; 
  }
  }
  @media (max-width: 770px){
    p {
    width: 300px; 
    font-size: 13px; 
  }
  }
  @media (max-width: 430px){
    p {
    width: 150px; 
    font-size: 8px; 
  }
  }
  @media (max-width: 390px){
    p {
    width: 130px; 
    font-size: 6px; 
  }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 220px; 
    height: 42px; 
    flex-shrink: 0;
  }

  @media (max-width: 1025px){
    img {
    width: 198px; 
    height: 32px; 
  } 
  }
  @media (max-width: 770px){
    img {
    width: 168px; 
    height: 28px; 
  } 
  }
  @media (max-width: 430px){
    img {
    width: 100px; 
    height: 18px; 
  } 
  }
  @media (max-width: 390px){
    img {
    width: 90px; 
    height: 15px; 
  } 
  }
`;

const EmailInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; 
  margin-top: 10px; 
  position: relative;
  font-family: 'Poppins', sans-serif;

  input {
    width: 404px; 
    height: 58px; 
    flex-shrink: 0;
    background: white;
    border-radius: 30px; 
    border: none;
    outline: none;
    padding-left: 30px; 
    font-size: 20px; 
    font-family: 'Poppins', sans-serif;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: none;
    }
  }

  @media (max-width: 1025px){
  gap: 8px; 
  margin-top: 1px; 

  input {
    width: 360px; 
    height: 38px; 
    padding-left: 20px; 
    font-size: 15px; 

  }
}
  @media (max-width: 770px){
  gap: 8px; 
  margin-top: 0.8; 

  input {
    width: 300px; 
    height: 38px; 
    padding-left: 20px; 
    font-size: 13px; 
  }

  }
  @media (max-width: 430px){
  gap: 8px; 
  margin-top: 0.1px; 

  input {
    width: 150px; 
    height: 28px; 
    padding-left: 10px; 
    font-size: 8px; 
  }

  }
  @media (max-width: 390px){
  gap: 5px; 
  margin-top: 0.1px; 

  input {
    width: 130px; 
    height: 18px; 
    padding-left: 10px; 
    font-size: 6px; 
  }

  }
`;

const Button = styled.button`
  position: absolute;
  left: 350px; 
  border-radius: 100%;
  width: 50px; 
  height: 50px; 
  background-color: black;
  cursor: pointer;

  svg {
    fill: white;
  }

  @media (max-width: 1025px){
  left: 320px; 
  width: 35px; 
  height: 35px; 
  
  svg {
   padding-right: 10px;
   padding-bottom: 10px;
  }
}
  @media (max-width: 770px){
  left: 260px; 
  width: 32px; 
  height: 32px; 
  
  svg {
   padding-right: 12px;
   padding-bottom: 10px;
  }
}
  @media (max-width: 430px){
  left: 122px; 
  width: 25px; 
  height: 25px; 
  
  svg {
   padding-right: 20px;
   padding-bottom: 20px;
  }
}
@media (max-width: 390px){
  left: 112px; 
  width: 16px; 
  height: 16px; 
  
  svg {
   padding-right: 30px;
   padding-bottom: 30px;
  }
}
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px; 
  align-items: flex-start;
  gap: 5px;
  font-family: 'Poppins', sans-serif;

  p {
    color: #FFF;
    font-family: Poppins;
    font-size: 28px; 
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 20px;
  }

  a {
    color: #FFF;
    font-size: 20px; 
    font-style: normal;
    line-height: normal;
    text-decoration: none;
    opacity: 0.7;
  }

  @media (max-width: 1025px){
  margin-top: 8px; 
  gap: 5px;

  p {
    font-size: 20px; 
    margin-bottom: 1px;
  }

  a {
    font-size: 15px; 
  }
  }

  @media (max-width: 770px){
  margin-top: 8px; 
  gap: 5px;

  p {
    font-size: 17px; 
    margin-bottom: 1px;
  }

  a {
    font-size: 13px; 
  }
  }
  @media (max-width: 430px){
  margin-top: 6px; 
  gap: 2px;

  p {
    font-size: 10px; 
    margin-bottom: 1px;
  }

  a {
    font-size: 8px; 
  }
  }
  @media (max-width: 390px){
  margin-top: 5px; 
  gap: 1px;

  p {
    font-size: 8px; 
    margin-bottom: 1px;
  }

  a {
    font-size: 6px; 
  }
  }

`;
