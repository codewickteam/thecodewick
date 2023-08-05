import React from "react";
import styled from "styled-components";
import Rect41 from "../../assets/ourprocess1.png";
import Rect42 from "../../assets/ourprocess2.png";
import Rect43 from "../../assets/ourprocess3.png";
import Rect44 from "../../assets/ourprocess4.png";

import eLeft from "../../assets/Ellipse 37.png";
import BottomAboutUsCard from "./BottomAboutUsCard";

// const data = [
//   {
//     id: "p1",
//     imageUrl: Rect41,
//     name: "Discovery",
//     para: "We take the time to get to know my clients & their businesses. We gather information about their goals, target audience, and competitiors.",
//   },
//   {
//     id: "p2",
//     imageUrl: Rect44,
//     name: "Planning",
//     para: "We take the time to get to know my clients & their businesses. We gather information about their goals, target audience, and competitiors.",
//   },
//   {
//     id: "p3",
//     imageUrl: Rect42,
//     name: "Design",
//     para: "We take the time to get to know my clients & their businesses. We gather information about their goals, target audience, and competitiors.",
//   },
//   {
//     id: "p4",
//     imageUrl: Rect45,
//     name: "Development",
//     para: "We take the time to get to know my clients & their businesses. We gather information about their goals, target audience, and competitiors.",
//   },
//   {
//     id: "p5",
//     imageUrl: Rect43,
//     name: "Testing",
//     para: "We take the time to get to know my clients & their businesses. We gather information about their goals, target audience, and competitiors.",
//   },
//   {
//     id: "p6",
//     imageUrl: Rect46,
//     name: "Launch",
//     para: "We take the time to get to know my clients & their businesses. We gather information about their goals, target audience, and competitiors.",
//   },
// ];

const data = [
    {
      id: "p1",
      imageUrl: Rect41,
      name: "1. Contact Us",
      para: "Fill the contact form protected by NDA, book a calendar and schedule a Zoom Meeting with our experts",
    },
    {
      id: "p2",
      imageUrl: Rect42,
      name: "2. Get Consultation",
      para: "Get on a call with our team to know the feasibility of your project idea.",
    },
    {
      id: "p1",
      imageUrl: Rect44,
      name: "3.  Get Estimate",
      para: "Based on the project requirements, We share a project proposal budget and timeline estimates",
    },
    {
      id: "p1",
      imageUrl: Rect43,
      name: "4. Project Kickoff",
      para: "Once the project is signed, we bring together a team from a range of disciplines to kick start your project",
    },
  ]


const BottomAboutUs = () => {
  return (
    <Container>
      <Header>
        <div>Our Process</div>
        <p>
          We follow a comprehensive and structured working process to ensure
          that every project is delivered on time, within budget, and meets the
          specific needs of the clients.
        </p>
        <button>Our Recent Work</button>
      </Header>
      <CardsContainer>
        {data.map((item) => (
          <BottomAboutUsCard
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            para={item.para}
          />
        ))}
      </CardsContainer>
      <img className="eLeft" src={eLeft} alt="" />
    </Container>
  );
};

export default BottomAboutUs;

const Container = styled.div`
  margin: 20px 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  position: relative;

  .eLeft {
    position: absolute;
    bottom: -500px;
    left: -60px;
    z-index: -1;
    pointer-events: none;
  }
  @media (max-width: 1025px){
  margin: 20px 0;
  padding: 20px 0;
  margin-top: 100px;
  .eLeft {
    bottom: -250px;
    left: -60px;
    width:220px;
  }
  }
  @media (max-width: 430px){
  margin: 20px 0;
  padding: 20px 0;
  margin-top: 80px;
  .eLeft {
    bottom: -150px;
    left: -60px;
    width:150px;
  }
  }
  @media (max-width: 390px){
    margin: 20px 0;
  padding: 20px 0;
  margin-top: 80px;
  .eLeft {
    bottom: -150px;
    left: -60px;
    width:120px;
  }
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p {
    color: #000;
    max-width: 981px;
    text-align: center;
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.7;
    padding-top: 10px;
  }
  button {
    color: #000;
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 241px;
    height: 78px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 2px solid #000;
    background-color: white;
    margin-top: 30px;
  }
  @media (max-width: 1025px){
    div {
    font-size: 40px;
  }

  p {
    max-width: 747px;
    font-size: 20px;
    padding-top: 10px;
  }
  button {
    font-size: 22px;
    width: 241px;
    height: 78px;
    margin-top: 30px;
  }
  }
  @media (max-width: 770px){
    div {
    font-size: 38px;
  }

  p {
    max-width: 690px;
    font-size: 20px;
    padding-top: 10px;
  }
  button {
    font-size: 20px;
    width: 221px;
    height: 70px;
    margin-top: 30px;
  }
  }
  @media (max-width: 430px){
    div {
    font-size: 24px;
  }

  p {
    max-width: 326px;
    font-size: 12px;
    padding-top: 10px;
  }
  button {
    font-size: 8px;
    width: 118px;
    height: 38px;
    margin-top: 30px;
  }
  }
  @media (max-width: 390px){
    div {
    font-size: 24px;
  }

  p {
    max-width: 326px;
    font-size: 12px;
    padding-top: 10px;
  }
  button {
    font-size: 8px;
    width: 118px;
    height: 38px;
    margin-top: 30px;
  }
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 100px;
  margin-bottom: 244px;
  margin-left: 50px;
  margin-right: 50px;
  gap: 70px;
  @media (max-width: 1025px){
  margin-top: 100px;
  margin-bottom: 140px;
  margin-left: 25px;
  margin-right: 50px;
  gap: 70px;
  }
  @media (max-width: 430px){
  margin-top: 60px;
  margin-bottom: 60px;
  margin-left: 25px;
  gap: 20px;
  }
  @media (max-width: 390px){
  margin-top: 60px;
  margin-bottom: 60px;
  margin-left: 25px;
  gap: 20px;
  }
`;
