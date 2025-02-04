import "../Styles/AboutUs.css";
import img1 from '../assets/images/aboutimg.jpg'

const AboutUs = () => {
  return ( 
    
  <div className="Conatiner">

    <img className="aboutusimg" src={img1} alt=" image" /> 

    <div className="TextContent">
    <h3>About us</h3>
    <p><b>At KrystalNest IT Solutions Pvt. Ltd., we believe  that innovation is the cornerstone of progress. As a next-generation software company, <br />we are dedicated to crafting tailored IT solutions that empower businesses to thrive in a digitally- riven world. 
   </b> </p>
   <a href="about">
  <button type="button" className="Aboutredirect">Read More</button>  <br /></a>
  </div>
  </div>
  
  )
}

export default AboutUs;
    
