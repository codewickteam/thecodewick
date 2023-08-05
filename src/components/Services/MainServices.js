import React from 'react'
import styled from "styled-components";
import ServicesCard from "./MainServicescard";
import quo from '../../assets/quo.png';
import {MainServicesdata} from '../../API/data';


const MainServices = () => {
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
        {MainServicesdata.map((item) => (
          <ServicesCard
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            para={item.para}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default MainServices;

const Container = styled.div`
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    width: 900px;
  }
  div {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    span {
      background: linear-gradient(90deg, #de0000 0%, #6a0000 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: Poppins;
      font-size: 64px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  p {
    color: #000;
    max-width: 1213px;
    text-align: center;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-top: 60px;
    opacity: 0.7;
  }

@media (max-width: 1025px){
  .header {
    max-width: 843px;
  }
  div {
    font-size: 40px;
    span {
      font-size: 40px;
    }
  }
  p {
    font-size: 24px;
    padding-top: 40px;
  }

}
@media (max-width: 770px){
  .header {
    max-width: 690px;
  }
  div {
    font-size: 35px;
    span {
      font-size: 35px;
    }
  }
  p {
    font-size: 19px;
    padding-top: 35px;
  }
}
@media (max-width: 430px){
  .header {
    max-width: 329px;
  }
  div {
    font-size: 28px;
    span {
      font-size: 28px;
    }
  }
  p {
    font-size: 14px;
    padding-top: 25px;
  }
}
@media (max-width: 390px){
  .header {
    max-width: 329px;
  }
  div {
    font-size: 24px;
    span {
      font-size: 24px;
    }
  }
  p {
    font-size: 12px;
    padding-top: 25px;
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


const Qotation = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1025px){
  img{
    width: 50px;
    height: 50px;
  }
}
@media (max-width: 770px){
  img{
    width: 45px;
    height: 45px;
  }

}
@media (max-width: 430px){
  img{
    width: 30px;
    height: 30px;
  }
}
@media (max-width: 390px){
  img{
    width: 25px;
    height: 25px;
  }
}
`;

