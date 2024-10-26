import React from 'react'
import {useState,useEffect} from 'react'; 

import '../CompentsCss/EFoam.css'; // Importing the CSS
import Button from './Button';


const ContactForm = () => {

  const [button, setButton] = useState(true);
 
  const RedColor = { 
    color: '#ec3737', 

  };
  const borderRed= {
    borderBottom:'3px solid red'
  }
  

  const offWhite = { 
    color: '#b3b4b5'
  };

  // Function to handle button visibility based on window width
  const showButton = () => { 
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', showButton);
    showButton(); // Initial check

    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []); 
  
  return (
    <>
    <div className="container">
      {/* Left Section with Heading and Paragraph */}
      <div className="left-content">
        <h1><span style={{color:'#ec3737'}}>Grow to your business with a</span> Digital Marketing</h1>
        <p>
        We then combine these techniques with our cohesive process to 
        help you acquire clients and guide them to success.
        </p>
      <div className="talk-expert">
       <div className="flex-expert">
        <img src="../Images/Profile.jp" alt="" />
        <div className="diver">
        <h3>Mehak Naz</h3>
        <h4>TALK TO AN EXPERT</h4> 
        </div>
       </div>
      </div>
      </div>

      <div className="right-content"> 
        <form className="contact-form">
          <div className="input-flex">
          <div className="flex">
          <label htmlFor="name">NAME:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="phone">PHONE NUMBER:</label>
          <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="flex">
          <label htmlFor="name">EMAIL ADDRESS:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="service">REQUIRED SERVICES:</label>
          <select id="service" name="service" required>
            <option value="web-development">Digital Marketing</option>
            <option value="app-development">Socail Media Managment</option>
            <option value="seo">Graphic Designing</option>
          </select>

          </div>
          </div>
          <div className="full-width">
       <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" rows="7" required></textarea>
          {button && <Button buttonStyle="btn--outline">GET FREE QUOTE</Button>} 
          </div>
        </form>
        </div>
      </div> 
    </>
  );
};

export default ContactForm;
