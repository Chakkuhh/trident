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



function Footer() {
  return (
    <div className='footer'>
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
    </div>
  )
}

export default Footer