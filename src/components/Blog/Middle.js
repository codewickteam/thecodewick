import React from 'react'
import { styled } from 'styled-components'
import LeftCard from './LeftCard'
import RightCard from './RightCard'

export default function Middle() {
  return (
    <Container>
      <div className="top flex a-center flex-col">
            <div className="header">
                Recent Blog Posts
            </div>
            <div className="text">
                As a Web Development Service are commited to building custom website solutions that drive business towards success.
            </div>

            <div className="cardContainer flex">
                <LeftCard/>
                <div className='flex flex-col'>
                    <RightCard/>
                    <RightCard/>
                    <RightCard/>
                </div>
            </div>
        </div>
    </Container>
  )
}


const Container=styled.div`
    .flex{
        display: flex;
    }
    .a-center{
        align-items: center;
    }
    .j-center{
        justify-content: center;
    }
    .flex-col{
        flex-direction: column;
    }
    .j-left{
        justify-content: left;
    }

    .header{
        color: #000;
        text-align: center;
        font-family: Poppins;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 19px;
    }
    .text{
        color: #000;
        text-align: left;
        font-family: Poppins;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 102px;
        opacity: 0.699999988079071;
    }

    .author{
        color: #000;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        opacity: 0.699999988079071;
    }

    .title{
        color: #000;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .content{
        color: #000;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        width: 483px;
        opacity: 0.6000000238418579;
    }

    .btn{
        border-radius: 20px;
border: 1px solid #000;
    }

    .btn-text{
        color: #000;
        font-family: Poppins;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .cardContainer{
        gap: 65px;
    }
`
