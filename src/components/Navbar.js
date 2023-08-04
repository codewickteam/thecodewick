import React, { useState } from 'react'
import { styled } from 'styled-components'
import wicklogo from '../assets/codewick-logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const[show, setShow] = useState(false)

  return (
    <Container>
      <div className="container flex a-center j-between">
      <div onClick={()=> setShow(!show)} className="m-logo">
            { show ? 
                (
                <Link className="mlogo-icon2">
                    <div className='mlogo-top2'></div>
                    <div className='mlogo-bottom2'></div>
                </Link>
                ) : (
            <Link className="mlogo-icon1">
                <div className='mlogo-top1'></div>
                <div className='mlogo-bottom1'></div>
            </Link>
                )
            }

            { show &&
                <div className="mlogo-menu flex f-column a-center j-center">
                <Link to='/'>HOME</Link>
                <di className="rule"/>
                <Link to='/'>ABOUT US</Link>
                <div className="rule"/>
                <Link to='/'>BLOG</Link>
            </div>
            }
        </div>




        <div className="logo box">
        <Link to='/' className='logo'><img src={wicklogo} alt="" className="logo" /></Link>
        </div>

      <div className="links flex j-between">
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/services'>Services</Link>
        <Link className='link' to='/about'>About Us</Link>
        <Link className='link' to='/casestudy'>Case Study</Link>
        <Link className='link' to='/blog'>Blog</Link>
      </div>

      <Link className='btn flex a-center j-center' to='contact'>
        <div className="btn-text flex">
            Contact
        </div>
        </Link>
      </div>
    </Container>
  )
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  padding-top: 59px;
  display: flex;

  .container{
    /* max-width: 1440px; */
    display: none;
  }
  .flex{
    display: flex;
  }
  .a-center{
    align-items: center;
  }
  .j-center{
    justify-content: center;
  }
  .f-column{
    flex-direction: column;
  }
  .j-evenly{
    justify-content: space-evenly;
  }
  .j-between{
    justify-content: space-between;
  }


  
  a{
    text-decoration: none;
  }
  .logo{
    width: 220px;
    height: 42px;
    /* display: none; */
    /* margin-right: 149px; */
  }
  .link{
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .links{
    gap: 80px;
    /* width: 860px; */
    margin: 0 30px;
  }



  .btn{
    /* margin-left: 188px; */
    width: 160px;
    height: 45px;
    border-radius: 30px;
    background: #100E2D;
  }
  
  .btn-text{
    color: #FFF;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    padding: 8px 38px;
  }


//mobile navbar

.mlogo-icon1{
    position: absolute;
    z-index: 999;
    top: 2.25rem;
    left: 0.94rem;
  }
  .mlogo-icon2{
    position: absolute;
    z-index: 999;
    top: 2.19rem;
    left: 0.94rem;
  }
  .mlogo-top1{
    width: 2.5rem;
    height: 1rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #000;
    margin-bottom: 0.25rem;
  }
  .mlogo-bottom1{
    width: 1.5625rem;
    height: 1rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #000;
  }
  .mlogo-top2{
    width: 1.25rem;
    height: 0.5rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: white;
    margin-bottom: 0.25rem;
  }
  .mlogo-bottom2{
    width: 0.75rem;
    height: 0.5rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: white;
  }

  .mlogo-menu{
    width: 13.75rem;
    height: 11.375rem;
    top: 0;
    left: 0;
    border-radius: 0 0 15px 0;
    position: absolute;
    background-color: #000;
  }

  .rule{
    width: 6.875rem;
    height: 0.0625rem;
    background: #FFF;
    margin: 0.6rem 0;
  }

  a{
    color: #FFF;
  }

  @media (min-width: 1080px){
    .m-logo{
      display: none;
    }
  }
  @media (max-width: 1080px){
    .logo, .links, .btn{
      display: none;
    }
  }
  @media (max-width: 1025px){
    /* .logo, .links, .btn{
      display: none;
    } */
    /* padding-top: 54px; 
    height: 365px;  */
  }
  @media (max-width: 770px){
    /* padding-top: 54px; 
    height: 290px;  */
  }
  @media (max-width: 430px){
    /* padding-top: 24px; 
    height: 200px;  */
  }
  @media (max-width: 390px){
    /* padding-top: 10px; 
    height: 139px;  */
  }


`