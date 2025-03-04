import { useState } from "react";
import "../Styles/Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import Email from "../Components/Email.jsx";
import robotImg from '../assets/images/ImNotRobot.png'

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

  const [areaCode, setAreaCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAreaCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setAreaCode(value);
    setFormData({ ...formData, phoneAreaCode: value });
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setPhoneNumber(value);
    setFormData({ ...formData, phoneNumber: value });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const contactData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneAreaCode: areaCode,
      phoneNumber: phoneNumber,
      email: formData.email,
      companyName: formData.companyName,
      description: formData.description
    };

    try {
      const response = await fetch("https://supabase.com/dashboard/project/jblmgmqngnibmadrfedh/editor/29294?schema=public", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contactData)
      });

      if (response.ok) {
        toast.success("Response sent successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        setFormData({
          firstName: '',
          lastName: '',
          phoneAreaCode: '',
          phoneNumber: '',
          email: '',
          companyName: '',
          description: ''
        });
        setAreaCode('');
        setPhoneNumber('');
      } else {
        toast.error("Failed to send Response. Please try again.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("Error connecting to the server.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <Navbar />
      <ToastContainer/>
      <div className="contact-banner">
        <h1 className="banner-title">Contact us</h1>
        <p className="banner-description">We value your interest! Contact us to explore how our solutions and services can benefit you.</p>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name :</label>
            <div className="name-inputs">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input-field"
                maxLength={30}
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input-field"
                maxLength={30}
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Phone No :</label>
            <div className="phone-inputs">
              <input
                type="text"
                placeholder="Area Code"
                className="input-field short-input"
                maxLength={2}
                value={areaCode}
                onChange={handleAreaCodeChange}
                required
              />
              <input
                type="text"
                placeholder="Number"
                className="input-field"
                maxLength={10}
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">E-mail :</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input-field"
              maxLength={50}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Company :</label>
            <input
              type="text"
              name="companyName"
              placeholder="Enter company name"
              className="input-field"
              maxLength={40}
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Description :</label>
            <textarea
              id="description"
              name="description"
              className="input-field"
              maxLength={250}
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="captcha-container">
            <label className="captcha-label">
              <input type="checkbox" required className="captcha-checkbox" />
              I'm not a robot
            </label>
            <img src={robotImg} alt="captcha" className="captcha-image" />
          </div>

          <button className="contact-button" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

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

      <Email />
      <Footer />
    </div>
  );
};

export default Contact;
