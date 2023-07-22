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
  margin: 20px; 
  padding: 20px; 
  display: flex;
  flex-direction: column;
  margin-top: 100px; 
  position: relative;

  .eRight {
    position: absolute;
    right:-10px; 
    z-index: -1;
    pointer-events: none;
  }

  .eLeft {
    position: absolute;
    bottom: -500px; 
    left: -60px; 
    z-index: -1;
    pointer-events: none;
  }



  @media (max-width: 1025px){
  max-height:850px;
  margin: 20px; 
  padding: 20px; 
  margin-top: 80px; 

  .eRight {
    top:150px;
    right:-60px;
    width:190px;

  }

  .eLeft {

    bottom: -220px; 
    width:190px;
    z-index:999;
  }

  }
  @media (max-width: 770px){
  max-height:630px;
  margin: 20px; 
  padding: 20px; 
  margin-top: 60px; 

  .eRight {
    top:150px;
    right:-60px;
    width:130px;

  }

  .eLeft {
    bottom: -160px; 
    width:130px;
    z-index:9;
  }
  
  }
  @media (max-width: 430px){
  max-height:400px;
  margin: 20px; 
  padding: 20px; 
  margin-top:40px; 

  .eRight {
    top:140px;
    right:-60px;
    width:90px;

  }

  .eLeft {
    bottom: -120px; 
    width:90px;
    z-index:9;
  }

  }
  @media (max-width: 390px){
  max-height:360px;
  margin: 20px; 
  padding: 20px; 
  margin-top: 60px; 

  .eRight {
    top:100px;
    right:-60px;
    width:90px;

  }

  .eLeft {
    bottom: -120px; 
    width:90px;
    z-index:9;
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
    padding-top: 10px; 
    text-align: center;
    font-family: Poppins;
    font-size: 28px; 
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.7;
    background-color:white;
    z-index:99;
  }


@media (max-width: 1025px){
  div {
    font-size: 40px; 
    span {
      font-size: 40px;
    }
  }

  p {
    max-width: 783px; 
    padding-top: 10px; 
    font-size: 22px; 
  }

}
@media (max-width: 770px){
  div {
    font-size: 35px; 
    span {
      font-size: 35px;
    }
  }

  p {
    max-width: 683px; 
    padding-top: 10px; 
    font-size: 18px; 
  }

}
@media (max-width: 430px){
  div {
    font-size: 27px; 
    span {
      font-size: 27px;
    }
  }

  p {
    max-width: 400px; 
    padding-top: 10px; 
    font-size: 15px; 
  }

}
@media (max-width: 390px){
  div {
    font-size: 20px; 
    span {
      font-size: 20px;
    }
  }

  p {
    max-width: 330px; 
    padding-top: 10px; 
    font-size: 10px; 
  }
}
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px; 
  padding: 10px; 

@media (max-width: 1025px){
  margin-top: 18px; 
  padding: 10px; 

}
@media (max-width: 770px){
  margin-top: 10px; 
  padding: 5px; 

}
@media (max-width: 430px){
  margin-top: 10px; 
  padding: 4px; 

}
@media (max-width: 390px){
  margin-top: 8px; 
  padding: 1px; 
}

`;
