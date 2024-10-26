import React from 'react'
import '../PageCss/Blog.css' 

export default function Blog() {
  return (
    <div>
      
       <div className="hero-banner">
        <div className="overlay"></div>
        <div className="hero-content">
            <h1>Our Blog</h1> 
            <p>Latest insights and updates from our team</p>
        </div> 
    </div>
    <div className="blog-grid">     
    <div className="blog-box">
        <img src="../Images/Blog-1.jpg" alt="Blog Image" className="blog-image"/>
        <div className="blog-content">
            <h2 className="blog-title">Eurcopen Institute Education</h2>
            <p className="blog-description">Mehak is a true professional and a master of her craft. Her digital marketing strategies have driven real results for our business."
            Thanks.</p>
            <a href="#" className="read-more">Read More</a>
        </div>
    </div>

    <div className="blog-box">
        <img src="../Images/Blog-2.jpg" alt="Blog Image" className="blog-image"/>
        <div className="blog-content">
            <h2 className="blog-title">Blog Post Title</h2>
            <p className="blog-description">This is a brief description of the blog post. You can add any content you like here, and it will be displayed over the image with a transparent background.</p>
            <a href="#" className="read-more">Read More</a>
        </div>
    </div>  
    <div className="blog-box">
        <img src="../Images/Blog-3.jpg" alt="Blog Image" className="blog-image"/>
        <div className="blog-content">
            <h2 className="blog-title">Blog Post Title</h2>
            <p className="blog-description">This is a brief description of the blog post. You can add any content you like here, and it will be displayed over the image with a transparent background.</p>
            <a href="#" className="read-more">Read More</a>
        </div>
    </div>

        
    </div>
    </div>
  )
}
