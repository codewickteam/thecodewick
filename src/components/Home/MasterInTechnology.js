import React from 'react';
import styled  from 'styled-components';
import image1 from '../../assets/NodeJS logo.png';
import image2 from '../../assets/saas.png';
import image3 from '../../assets/Java.png' ;
import image4 from '../../assets/Python.png' ;
import image5 from '../../assets/React_JS Developer - Web_Mobile UI_UX Design & Development.png' ;
import image6 from '../../assets/octagen.png' ;
import image7 from '../../assets/Salesforce.png' ;
import image8 from '../../assets/tensorflow.png' ;
import image9 from '../../assets/jackines.png' ;
import image10 from '../../assets/studio.png' ;
import image11 from '../../assets/docker.jpg' ;
import image12 from '../../assets/mdb.png' ;
import image13 from '../../assets/aws.png' ;
import image14 from '../../assets/image6.png' ;
import image15 from '../../assets/image7.png' ;
import image16 from '../../assets/image11.png' ;




const data=[
    {
        id:"p1",
        imageUrl:image1,
    },
    {
        id:"p2",
        imageUrl:image2,
    },
    {
        id:"p3",
        imageUrl:image3,
    },
    {
        id:"p4",
        imageUrl:image4,
    },
    {
        id:"p5",
        imageUrl:image5,
    },
    {
        id:"p6",
        imageUrl:image6,
    },
    {
        id:"p7",
        imageUrl:image7,
    },
    {
        id:"p8",
        imageUrl:image8,
    },
    {
      id:"p9",
      imageUrl:image9,
  },
  {
      id:"p10",
      imageUrl:image10,
  },
  {
      id:"p11",
      imageUrl:image11,
  },
  {
      id:"p12",
      imageUrl:image12,
  },
  {
      id:"p13",
      imageUrl:image13,
  },
  {
      id:"p14",
      imageUrl:image14,
  },
  {
      id:"p15",
      imageUrl:image15,
  },
  {
      id:"p16",
      imageUrl:image16,
  },
];


const MasterInTechnology = () => {
  return (
    <Container id='masterInTechnologyhome'>
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
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  /* @media (max-width: 1025px){
    max-height: 800px;
  }
  @media (max-width: 770px){
    max-height: 700px;
  }
  @media (max-width: 430px){
    max-height: 500px;
  }
  @media (max-width: 390px){
    max-height: 400px;
  } */
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    span {
      background: linear-gradient(90deg, #de0000 0%, #6a0000 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: Poppins;
      font-size: 64px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  p {
    color: #000;
    max-width: 1213px;
    padding-top: 20px;
    text-align: center;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.7;
  }
  @media (max-width: 1025px){
    div {
    font-size: 40px;
    span {
      font-size: 40px;
    }
  }

  p {
    max-width: 816px;
    padding-top: 20px;
    font-size: 24px;
  }
  }
  @media (max-width: 770px){
    div {
    font-size: 35px;
    span {
      font-size: 35px;
    }
  }

  p {
    max-width: 600px;
    padding-top: 20px;
    font-size: 20px;
  }
  }
  @media (max-width: 430px){
    div {
    font-size: 24px;
    span {
      font-size: 24px;
    }
  }

  p {
    max-width: 300px;
    padding-top: 10px;
    font-size: 14px;
  }
  }
  @media (max-width: 390px){
    div {
    font-size: 24px;
    span {
      font-size: 24px;
    }
  }

  p {
    max-width: 280px;
    padding-top: 10px;
    font-size: 12px;
  }
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap:2vw;
  margin-bottom: 50px;
  margin-top: 100px;
  img {
  width: 9vw;
  height: 9vw;
  padding:4px;
  border: 2px solid rgb(168, 166, 166);
  border-radius: 0.6rem;
  cursor: pointer;
  transition: transform 0.3s ease; 
}

img:hover {
  transform: scale(1.1); 
}

  @media (max-width: 1025px){
  gap: 80px;
  margin-bottom: 50px;
  margin-top: 100px;

  img{
    width: 102px;
    height: 102px;
  }
  }
  @media (max-width: 770px){
    gap: 60px;
  margin-bottom: 50px;
  margin-top: 90px;

  img{
    width: 90px;
    height: 90px;
  }
  }
  @media (max-width: 430px){
  gap: 40px;
  margin-bottom: 30px;
  margin-top: 60px;

  img{
    width: 45px;
    height: 45px;
  }
  }
  
  @media (max-width: 390px){
  gap: 30px;
  margin-bottom: 30px;
  margin-top: 60px;

  img{
    width: 37px;
    height: 37px;
  }
  }
`;

