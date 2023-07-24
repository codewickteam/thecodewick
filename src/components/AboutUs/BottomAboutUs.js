import React from "react";
import styled from "styled-components";
import Rect41 from "../../assets/Rectangle 41.png";
import Rect42 from "../../assets/Rectangle 42.png";
import Rect43 from "../../assets/Rectangle 43.png";
import Rect44 from "../../assets/Rectangle 44.png";
import Rect45 from "../../assets/Rectangle 45.png";
import Rect46 from "../../assets/Rectangle 46.png";
import eLeft from "../../assets/Ellipse 37.png";
import BottomAboutUsCard from "./BottomAboutUsCard";

const data = [
  {
    id: "p1",
    imageUrl: Rect41,
    name: "Discovery",
    para: "We take the time to get to know my clients & their businesses. We gather information about their goals, target audience, and competitiors.",
  },
  {
    id: "p2",
    imageUrl: Rect44,
    name: "Planning",
    para: "We take the time to get to know my clients & their businesses. We gather information about their goals, target audience, and competitiors.",
  },
  {
    id: "p3",
    imageUrl: Rect42,
    name: "Design",
    para: "We take the time to get to know my clients & their businesses. We gather information about their goals, target audience, and competitiors.",
  },
  {
    id: "p4",
    imageUrl: Rect45,
    name: "Development",
    para: "We take the time to get to know my clients & their businesses. We gather information about their goals, target audience, and competitiors.",
  },
  {
    id: "p5",
    imageUrl: Rect43,
    name: "Testing",
    para: "We take the time to get to know my clients & their businesses. We gather information about their goals, target audience, and competitiors.",
  },
  {
    id: "p6",
    imageUrl: Rect46,
    name: "Launch",
    para: "We take the time to get to know my clients & their businesses. We gather information about their goals, target audience, and competitiors.",
  },
];

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
  margin: 1.25rem 0 1.25rem 0; /* Convert 20px to rem */
  padding: 1.25rem 0 1.25rem 0; /* Convert 20px to rem */
  display: flex;
  flex-direction: column;
  margin-top: 6.25rem; /* Convert 100px to rem */
  position: relative;

  .eLeft {
    position: absolute;
    bottom: -31.25rem; /* Convert 500px to rem */
    left: -3.75rem; /* Convert 60px to rem */
    z-index: -1;
    pointer-events: none;
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
    font-size: 4rem; /* Convert 64px to rem */
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
    opacity: 0.699999988079071;
    padding-top: 10px;
    @media (max-width: 747px){
      font-size: 20px;
    };
    @media (max-width: 326px){
      font-size: 12px;
    };
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
    background-color:white;
    margin-top:30px;
    @media (max-width: 241px){
    };
    @media (max-width: 118px){
      height: 38px;
    }
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 6.25rem; /* Convert 100px to rem */
  margin-bottom: 15.25rem; /* Convert 100px to rem */
  margin-left: 3.125rem; /* Convert 50px to rem */
  margin-right: 3.125rem; /* Convert 50px to rem */
  gap:70px;
`;
