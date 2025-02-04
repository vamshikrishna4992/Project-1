import React from 'react'
import Header from '../Components/Header.jsx';


import Navbar from '../Components/Navbar.jsx'
import AboutUs from '../Components/AboutUs.jsx'
import WhyUs from '../Components/WhyUs.jsx'
const Home = () => {
  return (
    <>
      <div>
        <Header/>
        <AboutUs />
        <WhyUs/>
      </div>
    </>
  )
}

export default Home
