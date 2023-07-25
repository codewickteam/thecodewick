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
          Thank you for considering us as your web developer. We believe that our experience, skills, and 
          dedication sets us apart and maje the ideal choice for your project.
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
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.699999988079071;
    padding-top: 10px;
  }
  @media (max-width: 1025px){
    div {
    font-size: 2.5rem; 
  }

  p {
    max-width: 48.25rem;
    font-size: 1.25rem;
    padding-top: 10px;
  }
    
  }
  @media (max-width: 770px){
    p {
    max-width: 41.25rem;
  }
  }
  @media (max-width: 430px){
    margin-top: 0rem;
    div {
    font-size: 1.5rem; 
  }

  p {
    max-width: 19.25rem;
    font-size: 0.75rem;
    padding-top: 10px;
  }
  }

`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 6.25rem; /* Convert 100px to rem */
  margin-bottom: 2.25rem; /* Convert 100px to rem */
  gap:5rem;
  @media (max-width: 430px){
  margin-top: 4.25rem; /* Convert 100px to rem */
  margin-bottom: 1.25rem; /* Convert 100px to rem */
  gap:5rem;
  }
`;
