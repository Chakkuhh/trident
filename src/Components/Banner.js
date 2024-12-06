import React, { useEffect, useState } from 'react';
import Shangai from '../Assets/architecture.jpg';
import worker from '../Assets/construction.jpg';
import Chain from '../Assets/chain.jpg';
import modern from '../Assets/modern.jpg';
import Guiness from '../Assets/Guiness.jpg'
import './Banner.css';

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current slide index

  useEffect(() => {
    // Automatically change the slide every 2 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4); // Change to the next slide, loop back to the first slide after the last one
    }, 3000); // 2000ms = 2 seconds

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, []);

  return (
    <div className="banner-container">
      {/* First Image */}
      <div className={`banner-slide ${currentIndex === 0 ? 'active' : ''}`}>
        <img src={modern} alt="UAE Flag" />
        <div className="overlay-text first-text">
          <h2>A Beautiful Sight</h2>
          <p>We Custom Create Strong, Colourful Flags and Banners to make you Standout</p>
          <button>Flags And Banners</button>
        </div>
      </div>

      {/* Second Image */}
      <div className={`banner-slide ${currentIndex === 1 ? 'active' : ''}`}>
        <img src={worker} alt="Workers" />
        <div className="overlay-text">
          <h2>Reach New Heights</h2>
          <p>Fly your flags higher with our Monumental team And Stately team</p>
          <p>Flagpoles from 26-165m+</p>
          <button>Giant Flagpoles</button>
        </div>
      </div>

      {/* Third Image */}
      <div className={`banner-slide ${currentIndex === 2 ? 'active' : ''}`}>
        <img src={Chain} alt="Dubai" />
        <div className="overlay-text">
          <h2>Stand Strong</h2>
          <p>Experience with our high-quality aluminum, Stainless steel, and fibreglass flagpoles are the industry best</p>
          <button>STANDARD FLAGPOLES</button>
        </div>
      </div>

      {/* Fourth Image */}
      <div className={`banner-slide ${currentIndex === 3 ? 'active' : ''}`}>
        <img src={Guiness} alt="Dubai" />
        <div className="overlay-text">
          <h2>WORLD FAMOUS</h2>
          <p>The Guinness book of records has recognized Trident for its quality production of the tallest freestanding Flagpoles in the world</p>
          <button>About Us</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
