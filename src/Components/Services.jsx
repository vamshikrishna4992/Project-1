
import "../Styles/Services.css";
import { Link } from "react-router-dom";
import Service1 from '../assets/images/Cloud Services.gif'
import Service2 from '../assets/images/Digital Marketing.gif'
import Service3 from '../assets/images/IT Consulting.gif'
import Serivce4 from '../assets/images/Web Development.gif'



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
      <img src= {Serivce4} alt=""/>
      <p>Software Development</p>
      <Link to="/software-development"><button className="hover-button">View</button></Link>
    </div>
    <div className="services-rows">
      <img src= {Service1} alt=""/>
      <p>Cloud Services</p>
      <Link to="/cloud-services"><button className="hover-button">View</button></Link>
    </div>
    <div className="services-rows">
      <img src= {Service3} alt=""/>
      <p>IT Staffing</p>
       <Link to="/it-staffing"><button className="hover-button">View</button></Link>
    </div>
    <div className="services-rows">
      <img src= {Service2} alt=""/>
      <p>Digital Marketing</p>
      <Link to="/digital-marketing"><button className="hover-button">View</button></Link>
    </div>
  </div>
    </div>
  );
};

export default Services;
