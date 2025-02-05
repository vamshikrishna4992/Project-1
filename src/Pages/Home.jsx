import React from 'react'
import Header from '../Components/Header.jsx'
import AboutUs from '../Components/AboutUs.jsx'
import Services from '../Components/Services.jsx'
import WhyUs from '../Components/WhyUs.jsx'
import Footer from '../Components/Footer.jsx'
import Email from '../Components/Email.jsx'
import Testimonials from '../Components/Testimonials.jsx'
import Project from '../Components/Project.jsx'


const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Services/>
        <Project/>
        <AboutUs/>
        <WhyUs />
        <Testimonials />
        <Email/>
        <Footer />
      </div>
    </>
  )
}

export default Home
