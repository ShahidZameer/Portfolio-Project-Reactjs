import React, { useEffect, useState } from 'react';
import Button from './Button'; 
import '../CompentsCss/Navbar.css';   
import '../CompentsCss/Ourservices.css';  
import '../CompentsCss/Ani.css';
import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';
import { ButtonStyle } from '../Function/Buttonstyle' 
export default function Ourservices() {
  const button = ButtonStyle()
      useEffect(() => {
        // This runs after the component mounts and the canvas is available
        neonCursor({
          el: document.getElementById('hero'), // Reference the canvas element by its id
          shaderPoints: 16,
          curvePoints: 80,
          curveLerp: 0.5,
          radius1: 4,
          radius2: 30,
          velocityTreshold: 10,
          sleepRadiusX: 100,
          sleepRadiusY: 100,
          sleepTimeCoefX: 0.0025,
          sleepTimeCoefY: 0.0025
        });
      }, []); 
     
    
    
  return (

    <div>
      <div className="img-container">
      <div className="services-container">
        <h1 className='style-text'>ELEVATE YOUR DIGITAL BUSINESS</h1>
      <p className='fas fa-circle-notch'> <span>OUR SERVICES</span></p>
      <h1 className='h1'>Crafting digital solutions tailored to your unique business needs.</h1>
      <div id="hero"> 
      </div>       
      <div className="sbox-container">
        <div id="min-box"className="Active-border Active-shadow"> 
            <div className="left">
            <img src='../images/Digital.png'width="50"/>
            </div>
            <h2>Digital Marketing</h2>
            <p>
            As a digital marketer, I help companies to draw in more customers and boost their online visibility by using creative digital marketing strategies. I use the most recent techniques and trends to expand your brand's reach and improve interaction, from email marketing campaigns to social media management and SEO.</p>
            <h5 className='h5'>SERVICES DETAILS</h5>
        </div>
        <div id="min-box">
        <div className="left">
        <img src='../images/Digital.png'width="50"/>
            </div> 
        <h2>Content Writing</h2>
            <p>With my content writing services, you can publish engaging and interesting content for blog, website,product description.value specific niche,content offer thoroughly researched,SEO-optimized,engagement and conversion.</p>
            <h5 className='h5'>SERVICES DETAILS</h5>
        </div> 
        <div id="min-box">
        <div className="left">
        <img src='../images/socail.png'width="50"/>
            </div>
        <h2>Web Development</h2>
            <p>Unlock the power of your online presence with my professional web development services. Specialized in development of custom responsive websites that not only look great but also rank better in search engines, I offer much more e-commerce set-ups and unique features specific to your business objectives.
            </p>
            <h5 className='h5'>SERVICES DETAILS</h5>
        </div> 
        <div id="min-box"className="Active-border">
        <div className="left">
        <img src='../images/Graphic.png'width="50"/>
            </div>
        <h2>Graphic Designer</h2>
            <p>
            I used innovative ideas when designing graphics to give them a unique appearance. Whether you need a logo and branding, brochures, or social media graphics, I can create engaging and memorable content suitable for your company.</p>
            <h5 className='h5'>SERVICES DETAILS</h5>
        </div>
      </div>
      </div> 
      </div>  
      </div>
  )
}
