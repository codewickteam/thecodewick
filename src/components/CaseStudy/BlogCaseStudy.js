import React from "react";
import styled from "styled-components";

const BlogCaseStudy = ({ id, date, title, desc, imgUrl, keywords }) => {
  return (
    <Container className={id % 2 === 0 ? "reverse" : ""}>
      <img src={imgUrl} alt="imge" />
      <DataContainer>
        <span>{date}</span>
        <h2>{title}</h2>
        <p>{desc}</p>
        <ul>
          {keywords.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </DataContainer>
    </Container>
  );
};

export default BlogCaseStudy;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  gap:4vw;
  &.reverse {
    flex-direction: row-reverse;
  }

  img {
    width: 40vw;
    height: 30vw;
  }

  @media (max-width: 430px){
  margin-bottom: 2rem;
  gap:2vw;

  img {
    width: 70vw;
    height: 50vw;
  }
  }
`;

const DataContainer = styled.div`
  span {
    color: #000;
    font-family: Poppins;
    font-size: 1.25vw;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.7;
  }
  h2 {
    max-width: 35.5vw;
    color: #000;
    font-family: Poppins;
    font-size: 2vw;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  p {
    max-width: 30.1875vw;
    color: #000;
    font-family: Poppins;
    font-size: 1.25vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.6;
    opacity: 0.6;
  }
  ul {
    max-width: 30.1875rem;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    li {
      max-width: 7.9375rem;
      max-height: 2.5625rem;
      margin:  0.5vw 0.5vw 0.5vw 0;
      padding: 0.5vw;
      border-radius: 1.25vw;
      border: 1px solid #1e1d23;
      background-color: #000;
      color: #FFF;
      text-align: center;
      align-items: center;
        font-family: Poppins;
        font-size: 1.125vw;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        cursor: pointer;
        }
  }

  @media (max-width: 430px){
  span {
    font-size: 3.25vw;}
  h2 {
    max-width: 70.5vw;
    font-size: 4vw;
  }
  p {
    max-width: 60.1875vw;
    font-size: 3.25vw;
  }
  ul {
    max-width: 70.1875rem;
    li {
      max-width: 20.9375rem;
      max-height: 10.5625rem;
      margin:  0.5vw 0.5vw 0.5vw 0;
      padding: 0.5vw;
      border-radius: 2.25vw;
      font-size: 2.9vw;
        }
  }
  }
  
`;
