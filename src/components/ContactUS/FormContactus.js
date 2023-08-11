import React, { useState } from "react";
import styled from "styled-components";

const FormContactus = () => {

  const emailAddress = 'contact@thecodewick.com';
  const subject = 'Query';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
      const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
  };

  return (
    <Container>
      <form>
        <label htmlFor="name">Your Name:</label>
        <input
          value={name} onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          placeholder="Type something if you want..."
          required
        /> 

        <label htmlFor="email">Your Email:</label>
        <input
          value={email} onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          placeholder="Type something if you want..."
          required
        />

        <label htmlFor="message">Your Message:</label>
        <textarea
          value={message} onChange={(e) => setMessage(e.target.value)}
          id="message"
          rows="4"
          placeholder="Type something if you want..."
          required
        />

        <button type="button" onClick={handleSendEmail}>Submit</button>
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
  @media (max-width: 770px){
    form {
    width: 20rem;
    padding-top: 5rem;
  }

  label {
    margin-bottom: 8px;
    font-size: 1.2rem;
  }

  input,
  textarea {
    padding: 8px;
    margin-bottom: 16px;
  }

  button {
    width: 160px;
    height: 45px;
    font-size: 20px;
    padding: 8px 38px;
    margin-top: 3rem;
    
  }
  }
`;
