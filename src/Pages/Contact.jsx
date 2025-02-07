import React, { useState } from "react";
import "../Styles/Contact.css";
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';

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
    console.log(formData);
  };

  return (
    <div className="contact-page">
      <Navbar />
      {/* Banner Section */}
      <div className="contact-banner">
        <h1 className="banner-title">Contact us</h1>
        <p className="banner-description">We love to hear from you. Drop us a message if you are interested in our solutions and services.</p>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name :</label>
            <div className="name-inputs">
              <input type="text" placeholder="First Name" className="input-field" maxLength={30} required />
              <input type="text" placeholder="Last Name" className="input-field" maxLength={30} required />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Phone No :</label>
            <div className="phone-inputs">
              <input type="text" placeholder="Area Code" className="input-field short-input" maxLength={5} required />
              <input type="text" placeholder="Number" className="input-field" maxLength={15} pattern="[0-9]{10}" required />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">E-mail :</label>
            <input type="email" placeholder="Enter your email" className="input-field" maxLength={50} required />
          </div>
          <div className="form-group">
            <label className="form-label">Company :</label>
            <input type="text" placeholder="Enter company name" className="input-field" maxLength={40} required />
          </div>
          <div className="form-group">
            <label className="form-label">Description :</label>
            <textarea
              id="description"
              name="description"
              className="input-field"
              maxLength={250}
              required
            />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" required /> I'm not a robot
            </label>
          </div>
          <button className="contact-button" type="submit">Submit</button>
        </form>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d237.88633029827835!2d78.38578039928169!3d17.451035231445648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1738913420232!5m2!1sen!2sin"
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
