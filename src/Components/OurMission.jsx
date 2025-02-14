import "../Styles/OurMission.css";
import vedio from "../assets/images/Messaging.mp4";
import ReactPlayer from "react-player";

const OurMission = () => {
  return (
    <>
    <h3 className="our-mission">
          <span className="white-text">Our</span>{" "}
          <span className="gold-text">Mission</span>
        </h3>
    <div className="Aboutcontainer">
      {/* Text on the left */}
      
      <div className="Textcontent">
        
        <div className="VideoSection">
        <ReactPlayer
          url={vedio}
          controls={true}
          className="react-player"
          width="100%"
          height="100%"
        />
      </div>
        <div className="Our-Mission-TextContent">
        <p>
          Our Mission is to serve as a strategic partner to our customers from
          various industry verticals and offer cost-effective, reliable, and
          high-quality IT solutions and services leveraging our proven
          methodology and tools, experienced resources, and thought leadership.
        </p>
        </div>
      </div>

      {/* Video on the right */}
      
    </div>
    </>
  );
};

export default OurMission;
