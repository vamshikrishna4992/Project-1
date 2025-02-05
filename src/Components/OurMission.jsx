import { motion } from "framer-motion";
import "../Styles/OurMission.css";
import img1 from "../assets/images/OurMission-img.png";

const OurMission = () => {
  return (
    <motion.div
      className="AboutContainer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
    >
      {/* Image with hover effect */}
      <motion.img
        className="aboutusimg"
        src={img1}
        alt="About Us Image"
        whileHover={{ scale: 1.08, rotate: 2 }}
        transition={{ duration: 0.3 }}
      />

      {/* Text Content */}
      <motion.div
        className="TextContent"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h3>
          <span className="white-text">Our</span>{" "}
          <span className="gold-text">Mission</span>
        </h3>
        <p>
          <b>
            Our Mission is to serve as a strategic partner to our customers from
            various industry verticals and offer cost-effective, reliable, and
            high-quality IT solutions and services leveraging our proven
            methodology and tools, experienced resources, and thought
            leadership.
          </b>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default OurMission;
