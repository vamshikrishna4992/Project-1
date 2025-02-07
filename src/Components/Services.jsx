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
      <h5>Software Development</h5>
      <Link to="/software-development"><button className="hover-button">View</button></Link>
    </div>
    <div className="services-rows">
      <img src="service2.gif" alt=""/>
      <h5>Cloud Services</h5>
      <Link to="/cloud-services"><button className="hover-button">View</button></Link>
    </div>
    <div className="services-rows">
      <img src="service3.gif" alt=""/>
      <h5>IT Staffing</h5>
       <Link to="/it-staffing"><button className="hover-button">View</button></Link>
    </div>
    <div className="services-rows">
      <img src="project4.gif" alt=""/>
      <h5>Digital Marketing</h5>
      <Link to="/digital-marketing"><button className="hover-button">View</button></Link>
    </div>
  </div>
    </div>
  );
};

export default Services;
