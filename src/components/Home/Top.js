import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Banner from "./Banner";
import ellipse35 from "../../assets/Ellipse 35.png";
import ellipse34 from "../../assets/Ellipse 34.png";

export default function Top() {
  return (
    <Container className="wrapper">
      <div className="comp1 flex a-center j-center flex-col">
        <div className="title1 flex flex-col a-center">
          <span className="title1-text">Imagine.</span>
          <span className="title1-text">Innovate. Disrupt.</span>
        </div>

        <div className="text1">
          We help organizations harness technology & innovation to shape their
          visions, execute their digital transformation journeys, & reinvent
          their business to create exceptional, sustainable value.
        </div>

        <Link className="btn1 flex a-center j-center" to="/">
          <div className="btn-text1">See Plans</div>
        </Link>

        {/* <img className="ellipse35" src={ellipse35} alt="" />
        <img className="ellipse34" src={ellipse34} alt="" /> */}
      </div>

      <div className="comp2">
        <div className="title2">
          Top Brands <span className="title2-span">Trust Us</span>
        </div>

        <div className="stats2 flex j-between">
          <div className="flex flex-col a-center">
            <div className="red-ring flex j-center a-center">
              <div className="white-ring flex a-center j-center">
                <div className="ring-text-left">100+</div>
              </div>
            </div>
            <div className="stats-txt">Projects Launched</div>
          </div>

          <div className="flex flex-col a-center">
            <div className="red-ring flex j-center a-center">
              <div className="white-ring flex a-center j-center">
                <div className="ring-text-left">20+</div>
              </div>
            </div>
            <div className="stats-txt">Years of Experience</div>
          </div>

          {/* <div className="flex flex-col a-center">
            <div className="red-ring flex j-center a-center">
              <div className="white-ring flex a-center j-center">
                <div className="ring-text-right">575+</div>
              </div>
            </div>
            <div className="stats-txt">Dedicated Developers</div>
          </div> */}

          <div className="flex flex-col a-center">
            <div className="red-ring flex j-center a-center">
              <div className="white-ring flex a-center j-center">
                <div className="ring-text-right">92%</div>
              </div>
            </div>
            <div className="stats-txt">Client Retention</div>
          </div>
        </div>

        <div className="band4"></div>

        <div className="comp3 flex a-center j-center flex-col">
          <div className="title3">
            Take a look at our <span className="span3">portfolio</span>
          </div>

          <Banner />

          <Link className="btn3 flex a-center j-center" to="/">
            <div className="btn-text3">Check Out</div>
          </Link>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  .flex {
    display: flex;
  }
  .a-center {
    align-items: center;
  }
  .j-center {
    justify-content: center;
  }
  .flex-col {
    flex-direction: column;
  }
  .j-between {
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }

  .comp1 {
    padding-top: 12.1875rem; /* Convert 195px to rem */
  }
  .ellipse34 {
    position: absolute;
    margin-top: 27.3125rem; /* Convert 433px to rem */
    left: -3.125rem; /* Convert 50px to rem */
    bottom: 0;
    top: 0;
    pointer-events: none;
  }
  .ellipse35 {
    position: absolute;
    margin-top: 9.125rem; /* Convert 158px to rem */
    right: -3.125rem; /* Convert 50px to rem */
    bottom: 0;
    top: 0;
    pointer-events: none;
  }

  .title1-text {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 6rem; /* Convert 96px to rem */
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .text1 {
    width: 61.3125rem; /* Convert 981px to rem */
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 1.375rem; /* Convert 22px to rem */
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 1.625rem; /* Convert 26px to rem */
    margin-bottom: 3.125rem; /* Convert 49px to rem */
    opacity: 0.7; /* Convert 0.699999988079071 to rem */
  }

  .btn1 {
    width: 13.75rem; /* Convert 220px to rem */
    height: 4.6875rem; /* Convert 75px to rem */
    border-radius: 3.75rem; /* Convert 60px to rem */
    background: #1e1e1e;
    margin-bottom: 3.875rem; /* Convert 246px to rem */
  }

  .btn-text1 {
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 1.5rem; /* Convert 24px to rem */
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .comp2 {
    /* width: 100%; */
  }

  .title2 {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 4rem; /* Convert 64px to rem */
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 9.0625rem; /* Convert 145px to rem */
  }

  .title2-span {
    background: linear-gradient(87deg, #bf0000 39.29%, #7d0000 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Poppins;
    font-size: 4rem; /* Convert 64px to rem */
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .stats2 {
    /* gap: 155px; */
    padding: 2rem 2rem; /* Convert 32px to rem */
    /* width: 300px; */
    padding-bottom: 7.3125rem; /* Convert 117px to rem */
  }

  .red-ring {
    width: 18.75rem; /* Convert 300px to rem */
    height: 18.75rem; /* Convert 300px to rem */
    border-radius: 18.75rem; /* Convert 300px to rem */
    opacity: 0.8; /* Convert 0.800000011920929 to rem */
    background: linear-gradient(180deg, #b20000 0%, #800 100%);
  }

  .white-ring {
    width: 15.625rem; /* Convert 250px to rem */
    height: 15.625rem; /* Convert 250px to rem */
    border-radius: 100%;
    background-color: #fff;
  }

  .ring-text-left {
    text-align: center;
    font-family: Poppins;
    font-size: 4rem; /* Convert 64px to rem */
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: linear-gradient(90deg, #b20000 0%, #800 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .ring-text-right {
    text-align: center;
    font-family: Poppins;
    font-size: 4rem; /* Convert 64px to rem */
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: linear-gradient(180deg, #b20000 0%, #800 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .stats-txt {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 2rem; /* Convert 32px to rem */
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 2.3125rem; /* Convert 37px to rem */
  }

  .band4 {
    height: 17.625rem; /* Convert 278px to rem */
    width: 100%;
    background: #d9d9d9;
    margin-bottom: 12.6875rem; /* Convert 202px to rem */
    position: relative;
  }

  .title3 {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 4rem; /* Convert 64px to rem */
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-bottom: 6.875rem; /* Convert 110px to rem */
  }

  .span3 {
    background: linear-gradient(87deg, #bf0000 39.29%, #7d0000 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Poppins;
    font-size: 4rem; /* Convert 64px to rem */
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .btn3 {
    margin-top: 3.8125rem; /* Convert 61px to rem */
    width: 16.25rem; /* Convert 260px to rem */
    height: 4.6875rem; /* Convert 75px to rem */
    flex-shrink: 0;
    border-radius: 3.75rem; /* Convert 60px to rem */
    background: #1e1e1e;
  }

  .btn-text3 {
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 1.5rem; /* Convert 24px to rem */
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
