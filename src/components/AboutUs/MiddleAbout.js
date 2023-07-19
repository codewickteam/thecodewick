import React from 'react'
import './MiddleAbout.css'
import R36 from "../../assets/Rectangle 36.png"
import R37 from "../../assets/Rectangle 37.png"
import R38 from "../../assets/Rectangle 38.png"
import R39 from "../../assets/Rectangle 39.png"

const MiddleAbout = () => {
  return (
    <div className='middle'>
      
      <div className='box_1'>
      <h1>Why Choose Us</h1>
      </div>

      <div className='box_2'>
        <h2>Thank you for considering us as your web developer. We believe that our experience, skills, and dedication sets us apart and maje the ideal choice for your project.</h2>      
      </div>

      <div className='box_3'>

        <div className='box_3_1'>
          <img src={R36} />
          <h2>Expertise</h2>
          <p>We have extensive experience in designing & developing websites for clients across various industries.</p>                    
        </div>

        <div className='box_3_1'>
        <img src={R37} />
          <h2>Attention to Detail</h2>
          <p>We have extensive experience in designing & developing websites for clients across various industries.</p>

        </div>

        <div className='box_3_1'>
        <img src={R36} />
          <h2>Communication</h2>
          <p>We have extensive experience in designing & developing websites for clients across various industries.</p>
        </div>

        <div className='box_3_1'>
        <img src={R36} />
          <h2>Customer Service</h2>
          <p>We have extensive experience in designing & developing websites for clients across various industries.</p>
        </div>
      
      </div>      
    
    </div>
  )
}

export default MiddleAbout
