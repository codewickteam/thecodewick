import React from 'react'
import { styled } from 'styled-components'
// import image from './cardImage/Rectangle 48.png'
import img from './cardImage/Rectangle 49.png'

export default function RightCard() {
  return (
    <RCard>
      <div className="mini-card">
            <div className="card flex">
                <div className="img">
                    <img src={img} alt="" />
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
        </div>
    </RCard>
  )
}


const RCard=styled.div`
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

    img{
        width: 336px;
        height: 200px;
        margin-right: 26px;
        margin-bottom: 35px;
    }

    .card{
        border: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .author{
        color: #000;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        opacity: 0.699999988079071;
        margin-bottom: 24px;
    }

    .title{
        color: #000;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        margin-bottom: 13px;
        line-height: normal;
    }

    .content{
        color: #000;
        font-family: Poppins;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 24px;
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
    @media (max-width: 430px) {
        margin-bottom: 20px;
     .card{
        justify-content:center;
        max-width:300px;
     }   
        img{
        max-width: 250px;
        max-height: 170px;
        margin-right: 26px;
        margin-bottom: 15px;
        margin-left: -20px;
    }

    .author{
        font-size: 10px;
        margin-bottom: 20px;
    }

    .title{
        font-size: 12px;
        max-width:300px;
        margin-bottom: 13px;
    }

    .content{
        font-size: 10px;
        margin-bottom: 16px;
        max-width:300px;
    }

    }
`
