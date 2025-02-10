
import '../Styles/project.css';
import { Link } from 'react-router-dom';
import Project1 from '../assets/images/dm-devops-tools-20-top-tools-for-successful-devops-768x498 3.png';
import Project2 from '../assets/images/full-stack-web-development 3.png'
import Project3 from '../assets/images/what is python 2088x125213.png'

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
      <img src = {Project2} alt=''/>
      <h5>A smart IoT-based home
        automation system
        for modern living.</h5>
      <Link to="/project1"><button>know more</button></Link>
    </div>
    <div className='card-rows'>
      <img src = {Project1} alt=''/>
      <h5>An innovative AI-driven solution
        for predictive analytics
        in healthcare.</h5>
      <Link to="/project1"><button>know more</button></Link>
    </div>
    <div className='card-rows'>
      <img src = {Project3} alt=''/>
      <h5> A cloud-based e-commerce
          platform tailored for
          small businesses.</h5>
      <Link to="/project1"><button>know more</button></Link>
    </div>
    
    </div>
   </div>
   
   </div>
  )
}

export default Project

