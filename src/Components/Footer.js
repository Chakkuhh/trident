import React from 'react'
import './Footer.css'
import wallStreet from '../Assets/wallstreet.png'
import gulf from '../Assets/gulfnews.png'
import bbc from '../Assets/bbc.png'
import national from '../Assets/national.jpg'
import abc from '../Assets/abc.png'
import union from '../Assets/utr.png'
import kj from '../Assets/kj.png'
import reutes from '../Assets/reuters.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div className='footer'>
     <div>
     <h3 class="heading">AS SEEN IN</h3>
     </div>
        <div className='images'>
            <img src={wallStreet} alt='wallstreet'/>
            <img src={gulf} alt='gulf'/>
            <img src={bbc} alt='bbc'/>
            <img src={national} alt='national'/>
            <img src={abc} alt='abc'/>
            <img src={union} alt='union'/>
            <img src={kj} alt='kj'/>
            <img src={reutes} alt='reutes'/>
        </div>
        <div className="footer-container">
      <div className="footer-content">
        <p className="copyright">© 2024 Your Company. All rights reserved.</p>
        <div className="social-media">
          <p>Follow us on:</p>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer