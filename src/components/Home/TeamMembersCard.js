import React from "react";
import styled from "styled-components";

const TeamMembersCard = ({ imageUrl, name, position }) => {
  return (
    <Container>
      <img src={imageUrl} alt="Team Member" />
      <h2>{name}</h2>
      <span>{position}</span>
    </Container>
  );
};

export default TeamMembersCard;

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 300px;
  border: grey;
  background: #fff;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 280px;
    height: 280px;
    flex-shrink: 0;
  }
  h2 {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  span {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity: 0.6;
  }

@media (max-width: 1025px){
  max-width: 200px;

  img {
    width: 200px;
    height: 200px;
  }
  h2 {
    font-size: 18px;
  }
  span {
    font-size: 15px;
  }

}
@media (max-width: 770px){
  max-width: 240px;
  padding: 20px 0 0 0;
  margin-bottom: 100px;
  margin-top: 50px;
  img {
    width: 150px;
    height: 150px;
  }
  h2 {
    font-size: 14px;
  }
  span {
    font-size: 10px;
  }


}
`;
