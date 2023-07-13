import React from 'react';
import styled from 'styled-components';
import logo from '../assets/Logo.png';
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
        <Link to="/">About Us</Link>
        <Link to="/">Services</Link>
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
      <Seperator/>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  padding: 0;
  margin: 0;
  padding-top: 54px;
  height: 538px;
  font-family: 'Poppins', sans-serif;
  background-color: black;
  color: white;
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  position: relative;
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
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 220px;
    height: 42px;
    flex-shrink: 0;
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
`;

const Button = styled.button`
  position: absolute;
  left: 380px;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  background-color: black;
  cursor: pointer;

  svg {
    fill: white;
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
`;

const Seperator = styled.div`
  position: absolute;
  top: 480px;
  width: 100%;
  height: 1px;
  background-color: #FFF;
    opacity: 0.3;
`;
