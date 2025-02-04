import "../Styles/AboutUs.css";
import img1 from '../assets/images/aboutimg.jpg';

const AboutUs = () => {
  return ( 
    <div className="AboutContainer"> {/* Changed class name */}
      <img className="aboutusimg" src={img1} alt="About Us Image" /> 

      <div className="TextContent">
        <h3>About us</h3>
        <p><b>
          At KrystalNest IT Solutions Pvt. Ltd., we believe that innovation is the cornerstone of progress. 
          As a next-generation software company, we are dedicated to crafting tailored IT solutions that empower 
          businesses to thrive in a digitally-driven world.
        </b></p>
        <a href="about">
          <button type="button" className="Aboutredirect">Read More</button>
        </a>
      </div>
    </div>
  );
}

export default AboutUs;
