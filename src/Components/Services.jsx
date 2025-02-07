import React from "react";
import "../Styles/Services.css";
import { Link } from "react-router-dom";



const Services = () => {


  return (
    <div className="service-container">
       <div className="service-content">
        <h1>Our <span>services</span></h1>
        <p>As a next-generation software company, we are dedicated to crafting tailored IT solutions that empower 
        businesses to thrive in a digitally-driven world.
       
        </p>
      </div> 
      
 
      <div className="services-card">
    <div className="services-rows">
      <img src="service1.gif" alt=""/>
      <p>Software Development</p>
      <Link to="/software-development"><button className="hover-button">View</button></Link>
    </div>
    <div className="services-rows">
      <img src="service2.gif" alt=""/>
      <p>Cloud Services</p>
      <Link to="/cloud-services"><button className="hover-button">View</button></Link>
    </div>
    <div className="services-rows">
      <img src="service3.gif" alt=""/>
      <p>IT Staffing</p>
       <Link to="/it-staffing"><button className="hover-button">View</button></Link>
    </div>
    <div className="services-rows">
      <img src="project4.gif" alt=""/>
      <p>Digital Marketing</p>
      <Link to="/digital-marketing"><button className="hover-button">View</button></Link>
    </div>
  </div>
    </div>
  );
};

export default Services;
