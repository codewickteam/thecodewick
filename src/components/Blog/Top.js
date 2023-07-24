import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export default function Top() {
  return (
    <Container>
        <div className="top flex a-center flex-col">
            <div className="header">
                Stories and Interviews
            </div>
            <div className="text">
                Subscribe to learn about new product features, the latest in technology, and updates.
            </div>
            <div className="mail flex a-center j-between">
                <div>
                    <input className='email' type="email" placeholder='Enter your mail'/>
                </div>
                <div>
                    <Link to='/'><button className='button'>Subscribe</button></Link>
                </div>
            </div>
        </div>
    </Container>
  )
}

const Container=styled.div`
margin: 224px 0 240px 0;
    .flex{
        display: flex;
    }
    .a-center{
        align-items: center;
    }
    .j-center{
        justify-content: center;
    }
    .j-between{
        justify-content: space-between;
    }
    .flex-col{
        flex-direction: column;
    }
    .flex-row{
        flex-direction: row;
    }
    .header{
        color: #000;
        text-align: center;
        font-family: Poppins;
        font-size: 6rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 35px;
    }
    .text{
        color: #000;
        text-align: center;
        font-family: Poppins;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        opacity: 0.699999988079071;
        margin-bottom: 94px;
        max-width:950px;
        text-align:center;
    }
    .mail{
        border: 10px;
        border-radius: 20px;
        border: 2px solid #000;
        /* border-color: 0.3199999928474426; */
        padding: 6px;
        width: 679px;
        height: 75px;
        position: relative;
        /* z-index: -1; */

    }
    .email{
        /* margin-right: 310px; */
        color: #000;
        text-align: left;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        width: 480px;
        height: 70px;
        border-radius: 10px;
        margin-left: 14px;
        opacity: 0.4000000059604645;
        /* position: absolute;
        z-index: -1; */
        border: none;
    }
    input:focus{
        outline: none;
    } 
    .button{
        width: 169px;
        height: 60px;
        border-radius: 20px;
        border: 2px solid rgba(0, 0, 0, 0.20);
        background: linear-gradient(270deg, #800 0%, #0E1118 100%);
        /* position: absolute;
        z-index: -1; */
        color: #FFF;
        text-align: center;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    
  @media (max-width: 430px){
    .header{
        font-size: 3rem;
        margin-bottom: 35px;
    }
    .text{
        font-size: 16px;
        max-width:950px;
    }
    .mail{
        padding: 3px;
        width: 300px;
        height: 45px;


    }
    .email{
        font-size: 16px;
        max-width: 180px;
        max-height: 70px;
        margin-left: 14px;
    }
    .button{
        max-width: 95px;
        max-height: 40px;
        font-size: 16px;
    }
  }
 `
