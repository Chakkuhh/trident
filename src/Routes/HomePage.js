import React from 'react'
import NavBar from '../Components/NavBar'
import Banner from '../Components/Banner'
import About from '../Components/About'
import Clients from '../Components/Clients'
import Vission from '../Components/Vission'
import Testimonial from '../Components/Testimonial'
import Services from '../Components/Services'
import Footer from '../Components/Footer'
import Description from '../Components/Description'
import '../../src/App.css'

function HomePage() {
  return (
    <div >
        <NavBar/>
        <Banner/>
        <Description/>
        <About/>
        {/* <Clients/>
        <Vission/>
        <Testimonial/>
        <Services/> */}
        <Footer/>
    </div>
  )
}

export default HomePage