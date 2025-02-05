import "../Styles/OurMission.css";
import img1 from '../assets/images/aboutimg.jpg';

const AboutUs = () => {
  return ( 
    <div className="AboutContainer"> {/* Changed class name */}
      <img className="aboutusimg" src={img1} alt="About Us Image" /> 

      <div className="TextContent">
        <h3>Our Mission</h3>
        <p><b>
        Our Mission is to serve as a strategic partner to our customers from various 
        industry verticals and offer cost-effective, reliable and high-quality IT 
        solutions and services leveraging our proven methodology and tools, 
        experienced resources and thought leadership        </b></p>
        
      </div>
    </div>
  );
}

export default AboutUs;
