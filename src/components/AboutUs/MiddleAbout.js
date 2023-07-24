import React from 'react'
import styled from "styled-components";
import R36 from "../../assets/Rectangle 36.png"
import R37 from "../../assets/Rectangle 37.png"
import R38 from "../../assets/Rectangle 38.png"
import R39 from "../../assets/Rectangle 39.png"
import MiddleAboutCard from './MiddleAboutCard'

const data=[
  {
    id: "p1",
    imageUrl: R36,
    name: "Expertise",
    para: "We have extensive experience in designing & developing websites for clients across various industries.",
  },
  {
    id: "p2",
    imageUrl: R37,
    name: "Attention to Detail",
    para: "We have extensive experience in designing & developing websites for clients across various industries.",
  },
  {
    id: "p3",
    imageUrl: R38,
    name: "Communication",
    para: "We have extensive experience in designing & developing websites for clients across various industries.",
  },
  {
    id: "p4",
    imageUrl: R39,
    name: "Customer Service",
    para: "We have extensive experience in designing & developing websites for clients across various industries.",
  },

]

const MiddleAbout = () => {
  return (
    <Container>
      <Header>
        <div>Why Choose Us</div>
        <p>
Thank you for considering us as your web developer. We believe that our experience, skills, and dedication sets us apart and maje the ideal choice for your project.
        </p>
      </Header>
      <CardsContainer>
        {data.map((item) => (
          <MiddleAboutCard
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            para={item.para}
          />
        ))}
      </CardsContainer>
    </Container>
  )
}

export default MiddleAbout

const Container = styled.div`
  margin: 1.25rem 0 1.25rem 0; /* Convert 20px to rem */
  padding: 1.25rem 0 1.25rem 0; /* Convert 20px to rem */
  display: flex;
  flex-direction: column;
  margin-top: 6.25rem; /* Convert 100px to rem */
  position: relative;
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
    @media (max-width: 772px){
      color: #000;
      text-align: center;
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;      
    };
    @media (max-width: 318px){
      color: #000;
      text-align: center;
      font-family: Poppins;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      opacity: 0.699999988079071;      
    };
  }

`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin-top: 6.25rem; /* Convert 100px to rem */
  margin-bottom: 5.25rem; /* Convert 100px to rem */
  margin-left: 6.125rem; /* Convert 50px to rem */
  margin-right: 3.125rem; /* Convert 50px to rem */
  gap:70px;
`;
