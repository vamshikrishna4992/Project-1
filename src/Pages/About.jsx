import { motion } from "framer-motion";
import img2 from "../assets/images/WhyUs-img.jpg";
import OurMission from "../Components/OurMission.jsx";
import "../Styles/About.css";

const About = () => {
  return (
    <>
      <h1>This is About page</h1>
      <OurMission />

      {/* WhyUs Section */}
      <motion.div
        className="WhyUs"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Text Content (Left Side) */}
        <div className="TextContent">
          <h3><span className="white-text">Why</span> <span className="gold-text">Us</span></h3>
          <p>Your Privacy is our priority</p>
          <h4>01 Customer-Centric Focus</h4>
          <p>This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.</p>
          <h4>02 Commitment to Security</h4>
          <p>This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.</p>
          <h4>03 Transparent and Fair Practices</h4>
          <p>This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.</p>
        </div>

        {/* Image (Right Side) */}
        <motion.img
          src={img2}
          alt="Why Us"
          className="whyusimg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.div>
    </>
  );
};

export default About;
