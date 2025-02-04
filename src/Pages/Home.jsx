import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import AboutUs from '../Components/AboutUs.jsx'
import WhyUs from '../Components/WhyUs.jsx'
const Home = () => {
  return (
    <>
      <div>
        <h1>This is Home page</h1>
        <AboutUs />
       <WhyUs/>
      </div>
    </>
  )
}

export default Home
