import React from 'react'
import Styled from 'styled-components'
import {Link} from 'react-scroll';

const Arrow =<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M450-160v-526L202-438l-42-42 320-320 320 320-42 42-248-248v526h-60Z"/></svg>

const SmoothScrolling = () => {
  return (
    <Container2>
      <Container>
      <Link to="topArrow" smooth={true} offset={50} duration={500}>{Arrow}</Link>
      <Link to="bannerportfolio" smooth={true} offset={50} duration={500}>Portfolio</Link>
      <Link  to='serviceshome'smooth={true} offset={50} duration={500}>Services</Link >
      <Link  to='masterInTechnologyhome' smooth={true} offset={50} duration={500}>Technology Used</Link >
      <Link  to='ourexpertieshome' smooth={true} offset={50} duration={500}>Our expertices</Link >
      <Link  to='contacthome' smooth={true} offset={50} duration={500}>Contact</Link >

    </Container>
    </Container2>
  )
}

export default SmoothScrolling;

const Container2 =Styled.div`
display:flex;
justify-content:center;
`;

const Container =Styled.div`
Display:flex;
justify-content:space-around;
align-items:center;
background-color:black;
color:white;
height:10vh;
width:45vw;
margin:0 auto;
border-radius:50px;
font-size:1.2vw;
opacity: 0.9;
cursor:pointer;
z-index:9999;
Link  {
  color: white;
  text-decoration: none;
}

position:fixed;
bottom:10px;

svg{
  fill:white;
  width:6vw;
  height:6vh;
}

`;