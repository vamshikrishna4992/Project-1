import React, { useState } from "react";
import approach4 from "../../assets/images/approach4.png";
import approach2 from "../../assets/images/approach2.png";
import approach1 from "../../assets/images/approach1.png";
import approach3 from "../../assets/images/approach3.png";
import approach5 from "../../assets/images/approach5.png";
import approach6 from "../../assets/images/approach6.png";
import "../../Styles/CloudServices.css";

const Approach = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cloudapproaches = [
    {
      icon: approach4,
      content: "Implement robust data backup and recovery strategies",
      hoverContent:
        "Ensure continuous data availability with secure backups and quick recovery solutions.",
    },
    {
      icon: approach2,
      content: "Encrypt data at rest and in transit",
      hoverContent:
        "Protect sensitive information by using advanced encryption methods for data security.",
    },
    {
      icon: approach5,
      content: "Continuously monitor and adapt to evolving threats",
      hoverContent:
        "Stay ahead of security risks with real-time monitoring and adaptive threat detection.",
    },
    {
      icon: approach6,
      content: "Leverage cloud provider security features",
      hoverContent:
        "Enhance protection using built-in security measures from trusted cloud providers.",
    },
    {
      icon: approach1,
      content: "Regularly update and patch systems",
      hoverContent:
        "Keep your infrastructure secure by applying the latest updates and security patches.",
    },
    {
      icon: approach3,
      content: "Implement cloud security monitoring and logging",
      hoverContent:
        "Track and analyze security events to detect and respond to potential threats effectively.",
    },
  ];

  return (
    <div className="cloud-approach-main-container">
      <h2 className="cloud-head2">KrystalNest’s Approach to Cloud Services</h2>
      <div className="cloud-approach-container">
        {cloudapproaches.map((approach, index) => (
          <div
            className="cloud-approach-sub"
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={approach.icon} alt="approach-icon" />
            <p>{approach.content}</p>
            {hoveredIndex === index && (
              <div className="cloud-hover-content">{approach.hoverContent}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Approach;
