import React from 'react';
import Services from '../Components/Services.jsx';
import Header from '../Components/Header.jsx'
import AboutUs from '../Components/AboutUs.jsx';
import WhyUs from '../Components/WhyUs.jsx';

const Home = () => {
  return (
    <div>
      <Header/>
      <Services/>
      <AboutUs/>
      <WhyUs/>
    </div>
  )
}

export default Home
