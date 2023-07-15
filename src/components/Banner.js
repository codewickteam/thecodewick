import React from 'react'
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/images/img_1.png'
import img2 from '../assets/images/img_2.png'
import img3 from '../assets/images/img_3.png'

const Banner = () => {
  return (
    <>
      <Carousel >
        <Carousel.Item interval={3000} style={{ position: 'relative', display: 'fle' } } >
          <img
            height={700}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <div style={{ position: 'absolute', bottom: 0, color: 'white', height: 400, marginLeft: 150 }}>
            <h1>Esports on Demand</h1>
            <p>Challenge players of your own skill level in your favorite games.</p>
            <p>Compete in daily tournaments and claim your share of prizes.</p>
            <a href="/home" className='hero-button' target="_blank">
              <span> </span>
              <span> </span>
              <span> </span>
              <span> </span>
              REGISTER FOR FREE
            </a>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            height={700}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <div style={{ position: 'absolute', bottom: 0, color: 'white', height: 400, marginLeft: 150 }}>
            <h1>Games</h1>
            <p>Play your favorite esports titles and crush your opponents in daily tournaments,
              exciting leagues and thrilling challenges.</p>
            <a href="/home" className='hero-button' target="_blank">
              <span> </span>
              <span> </span>
              <span> </span>
              <span> </span>
              Browse Games
            </a>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            height={700}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <div style={{ position: 'absolute', bottom: 0, color: 'white', height: 400, marginLeft: 150 }}>
            <h1>Treasure</h1>
            <p>Compete for prize money and other digital prizes - Team or Solo.</p>
            <a href="/home" className='hero-button' target="_blank">
              <span> </span>
              <span> </span>
              <span> </span>
              <span> </span>
              JOIN AKM
              </a>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Banner