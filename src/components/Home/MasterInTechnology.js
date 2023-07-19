import React from 'react';
import styled  from 'styled-components';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';
import image7 from '../../assets/image7.png';
import image8 from '../../assets/image8.png';
import image9 from '../../assets/image9.png';
import image10 from '../../assets/image10.png';
import image11 from '../../assets/image11.png';


const data=[
    {
        id:"p1",
        imageUrl:image4,
    },
    {
        id:"p2",
        imageUrl:image5,
    },
    {
        id:"p3",
        imageUrl:image6,
    },
    {
        id:"p4",
        imageUrl:image7,
    },
    {
        id:"p5",
        imageUrl:image11,
    },
    {
        id:"p6",
        imageUrl:image10,
    },
    {
        id:"p7",
        imageUrl:image9,
    },
    {
        id:"p8",
        imageUrl:image8,
    },
];


const MasterInTechnology = () => {
  return (
    <Container>
      <Header>
        <div>
          Master In <span>Trending Technology</span>
        </div>
        <p>
          Outsource software development with Codewick leveraging an array of IT technologies for all company sizes. The right technology stack can significantly reduce the total cost of ownership & scale up your business.
        </p>
      </Header>
      <CardsContainer>
        {data.map((item) => (
          <img src={item.imageUrl} alt={item.id} key={item.id} />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default MasterInTechnology;

const Container = styled.div`
  margin: 1.25rem; /* Convert 20px to rem */
  padding: 1.25rem; /* Convert 20px to rem */
  display: flex;
  flex-direction: column;
  margin-top: 6.25rem; /* Convert 100px to rem */
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 4rem; /* Convert 64px to rem */
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    span {
      background: linear-gradient(90deg, #de0000 0%, #6a0000 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: Poppins;
      font-size: 4rem; /* Convert 64px to rem */
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  p {
    color: #000;
    max-width: 76.0625rem; /* Convert 1213px to rem */
    padding-top: 1.25rem; /* Convert 20px to rem */
    text-align: center;
    font-family: Poppins;
    font-size: 1.75rem; /* Convert 28px to rem */
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.7;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 6.25rem; /* Convert 100px to rem */
  margin-bottom: 3.125rem; /* Convert 50px to rem */
  margin-top: 6.25rem; /* Convert 100px to rem */
`;

// Rest of the code remains the same.
