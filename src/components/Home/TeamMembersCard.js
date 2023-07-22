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
  margin-bottom: 100px;
  margin-top: 50px;
  img {
    width: 420px;
    height: 540px;
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
    opacity: 0.6;
  }

@media (max-width: 1025px){
  max-width: 340px;
  padding: 20px 0 0 0;
  margin-bottom: 100px;
  margin-top: 50px;
  img {
    width: 278px;
    height: 337px;
  }
  h2 {
    font-size: 26px;
  }
  span {
    font-size: 18px;
  }

}
@media (max-width: 770px){
  max-width: 240px;
  padding: 20px 0 0 0;
  margin-bottom: 100px;
  margin-top: 50px;
  img {
    width: 208px;
    height: 237px;
  }
  h2 {
    font-size: 16px;
  }
  span {
    font-size: 13px;
  }


}
@media (max-width: 430px){
  max-width: 120px;
  padding: 20px 0 0 0;
  margin-bottom: 80px;
  margin-top: 10px;
  img {
    width: 102px;
    height: 123px;
  }
  h2 {
    font-size: 10px;
  }
  span {
    font-size: 8px;
  }

}
@media (max-width: 390px){
  max-width: 120px;
  padding: 20px 0 0 0;
  margin-bottom: 100px;
  margin-top: 10px;
  h2 {
    font-size: 8px;
  }
  span {
    font-size: 8px;
  }
}
`;
