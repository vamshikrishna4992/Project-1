import React from 'react';
import Navbar from '../Components/Navbar.jsx';
import '../Styles/Contact.css'
import Footer from '../Components/Footer.jsx';
const Contact = () => {
  return (
    <>
    <div className='contact-container'>
       <Navbar/>
    </div>
  

      {/* Contact Form Section */}
      <div className="contact-content">
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Image */}
        {/* <div className="contact-image">
          <img src={contactImg} alt="Contact" />
        </div> */}
      </div>

      {/* Google Map Section */}
      <div className="contact-map">
        <iframe
          title="Madhapur Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6058274658493!2d78.38250507597304!3d17.448576983258782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91515b3cfd75%3A0x3a58f3b08d4f67b4!2sMadhapur%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1700000000000"
          allowFullScreen
          loading="lazy"
        >
        </iframe>
      </div>
      <Footer/>
    
    </>
  )
};

export default Contact;
