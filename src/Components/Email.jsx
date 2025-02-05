import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/Email.css";

function Email() {
  const [email, setEmail] = useState("");

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle subscribe button click
  const handleSubscribe = () => {
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } else {
      toast.success("Subscription successful!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      setEmail(""); // Clear input after success
    }
  };

  return (
    <div className="email-container">
      <h2>Want to know more about us?</h2>

      <div className="email-input-container">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
        />
        <button onClick={handleSubscribe} className="subscribe-button">
          Subscribe
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Email;
