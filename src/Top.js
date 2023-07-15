import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import Banner from './components/Banner'

export default function Top() {
  return (
    <Container>
      <div className="comp1 flex a-center j-center flex-col">
        <div className="title1 flex flex-col a-center">
            <span className='title1-text'>Imagine.</span>
            <span className='title1-text'>Innovate. Disrupt.</span>
        </div>

        <div className="text1">
            We help organizations harness technology & innovation to shape their visions, execute their digital transformation journeys, & reinvent their business to create exceptional, sustainable value.
        </div>

        <Link className='btn1 flex a-center j-center' to='/'>
            <div className="btn-text1">
                See Plans
            </div>
        </Link>
      </div>


      <div className="comp2">
        <div className="title2">
            Top Brands <span className='title2-span'>Trust Us</span>
        </div>

        <div className="stats2 flex j-center">
            <div className='flex flex-col a-center'>
                <div className="red-ring flex j-center a-center">
                    <div className="white-ring flex a-center j-center">
                        <div className="ring-text-left">
                            1800+
                        </div>
                    </div>
                </div>
                <div className="stats-txt">
                    Projects Launched
                </div>
            </div>

<div className="flex flex-col a-center">

            <div className="red-ring flex j-center a-center">
                <div className="white-ring flex a-center j-center">
                    <div className="ring-text-left">
                        14+
                    </div>
                </div>
            </div>
            <div className="stats-txt">
                Projects Launched
            </div>
</div>

<div className="flex flex-col a-center">

            <div className="red-ring flex j-center a-center">
                <div className="white-ring flex a-center j-center">
                    <div className="ring-text-right">
                        575+
                    </div>
                </div>
            </div>
            <div className="stats-txt">
                Projects Launched
            </div>
</div>

<div className="flex flex-col a-center">

            <div className="red-ring flex j-center a-center">
                <div className="white-ring flex a-center j-center">
                    <div className="ring-text-right">
                        92%
                    </div>
                </div>
            </div>
            <div className="stats-txt">
                Projects Launched
            </div>
</div>

        </div>



        <div className="comp3 flex a-center j-center flex-col">
            <div className="title3">
                Take a look at our <span className='span3'>portfolio</span>
            </div>

        <Banner/>

            <Link className="btn3 flex a-center j-center" to='/'>
                <div className="btn-text3">
                    Check Out
                </div>
            </Link>
        </div>

      </div>
    </Container>
  )
}


const Container = styled.div`
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

    a{
        text-decoration: none;
    }

    .comp1{
        padding-top: 195px;
    }

    .title1-text{
        color: #000;
        text-align: center;
        font-family: Poppins;
        font-size: 96px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    
    .text1{
        width: 981px;
        color: #000;
        text-align: center;
        font-family: Poppins;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-top: 26px;
        margin-bottom: 49px;
        opacity: 0.699999988079071; 
    }
    .btn1{
        width: 220px;
        height: 75px;
        border-radius: 60px;
        background: #1E1E1E;
        margin-bottom: 246px;
    }
    .btn-text1{
        color: #FFF;
        text-align: center;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    .title2{
        color: #000;
        text-align: center;
        font-family: Poppins;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 145px;
    }
    .title2-span{
        background: linear-gradient(90deg, #B20000 0%, #800 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: Poppins;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .stats2{
        gap: 155px;
        padding-bottom: 703px;
    }
    .red-ring{
        width: 300px;
        height: 300px;
        border-radius: 300px;
        opacity: 0.800000011920929;
        background: linear-gradient(180deg, #B20000 0%, #800 100%);
    }
    .white-ring{
        width: 250px;
        height: 250px;
        border-radius: 100%;
        background-color: #FFF;
    }
    .ring-text-left{
        text-align: center;
        font-family: Poppins;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        background: linear-gradient(90deg, #B20000 0%, #800 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .ring-text-right{
        text-align: center;
        font-family: Poppins;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        background: linear-gradient(180deg, #B20000 0%, #800 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .stats-txt{
        color: #000;
        text-align: center;
        font-family: Poppins;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-top: 37px;
    }

    .title3{
        color: #000;
        text-align: center;
        font-family: Poppins;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        padding-bottom: 110px;
    }
    .span3{
        background: linear-gradient(87deg, #BF0000 39.29%, #7D0000 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: Poppins;
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    .btn3{
        margin-top: 61px;
        width: 260px;
        height: 75px;
        flex-shrink: 0;
        border-radius: 60px;
        background: #1E1E1E;
    }
    .btn-text3{
        color: #FFF;
        text-align: center;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`
