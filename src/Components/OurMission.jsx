import "../Styles/OurMission.css";
import vedio from "../assets/images/Messaging.mp4";
import ReactPlayer from "react-player";

const OurMission = () => {
  return (
    <div className="AboutContainer">
      {/* Text on the left */}
      <div className="TextContent">
        <h3>
          <span className="white-text">Our</span>{" "}
          <span className="gold-text">Mission</span>
        </h3>
        <p>
          Our Mission is to serve as a strategic partner to our customers from
          various industry verticals and offer cost-effective, reliable, and
          high-quality IT solutions and services leveraging our proven
          methodology and tools, experienced resources, and thought leadership.
        </p>
      </div>

      {/* Video on the right */}
      <div className="VideoSection">
        <ReactPlayer
          url={vedio}
          controls={true}
          className="react-player"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default OurMission;
