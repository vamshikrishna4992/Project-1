import React from "react";
import { useState } from "react";
import "../Styles/Contact.css";
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'

const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneAreaCode: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="contact-page">
      <Navbar />
      {/* Banner Section */}
      <div className="contact-banner">
        <h1>Contact us</h1>
        <p>We love to hear from you. Drop us a message if you are interested in our solutions and services.</p>
      </div>

      {/* Contact Form Section */}

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name *:</label>
            <div className="name-inputs">
              <input type="text" placeholder="First Name" className="input-field" />
              <input type="text" placeholder="Last Name" className="input-field" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Phone No *:</label>
            <div className="phone-inputs">
              <input type="text" placeholder="Area Code" className="input-field short-input" />
              <input type="text" placeholder="Number" className="input-field" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">E-mail *:</label>
            <input type="email" placeholder="Enter your email" className="input-field" />
          </div>
          <div className="form-group">
            <label className="form-label">Company *:</label>
            <input type="text" placeholder="Enter company name" className="input-field" />
          </div>
          <div className="form-group">
            <label className="form-label">Description *:</label>
            <textarea
              id="description"
              name="description"
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" required /> I'm not a robot
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.2261415706723!2d78.3858327760383!3d17.451138901021376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978f71111111%3A0xabcdefabcdef1234!2sYour%20Location!5e0!3m2!1sen!2sin!4v1707216000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: "0", borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
