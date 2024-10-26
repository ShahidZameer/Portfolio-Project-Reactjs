import React from 'react'
import '../CompentsCss/Footer.css'
import {NavLink} from 'react-router-dom' 

export default function Footer() {
  return (
    
  <footer className="footer">
  <div className="footer-container">
    <div className="footer-info">
      <div className="footer-contact"> 
        <div className="footer-600px">
        <div className="footer-width"style={{width:400}}>
        <img src="../Images/Nav-Logo2.png" alt="Logo"/>
        <p className='p'>Morbi leo risus, porta ac vestibulum at ero nulla non metus auctor fringilla.</p>
        <div className="footer-social">
      <a href="https://www.facebook.com/profile.php?id=61554617545156&ref=xav_ig_profile_web" target="_blank">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.linkedin.com/in/digitalmehak?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank"> 
      <i class="fa-brands fa-linkedin"></i> 
      </a>
      <a href="https://www.instagram.com/digital_mehakk/" target="_blank">
        <i className="fab fa-instagram"></i>
      </a>
    </div> 
    </div>
    </div>
      </div> 
      <div className="footer-links">
        <h4>OUR SERVICES</h4>
        <ul>
          <div className="icon">
          <i className="fa-solid fa-video"></i>
          <li><a href="#">Video Editing</a></li>
          </div>
          <div className="icon">
          <i className="fa-solid fa-paint-roller"></i>
          <li><a href="#">Graphic Designing</a></li>
          </div>
          <div className="icon">
          <i className="fa-solid fa-globe"></i>
          <li><a href="#">Web Development</a></li>
          </div>
          <div className="icon">
          <i class="fa-solid fa-desktop"></i>
          <li><a href="#">Digital Marketing</a></li>
          </div> 
        </ul> 
      </div>
      <div className="footer-links">
        <h4>OUICK LINKS</h4>
        <ul>
          <div className="icon">
          <i class="fa-solid fa-house"></i>
          <NavLink to='/'><li >HOME</li></NavLink>
          </div>
          <div className="icon">
          <i class="fa-solid fa-briefcase"></i>
          <NavLink to='/'><li href="#">SERVICES</li></NavLink>
          </div>
          <div className="icon">
          <i class="fa-regular fa-user"></i>
          <NavLink to='/'><li>BLOG</li></NavLink>
          </div>
          <div className="icon"> 
          <i class="fa-solid fa-phone"></i>
          <NavLink to='/'><li >CONTACT</li></NavLink>
          </div> 
        </ul> 
      </div>
      <div className="footer-contact">
        <h4>CONTACT INFO</h4>
        <div className="icon"> 
        <i className="fa-solid fa-phone"></i>
        <p>(92) 316-2742121</p>
        </div>
        <div className="icon">
        <i className="fa-solid fa-envelope"></i>
        <p>digitalmehak@gmail.com
        </p>
        </div>
        <div className="icon">
        <i class="fa-solid fa-location-dot"></i>
        <p>Pakistan Country</p>
        </div>
        </div>

      
      {/* <div className="footer-subscribe">
        <h4>Subscribe to Our Newsletter</h4>
        <p>Sign up for my newsletter to get latest updates. Do not worry, we will never spam you.</p>
        <div className="btn-flex">
          <input type="email" placeholder="Email Address" className="subscribe-input"/>
          <button type="submit" className="subscribe-button"><i className="fa-solid fa-envelope"></i></button>
        </div> */}
      <div>

      </div>
      </div>
    </div>
<hr></hr>
    <p className="footer-copyright">&copy; 2024 Your Company. All Rights Reserved.</p>
</footer>
  )
}
