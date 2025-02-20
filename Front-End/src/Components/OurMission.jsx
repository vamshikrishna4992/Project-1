// import React from "react";
import Video from "../assets/images/Messaging.mp4"
import "../Styles/OurMission.css"

const OurMission = () => {
  return (
    <section className="our-mission">
      <h2 className="mission-header">Our <span> Mission</span></h2>
      <div className="mission-content">
        <div className="text-content">
          <p>
          Our Mission is to serve as a strategic partner to our customers from
          various industry verticals and offer cost-effective, reliable, and
          high-quality IT solutions and services leveraging our proven
          methodology and tools, experienced resources, and thought leadership
          </p>
        </div>
        <div className="video-section">
          <video controls>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
