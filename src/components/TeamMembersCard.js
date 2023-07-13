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
  width: 440px;
  height: 706px;
  border: grey;
  background: #fff;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 0 0;
  margin-bottom:100px;
  margin-top:50px;
  img {
    width: 490px;
    height: 591px;
    flex-shrink: 0;
    border-radius: 20px;
  }
  h2 {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
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
    opacity: 0.6000000238418579;
  }
`;
