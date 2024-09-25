import React from 'react'
import './herosection.css';

import img from '../assets/pic1.png'


const Hero = () => {
  return (
    <div className='hero'>
       <img className ='bgimg'src={img} alt="" />
       <div className='tag'>

        <h1 className='headertag1'>ui/ux designer</h1>
        <h1 className='headertag2'>full stack web devel 
          <span className='infity'>
            
            
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M252 128a60 60 0 0 1-102.43 42.43l-.49-.53l-59.86-67.59a36 36 0 1 0 0 51.38l3.08-3.48a12 12 0 1 1 18 15.91l-3.35 3.78l-.49.53a60 60 0 1 1 0-84.86l.49.53l59.86 67.59a36 36 0 1 0 0-51.38l-3.08 3.48a12 12 0 1 1-18-15.91l3.35-3.78l.49-.53A60 60 0 0 1 252 128"></path></svg>

            
            </span> per</h1>
            <h1 className='beta'>give life to your  website by adding  modern  technology</h1>
           

                  <div className='cta'>
              <div className='cta1'>
                  <p className='btn'> let's chat</p>

              </div>
              <div className='cta2'>
                  <p className='btn'>contact</p>

              </div>

            </div>


            </div>
      
    </div>
  )
}

export default Hero


