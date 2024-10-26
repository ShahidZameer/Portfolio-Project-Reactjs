import React, { useState } from 'react';
import '../CompentsCss/Review.css'


  const ClientSlider = () => {
    const clients = [
      {
        name: 'CEO of Us Digitize',
        review:'I am the owner of US DIGITIZE. It is my pleasure to commend Mehak Naz for her exceptional work in managing our social media marketing. Her expertise and innovative approach have greatly enhanced our digital presence. Her professionalism, creativity, and dedication have made a significant impact on our marketing efforts.Thank You',
        image: '../Images/Review-1.jpg',
      },
      { 
        name: 'CEO of Alnoor Tutors',
        review: 'Thank you so much for your exceptional work on my Facebook ads campaign! Your expertise and dedication have truly made a difference. In just 28 days, we ve seen incredible reach and engagement, all thanks to your efforts. May Allah bless you with even more success in the digital marketing field. Your skills are truly invaluable. Thank you again',
        image: '../Images/Review-2.jpg',
      },
      { 
        name: 'CEO of Zafran Kapra', 
        review: '"Mehak Naz did a fantastic job managing Zafran Kapra’s social media. Her creativity and strategy boosted our online presence, leading to increased engagement and sales. Highly recommend her Thank You.',
        image: '../Images/Review-3.jpg',
      },
      {
        name: 'CEO Europeon Institute',
        review: 'Mehak is a true professional and a master of her craft. Her digital marketing strategies have driven real results for our business.Thanks',
        image: '../Images/Review-4-.jpg',
      },
      { 
        name: 'CEO of Tech Club', 
        review: 'Mehak Naz has been an incredible asset to Tech Club, where she runs highly effective sales campaigns. Her dedication and expertise in marketing have brought impressive results to the brand',
        image: '../Images/Review-5.jpg',
      }
      
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? clients.length - 1 : prevIndex - 1

      
    );
    
  }; 
  // setTimeout(() => {
  //  goToNext()  
  // },17000); 
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === clients.length - 1 ? 0 : prevIndex + 1
      );
    }; 

  return (
      
  <>
  <div id="client-reviews" className="reviews-section">
      <div className="containerr">
        <h2 className="text-center">What Our Clients Say</h2>
        <div className="review-container">
          <button onClick={goToPrevious} id="prev" className="nav-button">&lt;</button>

          {/* Slider container to wrap all reviews */}
          <div className="review-content">
            <div
              className="slider"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              {clients.map((client, index) => (
                <div key={index} className="review" style={{ minWidth: '100%' }}>
                  <p className="client-review">"{client.review}"</p>
                  <img src={client.image} alt={`Client ${index + 1}`} width="40" />
                  <h3 className="client-name">{client.name}</h3>
                </div> 
              ))}
            </div>
          </div>

          <button id="next" onClick={goToNext} className="nav-button">&gt;</button>
        </div>
      </div>
    </div>
  </>
  
  )}
export default ClientSlider;