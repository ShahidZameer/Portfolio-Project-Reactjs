import React, { useState } from 'react'
import '../CompentsCss/Elementor.css' 
import '../Compents/Animation' 
import FadeInOnScroll from '../Compents/Animate' 


export default function Elementor() {
  const [width,setwith] = useState()
  const fadeRef = FadeInOnScroll()

  
  const setColor = {
    color:'rgb(218, 209, 209)'
  }
  const brightness ={
    filter:'filter: drop-shadow(2px 4px 6px black);'
  }
  return (
    <div className='element-container'ref={fadeRef}> 
        <div className="elementor"> 
        <img src="../Images/strategy.png"width="80"/>
        <h2>Tailor-made Strategies</h2>
        <p style={setColor}>Trust delivers custom strategies to boost online presence and business growth, ensuring lasting success..</p>
        </div>
        <div className="elementor">
        <img src="../Images/support-1.png"width="80"style={brightness}/>
        <h2>Experienced </h2>
        <p>Digital Mehak Tailored solutions to boost your online presence and drive business growth.</p>
        </div>  
 
        <div className="elementor">
        <img src="../Images/ribbon.png"width="80"/> 
        <h2>Quality Assurance</h2>
        <p style={setColor}>We take quality seriously. It is essential to our workflow, ensuring high-quality deliverables.</p>
        </div>
        
</div> 
  )
}
