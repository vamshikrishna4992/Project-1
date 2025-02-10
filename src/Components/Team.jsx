import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "../Styles/Team.css";
import teamMember from "../assets/images/team-member.jpg";
import { useNavigate } from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    name: "Vamshi Krishna",
    role: "Founder & CEO",
    image: teamMember,
    description:
      "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    social: {
      twitter: "#",
      instagram: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "Uday Kiran",
    role: "Co-Founder",
    image: teamMember,
    description:
      "The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.",
    social: {
      twitter: "#",
      instagram: "#",
      github: "#",
    },
  },
  {
    id: 3,
    name: "Bhavana",
    role: "HR",
    image: teamMember,
    description:
      "Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.",
    social: {
      twitter: "#",
      instagram: "#",
      github: "#",
    },
  },
  {
    id: 4,
    name: "Lahari",
    role: "HR Manager",
    image: teamMember,
    description:
      "Responsible for driving brand strategy and campaigns to enhance our company's visibility in the industry.",
    social: {
      twitter: "#",
      instagram: "#",
      github: "#",
    },
  },
];

const Team = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      className="team-section"
      initial={{ opacity: 0, y: 50 }} // Whole section starts hidden & slightly below
      whileInView={{ opacity: 1, y: 0 }} // Fades in & moves up when in view
      transition={{ duration: 1 }}
      viewport={{ once: true }} // Ensures it animates only once
    >
      {/* Heading Animation */}
      <motion.h2
        className="team-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Our Team
      </motion.h2>

      {/* Team Cards Animation */}
      <motion.div
        className="team-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className="team-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="team-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
              <div className="team-socials">
                <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                  <FaEnvelope />
                </a>
                <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Button Animation */}
      <motion.button
        className="team-button"
        onClick={() => navigate("/teams")}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View All Team Members
      </motion.button>
    </motion.section>
  );
};

export default Team;
