import React from "react";
import styled from "styled-components";
import ServicesCard from "./ServicesCard";
import Ellipse13 from '../../assets/Ellipse 13.png'
import Ellipse14 from '../../assets/Ellipse 14.png'
import Ellipse15 from '../../assets/Ellipse 16.png'
import Ellipse16 from '../../assets/Ellipse 16.png'
import Ellipse17 from '../../assets/Ellipse 17.png'
import Ellipse18 from '../../assets/Ellipse 18.png'
import Ellipse19 from '../../assets/Ellipse 19.png'
import quo from '../../assets/quo.png';


const data = [
  {
    id: "p1",
    imageUrl: Ellipse13,
    name: "Web Development",
  },
  {
    id: "p2",
    imageUrl: Ellipse14,
    name: "App Development",
  },
  {
    id: "p3",
    imageUrl: Ellipse15,
    name: "Devops Development",
  },
  {
    id: "p4",
    imageUrl: Ellipse16,
    name: "E-Commerce Solutions",
  },
  {
    id: "p5",
    imageUrl: Ellipse17,
    name: "Digital Transformation",
  },
  {
    id: "p6",
    imageUrl: Ellipse18,
    name: "Cloud Computing",
  },
  {
    id: "p7",
    imageUrl: Ellipse19,
    name: "Database Management",
  },
];


const Services2 = () => {
  return (
    <Container>
      <Header>
        <div className="header">
          What <span> we do</span> for our customers
        </div>
        <Qotation>
          <span><img src={quo} alt="img"/></span>
        <p>
        We are a bunch of tech geeks who are trying to change the way how technology is implemented with the use of web3, cloud, automation, & blockchain, We constantly try to outdo ourselves & deliver the best outcomes for you.
        </p>
        <span><img src={quo} alt="img"/></span>
        </Qotation>
      </Header>
      <CardsContainer>
        {data.map((item) => (
          <ServicesCard
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Services2;

const Container = styled.div`
  margin: 1.25rem; /* Convert 20px to rem */
  padding: 1.25rem; /* Convert 20px to rem */
  display: flex;
  flex-direction: column;
  margin-top: 6.25rem; /* Convert 100px to rem */
  position: relative;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    width: 56.25rem; /* Convert 900px to rem */
  }
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
    text-align: center;
    font-family: Poppins;
    font-size: 2.25rem; /* Convert 36px to rem */
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-top: 3.75rem; /* Convert 60px to rem */
    opacity: 0.7;
  }
`;

const CardsContainer = styled.div`
  padding-top: 5rem; /* Convert 80px to rem */
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem; /* Convert 20px to rem */
  justify-content: space-around;
`;

const Qotation = styled.div`
  display: flex;
  flex-direction: row;
`;
