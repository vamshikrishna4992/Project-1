import React from 'react';
import '../Styles/Project.css';

function Project() {
  return (
    <div className="project-container">
    <div className="project-content">
     <h1>Our <span>Project</span></h1>
     <p> 
          As a next-generation software company, we are dedicated to crafting tailored IT solutions that empower 
          businesses to thrive in a digitally-driven world.</p>
     </div>
    <div className="project-card">
    <div className="project-rows">
      <img src="project1.gif" alt=""/>
      <h5>Gps Tracking</h5>
      <button className="hover-button">View</button>
    </div>
    <div className="project-rows">
      <img src="project2.gif" alt=""/>
      <h5>E-commerce</h5>
      <button className="hover-button">View</button>
    </div>
    <div className="project-rows">
      <img src="project3.gif" alt=""/>
      <h5>web Application</h5>
      <button className="hover-button">View</button>
    </div>
    <div className="project-rows">
      <img src="project4.gif" alt=""/>
      <h5>organic website</h5>
      <button className="hover-button">View</button>
    </div>
  </div>
  </div>

  )
}

export default Project
