import React from 'react'
import { styled } from 'styled-components'
import img from './cardImage/Rectangle 64.png'
// import Bottom from './Bottom'

export default function BottomCard() {
  return (
    <Container>
      <div className="card">
                    <div className="img">
                        <img src={img} alt="" />
                    </div>

                    <div className="text flex flex-col">
                        <div className="author">
                            Lorem ipsum - 19 Aug 2023
                        </div>
                        <div className="title">
                            A Relentless Pursuit of Perfection In Website Design
                        </div>
                        <div className="content">
                            “I began to notice that there was a sharp contrast between well made....”
                        </div>
                        <div className="buttons">
                            <div className="btn">
                                <div className="btn-text">
                                    Design
                                </div>
                            </div>
                            <div className="btn">
                                <div className="btn-text">
                                    Research
                                </div>
                            </div>

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

    .card{
        max-width:30vw;
        padding:0.4rem;       
    }

    img{
        margin-bottom: 25px;
        max-width:29vw;
        max-height:20rem;
    }
   
    .author{
        color: #000;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 13px;
        opacity: 0.699999988079071;
    }

    .title{
        color: #000;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        margin-bottom: 13px;
        line-height: normal;
    }

    .content{
        color: #000;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        max-width: 483px;
        margin-bottom: 25px;
        opacity: 0.6000000238418579;
    }

    .buttons{
        margin-left: 18px;
    }
    
    .btn{
        border-radius: 20px;
        border: 1px solid #000;
        margin-left: 18px;
    }

    .btn-text{
        color: #000;
        font-family: Poppins;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

@media (max-width: 430px){

    .card{
        max-width:300px;
        padding:0.4rem;       
    }

    img{
        margin-bottom: 25px;
        max-width:17.4rem;
        max-height:20rem;
    }
   
    .author{
        font-size: 12px;
    }

    .title{
        font-size: 15px;
    }

    .content{
        font-size: 13px;
        max-width: 303px;
    }

    


    .btn-text{
        font-size: 10px;
    }
  }
`
