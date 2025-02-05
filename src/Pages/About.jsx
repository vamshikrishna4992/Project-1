import '../Styles/About.css'
import ReactPlayer from 'react-player';
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import vedio from '../assets/images/Messaging.mp4'
import banner from '../assets/images/wmremove-transformed.jpeg'
import Fundamental from '../assets/images/6-steps-creative-business-infographics-design-template.png'

const About = () => {
  return (
    <div className='About-Container'>
      <Navbar />
      <div className='Banner'> 
        <img src={banner} alt="img" />     
    <h1>Revolutionize Your 
      <br />Business Practices.</h1>
      <h4>Design. Develop. Digital</h4>
      </div>
      <div className='Digital'>
        <h3>Spearheading The Digital Transformation.</h3>
        <p>KrystalNest IT Solutions Pvt. Ltd. is a visionary startup software company founded in December 2024 by the dynamic entrepreneur Mr. 
            Vamshi Krishna Goud,, who serves as the Founder and CEO. Based in the thriving tech hub of Madhapur, Hyderabad, India, KrystalNest is 
            designed to bridge the gap between traditional IT services and modern, innovative software solutions. With a passion for delivering 
            cutting edge digital transformations, the company is poised to become a leading name in the global IT landscape.</p>
      </div>
      <div className='vedio'>

        <ReactPlayer url={vedio} controls = {true}></ReactPlayer>

      </div>
      <div className='Fundamental'>
        <img src={Fundamental} alt="img" />
        <h3>
        Fundamental Principles
        </h3>
        <p>AtKrystalNest IT Solutions Pvt. Ltd.,we believe that innovation is the 
          cornerstone of progress. As a next generation software company, we 
          are dedicated to crafting tailored IT solutions that empower 
          businesses to thrive in a digitally driven world. Though we are new to 
          the industry, our vision is clear: to become a trusted technology 
          partner for enterprises seeking agility, scalability, and innovation in 
          their operations.</p>
          <div className='Our-Team'>
            <h3>Our Team</h3>
          </div>


      </div>
      <Footer />
    </div>

    
  )
}

export default About;
