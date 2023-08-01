import React from "react";
import styled from "styled-components";

const FormContactus = () => {
  return (
    <Container>
      <form>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Type something if you want..."
          required
        />

        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Type something if you want..."
          required
        />

        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          rows="4"
          placeholder="Type something if you want..."
          required
        />

        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

export default FormContactus;

const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 35rem;
    margin: 0 auto;
    padding-top: 5rem;
  }

  label {
    margin-bottom: 8px;
    color: #000;
    font-family: Poppins;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  input,
  textarea {
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid;
    border-radius: 4px;
  }

  button {
    width: 160px;
    height: 45px;
    border-radius: 30px;
    background-color: black;
    color: #fff;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    padding: 8px 38px;
    margin-top: 4rem;
    cursor: pointer;
  }
`;
