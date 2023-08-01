import React from "react";
import styled from "styled-components";

const HeaderCaseStudy = () => {
  return (
    <Container>
      <h1>Case Study</h1>
      <p>
        To request or want to meet up for a meet, contact us directly or fill
        out the form and we will get back to you promptly.
      </p>
    </Container>
  );
};

export default HeaderCaseStudy;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vw;
  h1 {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 96px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p {
    width: 981px;
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.699999988079071;
  }

  @media (max-width: 1025px) {
    margin-top: 100px;
    h1 {
      font-size: 5rem;
    }
    p {
      max-width: 51.9rem;
      font-size: 1.375rem;
    }
  }
  @media (max-width: 770px) {
    margin-top: 100px;
    h1 {
      font-size: 4.7rem;
    }
    p {
      max-width: 45.9rem;
      font-size: 1.175rem;
    }
  }
  @media (max-width: 430px) {
    margin-top: 100px;
    h1 {
      font-size: 1.75rem;
    }
    p {
      max-width: 20.937rem;
      font-size: 0.75rem;
    }
  }
`;

