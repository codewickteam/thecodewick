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
    </Container>
  );
}

export default Footer;


const Container = styled.div`
  padding: 0;
  margin: 0;
  padding-top: 3.375rem; /* Convert 54px to rem */
  height: 32.5rem; /* Convert 520px to rem */
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
    width: 27.75rem; /* Convert 444px to rem */
    font-size: 1rem; /* Already in rem, so no conversion needed */
    line-height: normal;
    text-align: left;
    padding: 0.625rem 0; /* Convert 10px to rem */
    color: #FFF;
    font-size: 1.25rem; /* Convert 20px to rem */
    font-style: normal;
    line-height: normal;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 13.75rem; /* Convert 220px to rem */
    height: 2.625rem; /* Convert 42px to rem */
    flex-shrink: 0;
  }
`;

const EmailInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem; /* Convert 10px to rem */
  margin-top: 0.625rem; /* Convert 10px to rem */
  position: relative;
  font-family: 'Poppins', sans-serif;

  input {
    width: 25.25rem; /* Convert 404px to rem */
    height: 3.625rem; /* Convert 58px to rem */
    flex-shrink: 0;
    background: white;
    border-radius: 1.875rem; /* Convert 30px to rem */
    border: none;
    outline: none;
    padding-left: 1.875rem; /* Convert 30px to rem */
    font-size: 1.25rem; /* Convert 20px to rem */
    font-family: 'Poppins', sans-serif;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: none;
    }
  }
`;

const Button = styled.button`
  position: absolute;
  left: 21.875rem; /* Convert 350px to rem */
  border-radius: 100%;
  width: 3.125rem; /* Convert 50px to rem */
  height: 3.125rem; /* Convert 50px to rem */
  background-color: black;
  cursor: pointer;

  svg {
    fill: white;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.625rem; /* Convert 10px to rem */
  align-items: flex-start;
  gap: 0.3125rem; /* Convert 5px to rem */
  font-family: 'Poppins', sans-serif;

  p {
    color: #FFF;
    font-family: Poppins;
    font-size: 1.75rem; /* Convert 28px to rem */
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 1.25rem; /* Convert 20px to rem */
  }

  a {
    color: #FFF;
    font-size: 1.25rem; /* Convert 20px to rem */
    font-style: normal;
    line-height: normal;
    text-decoration: none;
    opacity: 0.7;
  }
}`;
