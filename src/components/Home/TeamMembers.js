import React, { useState } from "react";
import styled, { css } from "styled-components";
import { TeamMembersKeyword} from "../../API/data";
import { useNavigate } from "react-router-dom";
// import TeamMembersCard from "./TeamMembersCard";

const TeamMembers = () => {
  const navigate = useNavigate();
  const [selectedKeyword, setSelectedKeyword] = useState("All");

  const handleKeywordClick = (keyword) => {
    setSelectedKeyword(keyword);
  };

  // const filteredData =
  //   selectedKeyword === "All"
  //     ? TeamMembersCardKeywords
  //     : TeamMembersCardKeywords.filter((item) => item.keyword === selectedKeyword);

  const handleclicktonavigate = () => {
    navigate("/contact");
  }

  return (
    <Container id="ourexpertieshome">
      <Header>
        <div>
          Industries we are <span>working</span> in
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
      {/* <TeamMembersCardContainer>
        {filteredData.map((item) => (
          <TeamMembersCard
            key={item.keyword}
            imageUrl={item.imgUrl}
            name={item.title}
            position={item.keyword}
          />
        ))}
      </TeamMembersCardContainer> */}

      <ButtonContact id="contacthome">
        <h2>Ready to get started ?</h2>
        <p>We maintain a consistent and relentless pursuit of improvement, always pushing ourselves to be better. Our brand embodies authenticity, making us your trusted partner.</p>
        <button className="contactbtnteam" onClick={handleclicktonavigate}>Contact Us</button>
      </ButtonContact>
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


// const TeamMembersCardContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   gap:2vw;
//   max-width: 100vw;
//   margin-top: 3rem;
//   justify-content: center;
//   cursor: pointer;
// `;

const ButtonContact = styled.div`
  width: 80vw;
  height: 30vh;
  margin-top: 7vw;
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  border-radius: 1vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6); 
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out; 

  & h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 1vw;
    color: #000;
  }

  & p {
    width: 60vw;
    text-align: center;
    color: #000;
    opacity: 0.7;
    padding-top: 1vw;
    font-size: 16px;
  }

  & button.contactbtnteam {
    width: 20vw;
    height: 5vh;
    margin-top: 1vw;
    background-color: rgb(144, 61, 240);;
    color: #fff;
    border: none;
    font-size: 18px;
    font-weight: 700;
    border-radius: 1vw;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #6a0000;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.9); 
    }
  }


  @media (max-width: 1025px) {
    width: 90vw;
    padding: 12px 24px;
    font-size: 16px;

    & h2 {
      font-size: 22px;
    }

    & p {
      width: 70vw;
      font-size: 14px;
    }

    & button.contactbtnteam {
      width: 30vw;
      height: 4vh;
    }
  }

  @media (max-width: 770px) {
    width: 90vw;
    padding: 10px 20px;
    font-size: 14px;

    & h2 {
      font-size: 20px;
    }

    & p {
      width: 70vw;
      font-size: 12px;
    }

    & button.contactbtnteam {
      width: 35vw;
      height: 4vh;
    }
  }

  @media (max-width: 430px) {
    width: 90vw;
    padding: 8px 16px;
    font-size: 12px;

    & h2 {
      font-size: 18px;
    }

    & p {
      width: 70vw;
      font-size: 10px;
    }

    & button.contactbtnteam {
      width: 40vw;
      height: 4vh;
    }
  }

  @media (max-width: 390px) {
    width: 90vw;
    padding: 6px 12px;
    font-size: 10px;

    & h2 {
      font-size: 16px;
    }

    & p {
      width: 70vw;
      font-size: 8px;
    }

    & button.contactbtnteam {
      width: 45vw;
      height: 3.5vh;
    }
  }
`;

