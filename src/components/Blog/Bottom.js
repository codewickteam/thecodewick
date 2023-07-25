import React from 'react'
import { styled } from 'styled-components'
import BottomCard from './BottomCard'

export default function Bottom() {
  return (
    <Container>
      <div className="top flex a-center flex-col">
            <div className="header">
                All Blog Posts
            </div>
            <div className='cards'>
                <BottomCard/>
                <BottomCard/>
                <BottomCard/>
                <BottomCard/>
                <BottomCard/>
                <BottomCard/>
            </div>
        </div>
    </Container>
  )
}

const Container=styled.div`
margin: 205px 1rem 20rem 1rem;
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
    .header{
        color: #000;
        text-align: center;
        font-family: Poppins;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 125px;
    }

    .cards{
        display: flex;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content:center;
        flex-wrap: wrap;
        gap: 2rem;
        margin:0 1rem 0 1rem;
    }

  @media (max-width: 430px){
    margin-bottom: 155px;
    .header{
        font-size: 2rem;
        margin-bottom: 85px;
    }
  }

`
