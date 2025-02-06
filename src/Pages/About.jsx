import '../Styles/About.css';
import ReactPlayer from 'react-player';
import Footer from '../Components/Footer.jsx';
import Navbar from '../Components/Navbar.jsx';
import vedio from '../assets/images/Messaging.mp4';
import Fundamental from '../assets/images/6-steps-creative-business-infographics-design-template.png';

// Team Images
import team1 from '../assets/images/Group 1000003006.png';
import team2 from '../assets/images/Group 1000003007.png';
import team3 from '../assets/images/Group 1000003008.png';
import team4 from '../assets/images/Group 1000003009.png';
import team5 from '../assets/images/Group 1000003010.png';

// Team Members Array (Only Images)
const teamMembers = [team1, team2, team3, team4, team5];

const About = () => {
  return (
    <div className='About-Container'>
      <Navbar />

      {/* Banner Section */}
      <div className='Banner'>
      <div className="sub-banner">
      <div className="line"></div>
       <div className="Banner-Content">
          <h1>Revolutionize Your <br /> Business Practices.</h1>
          <h4>Design. Develop. Digital</h4>
        </div>
      </div>
      </div>

      {/* Digital Transformation Section */}
      <div className='Digital'>
        <h3>Spearheading The <span>Digital Transformation</span>.</h3>
        <p>
          KrystalNest IT Solutions Pvt. Ltd. is a visionary startup software company founded in December 2024 by the dynamic entrepreneur 
          Mr. Vamshi Krishna Goud, who serves as the Founder and CEO. Based in the thriving tech hub of Madhapur, Hyderabad, India, KrystalNest is 
          designed to bridge the gap between traditional IT services and modern, innovative software solutions. With a passion for delivering 
          cutting-edge digital transformations, the company is poised to become a leading name in the global IT landscape.
        </p>
      </div>

      {/* Video Section */}
      <div className='VideoSection'>
        <ReactPlayer url={vedio} controls={true} className="react-player" width="100%" height="500px" />
      </div>

      {/* Fundamental Principles Section */}
      <div className='Fundamental'>
        <div className="Fundamental-Content">
          <h3>Fundamental Principles</h3>
          <p>
            At KrystalNest IT Solutions Pvt. Ltd., we believe that innovation is the cornerstone of progress. As a next-generation software company, 
            we are dedicated to crafting tailored IT solutions that empower businesses to thrive in a digitally-driven world. Though we are new to 
            the industry, our vision is clear: to become a trusted technology partner for enterprises seeking agility, scalability, and innovation 
            in their operations.
          </p>
        </div>
        <img src={Fundamental} alt="Fundamental Principles" />
      </div>

      {/* Our Team Section - Only Images */}
      <div className='Our-Team'>
        <h3>Our Team</h3>
        <div className="OurTeamContainer">
          <div className="TeamGrid">
            {teamMembers.map((image, index) => (
              <div className="TeamCard" key={index}>
                <img src={image} alt={`Team Member ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

<Footer />
    </div>
  );
};

export default About;
