import React from 'react'
import { styled } from 'styled-components'
import image from './cardImage/Rectangle 48.png'

export default function LeftCard() {
  return (
    <LCard>
      <div className="card flex">
                    <div className="img">
                        <img src={image} alt="" />
                    </div>

                    <div className="content flex flex-col">
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
    </LCard>
  )
}


const LCard=styled.div`
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
    border: none;
   }
   .img{
    margin-bottom: 25px;
   }
    .author{
        color: #000;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        opacity: 0.699999988079071;
        margin-bottom: 13px;
    }

    .title{
        color: #000;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 13px;

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
        margin-bottom: 25px;

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

  @media (max-width: 430px){
    margin-top: 20px;
    align-items:center;
   .img{
    margin-bottom: 10px;
    img{
        width:20rem;
        max-height:15rem;

    }
   }
    .author{
        font-size: 13px;
        margin-bottom: 10px;
    }

    .title{
        font-size: 15px;
        margin-bottom: 13px;
        width:20rem;

    }

    .content{
        font-size: 13px;
        max-width:300px;
        margin-bottom: 25px;

    }
  }
`
