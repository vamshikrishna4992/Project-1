import '../../Styles/About-bio.css';
import Navbar from '../../Components/Navbar.jsx';
import Footer from '../../Components/Footer.jsx';
import Ceo from '../../assets/images/5.jpg';
import { FaEnvelope, FaLinkedinIn, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

function VinayKumar() {
    return (
        <div className='Main-About'>
            <Navbar />
            <div className="bio-banner">
                <h1 className="bio-title">Vinay Kumar</h1>
            </div>

            {/* Main Content */}
            <div className="About-Main-Content-Bio">
                <div className='About-Container-Bio'>
                    <div className="Bio-Img-Card">
                        <img src={Ceo} alt="Vinay Kumar" />
                    </div>

                    <div className='bio-name-Container'>
                        <h1>Vinay Kumar</h1>
                        <h3>Operational Manager</h3>
                        <p className='Bio-Icons'>
                            <a href="https://www.linkedin.com/" target='_blank'>
                                <FaLinkedinIn className='Bio-icon' /></a>
                            <a href="mailto:VinayKumar@gmail.com" target='_blank'>
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
                   
                </div>

                {/* CEO Contact Details */}
                <div className='bio-details'>
                    <div>
                    <FaPhone /> 8923898349
                    </div>  
                    <div>
                    <FaMapMarkedAlt /> Ayyappa Society, Madhapur, Hyderabad, 500081.
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default VinayKumar;
