import React from 'react'
import { styled } from 'styled-components'
import wicklogo from '../assets/codewick-logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Container>
      <div className="container flex a-center j-between">
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

      <Link className='btn flex a-center j-center' to='/'>
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
  max-width: 1728px;
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
    /* gap: 110px; */
    width: 860px;
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


`