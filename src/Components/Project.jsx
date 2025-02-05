import React from 'react';
import '../Styles/Project.css';

function Project() {
  return (
    <div className="project-container">
    <div className="project-content">
     <h1>Our <span>Project</span></h1>
     </div>
    <div className="project-card">
    <div className="project-rows">
      <img src="project1.gif" alt=""/>
      <h5>Lorem ipsum dolor sit amet.</h5>
      <button className="hover-button">View</button>
    </div>
    <div className="project-rows">
      <img src="project2.gif" alt=""/>
      <h5>Lorem ipsum dolor sit amet.</h5>
      <button className="hover-button">View</button>
    </div>
    <div className="project-rows">
      <img src="project3.gif" alt=""/>
      <h5>Lorem ipsum dolor sit amet.</h5>
      <button className="hover-button">View</button>
    </div>
    <div className="project-rows">
      <img src="project4.gif" alt=""/>
      <h5>Lorem ipsum dolor sit amet.</h5>
      <button className="hover-button">View</button>
    </div>
  </div>
  </div>

  )
}

export default Project
