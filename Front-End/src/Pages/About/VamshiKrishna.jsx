import '../../Styles/About-bio.css';
import Navbar from '../../Components/Navbar.jsx';
import Footer from '../../Components/Footer.jsx';
import Email from '../../Components/Email.jsx'
import Ceo from '../../assets/images/Ceo-1.jpg';
import { FaEnvelope, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

function VamshiKrishna() {
    return (
        <div className='Main-About'>
            <Navbar />
            <div className="bio-banner">
                <h1 className="bio-title">Vamshi Krishna</h1>
            </div>

            {/* Main Content */}
            <div className="About-Main-Content-Bio">
                <div className='About-Container-Bio'>
                    <div className="Bio-Img-Card">
                        <img src={Ceo} alt="Vamshi Krishna" />
                    </div>

                    <div className='bio-name-Container'>
                        <h1>Vamshi Krishna</h1>
                        <h3>CEO & Founder</h3>
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
                        As CEO of KrystaNest, it's an honor and a privilege to invite you to hear our vision for tomorrow. At KrystalNest, we've always held that innovation, integrity, and commitment are the very foundation of all that we do. Our path has been one established on the trust of our customers, the devotion of our people, and the relationships we've built along the way.
                        A Vision for Tomorrow
                        Looking forward, we're more dedicated than ever to breaking boundaries and forging new frontiers. The future of IT STAFFING,SOFTWARE DEVELOPMENT,COULD SERVICES,DEGITAL MARKATING is changing quickly, and at  KrystaNest,, we are ready to move with it and lead the way. We not only want to keep pace with change but shape it — whether through innovative technology, new products, or leaner, more sustainable methods that serve our customers and communities better.
                        We see a future where our solutions are deeply integrated into everyday life, enhancing productivity, sustainability, and ease for everyone who interacts with our products and services. By constantly pushing ourselves to rethink what’s possible, we’re determined to remain a trailblazer in our field.


                        Our journey has been amazing, but the best is yet to come. We are committed to creating a sustainable and socially inclusive future that brings value not only to our business but also to the world. Our people are passionate, motivated, and ready to face the challenges ahead of us.
                        With our absolute drive for excellence and innovation, we will keep creating new benchmarks, raising the bar on customer experience, and making a positive difference to the world.
                        Thank you for joining us on this thrilling ride.</p>

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
            <Email />
            <Footer />
        </div>
    );
}

export default VamshiKrishna;
