import React from 'react'
import '../Services.css'
import Ellipse13 from '../assets/Ellipse 13.png'
import Ellipse14 from '../assets/Ellipse 14.png'
import Ellipse15 from '../assets/Ellipse 16.png'
import Ellipse16 from '../assets/Ellipse 16.png'
import Ellipse17 from '../assets/Ellipse 17.png'
import Ellipse18 from '../assets/Ellipse 18.png'
import Ellipse19 from '../assets/Ellipse 19.png'
function Services() {
  return (
    <div className='services'>

        <div className='Box_1'>
            <h1>What<span>we do</span> for our customers</h1>
        </div>

        <div className='Box_2'>
            <div className='Box_2_1'>
                <h1>“</h1>
            </div>
            <div className='Box_2_2'>
                <h1>We are a bunch of tech geeks who are trying to change the way how technology is implemented with the use of web3, cloud, automation, & blockchain, We constantly try to outdo ourselves & deliver the best outcomes for you.</h1>
            </div>
            <div className='Box_2_3'>
                <h1>”</h1>
            </div>
        </div>


        <div className='Box_3'>
            
            <div className='Box_3_1'>
                <h1><img src={Ellipse13} alt='img'/></h1>
                <div className='text_1'><h2>Web Development</h2></div>
            </div>

            <div className='Box_3_2'>
                <h1><img src={Ellipse14} alt='img'/></h1>
                <div className='text_1'><h2>App Development</h2></div>
            </div>
            
            <div className='Box_3_3'>
                <h1><img src={Ellipse15} alt='img'/></h1>
                <div className='text_1'><h2>Devops Development</h2></div>
            </div>
            
            <div className='Box_3_4'>
                <h1><img src={Ellipse16} alt='img'/></h1>
                <div className='text_1'><h2>E-Commerce Solutions</h2></div>
            </div>
            
            <div className='Box_3_5'>
                <h1><img src={Ellipse17} alt='img'/></h1>
                <div className='text_1'><h2>Digital Transformation</h2></div>
            </div>
            
            <div className='Box_3_6'>
                <h1><img src={Ellipse18} alt='img'/></h1>
                <div className='text_1'><h2>Cloud Computing</h2></div>
            </div>
            
            <div className='Box_3_7'>
                <h1><img src={Ellipse19} alt='img'/></h1>
                <div className='text_1'><h2>Database Management</h2></div>
            </div>

        </div>

    </div>
  )
}

export default Services
