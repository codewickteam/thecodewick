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
margin: 205px 0 362px 0;
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
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 75px;
        /* justify-content: space-between; */
        /* gap: 75px; */
    }

`
