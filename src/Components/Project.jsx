import React from 'react';
import '../Styles/project.css';
import { Link } from 'react-router-dom';

function Project() {
  return (
    <div className="project-container">
    <div className="project-content">
     <h1>Our <span>project</span></h1>
     <p>As a next-generation software company, we are dedicated to crafting tailored IT solutions that empower 
     businesses to thrive in a digitally-driven world.
    </p>
   </div> 
   <div className='project-cards'>
    <div className='cards'>
    <div className='card-rows'>
      <img src = 'card1.jpeg' alt=''/>
      <h5>Your vision our code</h5>
      <Link to="/Projects"><button>know more</button></Link>
    </div>
    <div className='card-rows'>
      <img src = 'card2.jpeg' alt=''/>
      <h5>Your business elevated by the cloud</h5>
      <Link to="/Projects"><button>know more</button></Link>
    </div>
    <div className='card-rows'>
      <img src = 'card3.jpeg' alt=''/>
      <h5>Driving your Brand,amplifying your reach </h5>
      <Link to="/Projects"><button>know more</button></Link>
    </div>
    <div className='card-rows'>
      <img src = 'card4.jpeg' alt=''/>
      <h5>Connecting top talent with leading technology</h5>
      <Link to="/Projects"><button>know more</button></Link>
    </div>
    </div>
   </div>
   
   </div>
  )
}

export default Project

