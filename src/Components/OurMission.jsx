import { motion } from "framer-motion";
import "../Styles/OurMission.css";
import vedio from "../assets/images/Messaging.mp4";
import ReactPlayer from "react-player";

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
      <div className='VideoSection'>
              <ReactPlayer url={vedio} controls={true} className="react-player"  />
            </div>

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
          
            Our Mission is to serve as a strategic partner to our customers from
            various industry verticals and offer cost-effective, reliable, and
            high-quality IT solutions and services leveraging our proven
            methodology and tools, experienced resources, and thought
            leadership.
          
        </p>
      </motion.div>
    </motion.div>
  );
};

export default OurMission;
