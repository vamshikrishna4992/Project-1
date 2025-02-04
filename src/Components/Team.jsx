import React from "react";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn, FaMailBulk, FaEnvelope } from "react-icons/fa";
import "../Styles/Team.css";
import teamMember from '../assets/images/team-member.jpg'

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
  // const navigate = useNavigate();
  return (
    <section className="team-section">
      <h2 className="team-heading">Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
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
          </div>
        ))}
      </div>

      <button className="team-button" onClick={() => navigate("/teams")}>
        View All Team Members
      </button>
    </section>
  );
};

export default Team;
