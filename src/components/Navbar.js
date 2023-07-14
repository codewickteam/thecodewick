import React from 'react'
import { styled } from 'styled-components'
import wicklogo from '../assets/codewick-logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Container>
      <div className="container">
        <Link to='/'><img src={wicklogo} alt="" className="logo" /></Link>

        <ul>
          <Link className='link' to='/'><li>Home</li></Link>
          <Link to='/'><li>Services</li></Link>
          <Link to='/'><li>Pricing</li></Link>
          <Link to='/'><li>Features</li></Link>
          <Link to='/'><li>FAQs</li></Link>
        </ul>

        <div className="btn">
          <div className="btn-text">
            <Link to='/'>Contact</Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  ul{
    list-style-type: none;
    text-decoration: none;
  }
`