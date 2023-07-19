import React from "react";
import styled from "styled-components";
import Rectangle30 from "../../assets/Rectangle30.png";

const TopAboutUs = () => {
  return (
    <Container>
      <h1>About Us From Us</h1>
      <p>
        As a Web Development Service are committed to building custom website
        solutions that drive business towards success.
      </p>
      <Left>
        <img src={Rectangle30} alt="Rectangle30" />
        <span>
          <Paragraph>
            Outsource software development with Codewick leveraging an array of
            IT technologies for all company sizes. The right technology stack
            can significantly reduce the total cost of ownership & scale up your
            business.
          </Paragraph>
          <Paragraph>
            Our team of tech strategists, enterprise architects & transformation
            experts help harness technology & innovation as a way to reinvent
            every business.
          </Paragraph>
          <button>Get in touch</button>
        </span>
      </Left>
    </Container>
  );
};

export default TopAboutUs;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12.5rem; /* 200px / 16 = 12.5rem */
  h1 {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 4rem; /* 64px / 16 = 4rem */
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    width: 61.3125rem; /* 981px / 16 = 61.3125rem */
    color: #000;
    margin-top: 1.25rem; /* 20px / 16 = 1.25rem */
    text-align: center;
    font-family: Poppins;
    font-size: 1.375rem; /* 22px / 16 = 1.375rem */
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.7; /* No need to convert opacity */
  }
`;

const Left = styled.div`
  display: flex;
  margin-top: 6.25rem; /* 100px / 16 = 6.25rem */
  img {
    /* width: 37.5rem; */ /* Commented out as it's not using rem units */
    height: 25rem; /* 400px / 16 = 25rem */
    flex-shrink: 0;
    border-radius: 1.25rem; /* 20px / 16 = 1.25rem */
    padding: 0 1.875rem 0 4.3125rem; /* 0 20px / 16 = 0 1.875rem, 69px / 16 = 4.3125rem */
  }
  span {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 5rem 0 3.125rem; /* 0 80px / 16 = 0 5rem, 50px / 16 = 3.125rem */
  }
  button {
    width: 15.0625rem; /* 241px / 16 = 15.0625rem */
    height: 4.875rem; /* 78px / 16 = 4.875rem */
    flex-shrink: 0;
    border-radius: 0.625rem; /* 10px / 16 = 0.625rem */
    border: 0.125rem solid #000; /* 2px / 16 = 0.125rem */
    color: #000;
    font-family: Poppins;
    font-size: 1.375rem; /* 22px / 16 = 1.375rem */
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background-color:white;
  }
`;

const Paragraph = styled.div`
  color: #000;
  font-family: Poppins;
  font-size: 1.375rem; /* 22px / 16 = 1.375rem */
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  opacity: 0.7; /* No need to convert opacity */
  max-width: 62.5rem; /* 1000px / 16 = 62.5rem */
  min-width: 25rem; /* 400px / 16 = 25rem */
`;
