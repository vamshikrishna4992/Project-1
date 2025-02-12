import  { useEffect, useRef } from "react";
import gsap from 'gsap'

import '../Styles/About.css';
import ReactPlayer from 'react-player';
import Footer from '../Components/Footer.jsx';
import Navbar from '../Components/Navbar.jsx';
import vedio from '../assets/images/Messaging.mp4';
// import BannerImg from '../assets/images/wmremove-transforme.jpeg'
import Fundamental from '../assets/images/6-steps-creative-business-infographics-design-template.png';

// Data Array
import image1 from '../assets/images/4.jpg';
import image2 from '../assets/images/3.jpg';
import image3 from '../assets/images/5.jpg';
import image4 from '../assets/images/1.jpg';
import image5 from '../assets/images/2.jpg';



const About = () => {
  const textRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -100, rotateY: 90 },
      { opacity: 1, x: 0, rotateY: 0, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, x: -100, rotateY: 90 },
      { opacity: 1, x: 0, rotateY: 0, duration: 1.8, ease: "power3.out" }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 2, ease: "elastic.out(1, 0.5)" }
    );
  }, []);
  return (
   <>
     <Navbar/>
    <div className="about-main-container">
      <div className="about-hero-section">
      <div className="line"></div>
    <div>
    <h1>Revolutionize Your <br /> Business Practices.</h1>
    <p>Design. Develop. Digital. IT Staffing</p>
    </div>
      </div>
    </div>
    <div className='About-Container'>

      {/* Digital Transformation Section */}
      <div className='Digital'>
        <h3>Spearheading The <span>Digital Transformation</span>.</h3>
        <p>
        KrystalNest IT Solutions Pvt. Ltd. is a visionary startup software company founded in November 2024 by the dynamic entrepreneur Mr. Vamshi Krishna Goud,, who serves as the Founder and CEO. Based in the thriving tech hub of Madhapur, Hyderabad, India, KrystalNest is designed to bridge the gap between traditional IT services and modern, innovative software solutions. With a passion for delivering cutting-edge digital transformations, the company is poised to become a leading name in the global IT landscape.
        </p>
      </div>

      {/* Video Section */}
      <div className='VideoSection'>
        <ReactPlayer url={vedio} controls={true} className="react-player" width="100%" height="500px" />
      </div>

      {/* Fundamental Principles Section */}
      <div className='Fundamental-Banner'>
      <h3>Fundamental Principles</h3>
      </div>
      <div className='Fundamental'>

      <img src={Fundamental} alt="Fundamental Principles" />
        <div className="Fundamental-Content">
          <p>
            At KrystalNest IT Solutions Pvt. Ltd., we believe that innovation is the cornerstone of progress. As a next-generation software company, 
            we are dedicated to crafting tailored IT solutions that empower businesses to thrive in a digitally-driven world. Though we are new to 
            the industry, our vision is clear: to become a trusted technology partner for enterprises seeking agility, scalability, and innovation 
            in their operations.
          </p>
        </div>
        
      </div>

      {/* Our Team Section - Only Images */}
      <div className="Our-Team">
        <h2>Our Team</h2> 
        
             <div className="main-container">

        <div className="container">
        
          <div className="image-container">
            <img src={image1}  />
          </div>
          <div className="content">
            <p>Vamshi Krishna</p>
            <h3> CEO & Founder</h3>
            
          </div>

          

        </div>
        <div className="container">
        
          <div className="image-container">
            <img src={image2}  />
          </div>
          <div className="content">
            <p>Uday Kiran </p>
            <h3>Co-Founder</h3>
            
          </div>

          

        </div>
        <div className="container">
        
        <div className="image-container">
          <img src={image3}  />
        </div>
        <div className="content">
        <p>Vinay Kumar</p>
          <h3>Operational Manager</h3>
          
          
        </div>

        

      </div>
      <div className="container">
        
        <div className="image-container">
          <img src={image4}  />
        </div>
        <div className="content">
        <p>Lahari</p>
          <h3>Human Resources</h3>
          
          
        </div>
      </div>
      <div className="container">
        <div className="image-container">
          <img src={image5}  />
        </div>
        <div className="content">
        <p>Bhavana</p>
          <h3>Human Resources</h3>
          
          
        </div>

        

      </div>

    </div>
    </div>

     

<Footer />
    </div>
   </>
  );
};

export default About;
