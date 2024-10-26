import React from 'react'
import '../CompentsCss/About.css' 
import Button from './Button';
import '../Compents/StarAnimation'
import { ButtonStyle } from '../Function/Buttonstyle' 
import {NavLink} from 'react-router-dom' 

export default function About() {
  return (
    <>
    <div className='container-section'>
      <div className="About-Container">
        <div className="wrap">
      <p className='fas fa-circle-notch'> <span>About Us</span></p>
      <h1>HELLO !</h1>
      <p>Hey there! I'm MEHAK , the creative force behind [Digital Mehak]. As 
a digital marketer, my mission is simple: to turn your digital dreams 
into reality. We're not just another marketing agency; we're your 
partners in growth, your digital strategists, and your brand's biggest 
fans.</p>
      </div>
      <div className="customer-foucs">

        <div className="flexbox"> 
            <span className='profile-set'><i aria-hidden="true" class="fas fa-user-cog"></i></span>
            <h1>Customer-centric Focus</h1>
            <p>Our goal is to enable businesses to reach new heights through personalized digital
 strategies.We stay up-to-date with the latest technologies and trends to keep your brand
 competitive and relevant</p>
            </div>

      <div className="flexbox">
            <span className='profile-set'><i aria-hidden="true" class="fas fa-user-cog"></i></span>
            <h1>Professional Support</h1>
            <p>As we grow, we continue to improve our processes and invest in 
state-of-the-art tools and resources to provide our digital 
marketing partners with top-notch services.</p>
        </div>
</div>
        </div>   
        <div className="portfolio-banner">
          <img src='../Images/Porfolio.jp'/> 
          <div className="button">
    
       <a href='file:///C:/Users/wellcome%20Coders/Documents/Digital%20Mehak%20logo_20240902_191155_0000.pdf '>
        <Button buttonStyle="btn--outline">PREIVEW CV</Button>
      
        </a> 
      
          </div> 
        </div>   
    </div>
   
    </>
    
  )
}
