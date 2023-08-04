import React, { useState } from "react";
import styled, { css } from "styled-components";
import { TeamMembersKeyword, TeamMembersCardKeywords } from "../../API/data";
import TeamMembersCard from "./TeamMembersCard";

const TeamMembers = () => {
  const [selectedKeyword, setSelectedKeyword] = useState("All");

  const handleKeywordClick = (keyword) => {
    setSelectedKeyword(keyword);
  };

  const filteredData =
    selectedKeyword === "All"
      ? TeamMembersCardKeywords
      : TeamMembersCardKeywords.filter((item) => item.keyword === selectedKeyword);

  return (
    <Container>
      <Header>
        <div>
          Some <span>recent works</span> we are really proud of
        </div>
      </Header>
      <KeywordsContainer>
        {TeamMembersKeyword.map((item) => (
          <KeywordButton
            key={item}
            selected={item === selectedKeyword}
            onClick={() => handleKeywordClick(item)}
          >
            {item}
          </KeywordButton>
        ))}
      </KeywordsContainer>
      <TeamMembersCardContainer>
        {filteredData.map((item) => (
          <TeamMembersCard
            key={item.keyword}
            imageUrl={item.imgUrl}
            name={item.title}
            position={item.keyword}
          />
        ))}
      </TeamMembersCardContainer>
    </Container>
  );
};

export default TeamMembers;

const Container = styled.div`
  margin: 20px; 
  padding: 20px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px; 
  position: relative;

  .eRight {
    position: absolute;
    right:-50px; 
    top:80px;
    z-index: -1;
    width:230px;
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
  max-height:680p;
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
  max-width: 70vw;
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



const KeywordsContainer = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
`;

const KeywordButton = styled.div`
  max-width: 80vw;
  font-size: 1.2rem;
  opacity: 0.7;
  cursor: pointer;
  margin: 2px 15px;

  ${(props) =>
    props.selected &&
    css`
      opacity: 1;
      font-weight: bold;
    `}

  &:hover {
    opacity: 1;
    font-weight: bold;
  }

  @media (max-width: 430px) {
    font-size: 0.7rem;
  }
`;


const TeamMembersCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2vw;
  max-width: 100vw;
  margin-top: 3rem;
  justify-content: center;
  cursor: pointer;
`;


