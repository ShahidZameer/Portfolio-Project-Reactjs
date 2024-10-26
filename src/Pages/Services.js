import React from 'react'
import '../PageCss/Services.css'  
import Button from '../Compents/Button';
import { ButtonStyle } from '../Function/Buttonstyle'  
import '../Compents/Animation' 
import FadeInOnScroll from '../Compents/Animate' 

 
export default function Services() {
const fadeRef = FadeInOnScroll()
  const button = ButtonStyle()
  return (
    <div>
      {/* Banner Section */}
      <header className="banner"> 
        <div className="banner-content">
          <h1>Our Services</h1>
        </div>
      </header>

      {/* Services Section */} 
      <div className="services">
        <div className="img-section">
        <h1 className='font-text'>DIGITAL SERVICES THAT DELIVER RESULTS</h1>
        <div className="service-container" >
      
      
          <div className="sbox-container" ref={fadeRef}>
        <div id="big-box"className="Active-border Active-shadow"> 
            <div className="left">
            <img src='../images/Digital.png'width="50"/>
            </div>
            <h2>Digital Marketing</h2>
            <p>As a digital marketer, I help companies to draw in more customers and boost their online visibility by using creative digital marketing strategies. I use the most recent techniques and trends to expand your brand's reach and improve interaction, from email marketing campaigns to social media management and SEO

            </p>
            <h5 className='h5'>SERVICES DETAILS</h5>
        </div>
        <div id="big-box">
        <div className="left">
        <img src='../images/socail.png'width="50"/>
            </div>
        <h2>Socail Media</h2>
            <p>With my content writing services, you can publish engaging and interesting content for blog, website,product description.value specific niche,content offer thoroughly researched,SEO-optimized,engagement and conversion</p>
            <h5 className='h5'>SERVICES DETAILS</h5>
        </div>
        <div id="big-box">
        <div className="left">
        <img src='../images/Digital.png'width="50"/>
            </div>
        <h2>Content Writing</h2>
            <p>Unlock the power of your online presence with my professional web development services. Specialized in development of custom responsive websites that not only look great but also rank better in search engines, I offer much more e-commerce set-ups and unique features specific to your business objectives.</p>
            <h5 className='h5'>SERVICES DETAILS</h5>
        </div>
        <div id="big-box"className="Active-border">
        <div className="left">
        <img src='../images/Graphic.png'width="50"/>
            </div>
        <h2>Graphic Design</h2>
            <p>
            I used innovative ideas when designing graphics to give them a unique appearance. Whether you need a logo and branding, brochures, or social media graphics, I can create engaging and memorable content suitable for your company
            </p>
            <h5 className='h5'>SERVICES DETAILS</h5>
        </div>
        </div>
     
        </div>
        <div className="btn-container">
      {button && <Button buttonStyle="fas fa-paper-plane btn--outline"> GET STARTED</Button>}
      <button className="fa-solid fa-phone"></button>
      <div className="info">
      <p>(92) 3126877901</p> 
      <p>TALK TO AN EXPERT</p>
      </div> 
      </div>
        </div>
        </div>
    </div>
  )

}