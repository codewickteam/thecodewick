import React from "react";
import styled from "styled-components";
import TeamMembersCard from "./TeamMembersCard";
import Rect17 from '../../assets/Rect17.png';
import Rect18 from '../../assets/Rect18.png';
import Rect19 from '../../assets/Rect19.png';
import eRight from '../../assets/Ellipse 36.png';
import eLeft from '../../assets/Ellipse 37.png';

const data = [
  {
    id: "p1",
    imageUrl: Rect17,
    name: "Kartik Sharma",
    position: "CEO",
  },
  {
    id: "p1",
    imageUrl: Rect18,
    name: "Shreya Palit",
    position: "CEO",
  },
  {
    id: "p1",
    imageUrl: Rect19,
    name: "Shivinder Bahl",
    position: "CEO",
  },
];

const TeamMembers = () => {
  return (
    <Container>
      <Header>
        <div>
          Meet our <span>team</span>
        </div>
        <p>
          Our team of tech strategists, enterprise architects & transformation
          experts help harness technology & innovation as a way to reinvent
          every business.
        </p>
      </Header>
      <CardsContainer>
        {data.map((item) => (
          <TeamMembersCard
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            position={item.position}
          />
        ))}
      </CardsContainer>
      <img className="eRight" src={eRight} alt="" />
      <img className="eLeft" src={eLeft} alt="" />
    </Container>
  );
};

export default TeamMembers;

const Container = styled.div`
  margin: 1.25rem 0 1.25rem 0; /* Convert 20px to rem */
  padding: 1.25rem 0 1.25rem 0; /* Convert 20px to rem */
  display: flex;
  flex-direction: column;
  margin-top: 6.25rem; /* Convert 100px to rem */
  position: relative;

  .eRight {
    position: absolute;
    right: -6.25rem; /* Convert 100px to rem */
    z-index: -1;
    pointer-events: none;
  }

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
    span {
      background: linear-gradient(90deg, #de0000 0%, #6a0000 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: Poppins;
      font-size: 4rem; /* Convert 64px to rem */
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  p {
    color: #000;
    max-width: 76.0625rem; /* Convert 1213px to rem */
    padding-top: 0.625rem; /* Convert 10px to rem */
    text-align: center;
    font-family: Poppins;
    font-size: 1.75rem; /* Convert 28px to rem */
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.7;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.25rem; /* Convert 20px to rem */
  padding: 0.625rem; /* Convert 10px to rem */
`;
