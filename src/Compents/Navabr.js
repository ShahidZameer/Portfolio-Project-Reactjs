import React, { useEffect, useState } from 'react';
import Button from './Button';
import '../CompentsCss/Navbar.css';  
import './Animation';  
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import {NavLink} from 'react-router-dom' 
import { ButtonStyle } from '../Function/Buttonstyle' 
import '../Nav-Slider/slider.css'






 
function Navbar(props) { 
  const [isOpen, setIsOpen] = useState(false);
  const button = ButtonStyle()
  const CloseNav = () => { 
    setIsOpen(!isOpen);
  }; 
 function Slider(){

  const handleToggle = () => {
    setIsOpen(!isOpen);


  }};

  Slider()
  const [isHovered, setIsHovered] = useState(false);
 

  return ( 
    <div>
        <div className="Navbar ">   
         
          <ul className={`ul-list slider-content ${isOpen ? "Close" : "Open"}`} >   
          <img src="../Images/Nav-Logo2.png"/>  
            <NavLink 
            className={isHovered ? 'border-active': 'hover-inactive'} onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)} to='/'>HOME</NavLink>
            <NavLink    
            to='/Services'>SERVICES</NavLink>
            {/* <NavLink to='/Portfolio'>PORTFOLIO</NavLink>  */}
            <NavLink to='/Blog'>BLOG</NavLink>     
            <NavLink to='/Contact'>CONTACT</NavLink>   
          </ul> 
          <div className="combine">
          <i className="fa-solid fa-bars"onClick={CloseNav}> {isOpen ? "Close" : "Open"}</i>
            <button className="fa-solid fa-phone"></button>
            {button && <Button buttonStyle="btn--outline">CONTACT US</Button>} 
          </div>
        </div>  
        <div> 
        </div> 
      </div>
    

  );
}
export default Navbar
