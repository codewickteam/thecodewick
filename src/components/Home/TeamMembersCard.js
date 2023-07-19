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
  width: 27.5rem; /* Convert 440px to rem */
  height: 44.125rem; /* Convert 706px to rem */
  border: grey;
  background: #fff;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem 0 0 0; /* Convert 20px to rem */
  margin-bottom: 6.25rem; /* Convert 100px to rem */
  margin-top: 3.125rem; /* Convert 50px to rem */
  img {
    width: 26.25rem; /* Convert 420px to rem */
    height: 33.75rem; /* Convert 540px to rem */
    flex-shrink: 0;
    border-radius: 1.25rem; /* Convert 20px to rem */
  }
  h2 {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 2.25rem; /* Convert 36px to rem */
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  span {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 1.25rem; /* Convert 20px to rem */
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity: 0.6;
  }
}`;
