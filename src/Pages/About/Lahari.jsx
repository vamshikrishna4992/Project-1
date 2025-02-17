import '../../Styles/About-bio.css';
import Navbar from '../../Components/Navbar.jsx';
import Footer from '../../Components/Footer.jsx';
import Ceo from '../../assets/images/Hr-Manager-Lahari.jpg';
import { FaEnvelope, FaLinkedinIn,  FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import Email from '../../Components/Email.jsx';

function Lahari() {
    return (
        <div className='Main-About'>
            <Navbar />
            <div className="bio-banner">
                <h1 className="bio-title">Lahari</h1>
            </div>

            {/* Main Content */}
            <div className="About-Main-Content-Bio">
                <div className='About-Container-Bio'>
                    <div className="Bio-Img-Card">
                        <img src={Ceo} alt="Lahari" />
                    </div>

                    <div className='bio-name-Container'>
                        <h1>Lahari</h1>
                        <h3>Human Resources</h3>
                        <p className='Bio-Icons'>
                            <a href="https://www.linkedin.com/" target='_blank'>
                                <FaLinkedinIn className='Bio-icon' /></a>
                            <a href="mailto:vamshikrishna@gmail.com" target='_blank'>
                                <FaEnvelope className='Bio-icon' /></a>
                        </p>
                    </div>
                </div>
                <div className='Bio-Line'>

                </div>

                {/* CEO Information */}
                <div className='bio-information'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ad facilis error. Eos qui aliquid harum possimus quae labore molestias tenetur atque perferendis modi eum assumenda repudiandae exercitationem accusamus fugiat sequi ratione, voluptates nam consequuntur accusantium! Repellat enim consequatur voluptatibus nobis nisi cumque iure sed, deserunt amet illo est tenetur.
                    </p>
    
                </div>

                {/* CEO Contact Details */}
                <div className='bio-details'>
                    <div>
                    <FaPhoneAlt /> +91 8008543535
                    </div>  
                    <div>
                    <FaMapMarkerAlt /> Ayyappa Society, Madhapur, Hyderabad, 500081.
                    </div>
                </div>
            </div>
            <Email/>
            <Footer />
        </div>
    );
}

export default Lahari;
