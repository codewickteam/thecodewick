import React from "react";
import styled from "styled-components";
import Rectangle30 from "../../assets/Rectangle30.png";

const TopAboutUs = () => {
  return (
    <Container>
      <h1>About Us From Us</h1>
      <p>
        As a Web Development Service are commited to building custom website
        solutions that drive business towards success.
      </p>
      <div>
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
      </div>
    </Container>
  );
};

export default TopAboutUs;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  h1 {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    width: 981px;
    color: #000;
    margin-top: 20px;
    text-align: center;
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.699999988079071;
  }
  div {
    display: flex;
    margin-top: 100px;
    img {
      // width: 600px;
      height: 400px;
      flex-shrink: 0;
      border-radius: 20px;
      padding: 0 20px 0 69px;
    }
    span{
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      margin-left: 50px;
    }
    button {
      width: 241px;
      height: 78px;
      flex-shrink: 0;
      border-radius: 10px;
      border: 2px solid #000;
      color: #000;
      font-family: Poppins;
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;

const Paragraph = styled.div`
color: #000;
font-family: Poppins;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
opacity: 0.699999988079071;
`;
