import '../../Styles/About-bio.css';
import Navbar from '../../Components/Navbar.jsx';
import Footer from '../../Components/Footer.jsx';
import Ceo from '../../assets/images/2.jpg';
import { FaEnvelope, FaLinkedinIn, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

function Bhavana() {
    return (
        <div className='Main-About'>
            <Navbar />

            {/* Banner Section */}
            {/* <div className="About-banner"> */}
            {/* <div className='About-back-Container '>
        <h1 className="banner-title">Bhavana</h1>
      </div> */}
            <div className="bio-banner">
                <h1 className="bio-title">Bhavana</h1>
            </div>

            {/* Main Content */}
            <div className="About-Main-Content-Bio">
                <div className='About-Container-Bio'>
                    <div className="Bio-Img-Card">
                        <img src={Ceo} alt="Bhavana" />
                    </div>

                    <div className='bio-name-Container'>
                        <h1>Bhavana</h1>
                        <h3>Human Resources</h3>
                        <p className='Bio-Icons'>
                            <a href="https://www.linkedin.com/" target='_blank'>
                                <FaLinkedinIn className='Bio-icon' /></a>
                            <a href="mailto:Bhavana@gmail.com" target='_blank'>
                                <FaEnvelope className='Bio-icon' /></a>
                        </p>
                    </div>
                </div>
                <div className='Bio-Line'>

                </div>

                {/* CEO Information */}
                <div className='bio-information'>
                    <p>
                        Suresh is one of the founders of Kastech in 2007. He is a strong operations leader and expert on enterprise-wide IT solution deployments and implementations in the U.S. and overseas. Under his leadership, Kastech made a name for itself in delivering services across various technology platforms (including ERP, BI, Big Data, Cloud, and Analytics). Kastech adopted new technologies, proposed them to the customers, and implemented them successfully in a very cost-effective fashion.
                    </p>
                    <p>
                        As the Vice President, and COO, he manages all the technology front of the company, and gets involved in customer relations, streamlining business processes combined with adopting the best technology practices. He is the leader running the technology teams both in North America and India.
                    </p>
                    <p>
                        Suresh holds a Masters Degree in Electrical and Computer Engineering from the University of Texas San Antonio (UTSA). He loves to play tennis, cricket, and is an avid fitness enthusiast.
                    </p>
                </div>

                {/* CEO Contact Details */}
                <div className='bio-details'>
                    <FaPhone /> 8923898349   <FaMapMarkedAlt /> Ayyappa Society, Madhapur, Hyderabad, 500081.
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Bhavana;
