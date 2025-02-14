
import  { useEffect, useRef } from "react";
import Navbar from '../../Components/Navbar';
import gsap from "gsap";
import '../../Styles/ITStaffing.css';
import WhyChoose from "../../Components/WhyChoose.jsx";
import itStaffImg from '../../assets/images/IT-STAFFING-1.png'
import Footer from '../../Components/Footer.jsx'
import icon1 from '../../assets/images/Apporches/IT STAFFING/co-worker_18030490.png'
import icon2 from '../../assets/images/Apporches/IT STAFFING/connection_18030520.png'
import icon3 from '../../assets/images/Apporches/IT STAFFING/team-management_13450629.png'
import icon4 from '../../assets/images/Apporches/IT STAFFING/team_1401932.png'
import icon5 from '../../assets/images/Apporches/IT STAFFING/approved_942833.png'
import icon6 from '../../assets/images/Apporches/IT STAFFING/teamwork_1401936.png'
import Email from "../../Components/Email.jsx";

const ItStaffing = () => {
  const textRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -100, rotateY: 90 },
      { opacity: 1, x: 0, rotateY: 0, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, x: -100, rotateY: 90 },
      { opacity: 1, x: 0, rotateY: 0, duration: 1.8, ease: "power3.out" }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 2, ease: "elastic.out(1, 0.5)" }
    );
  }, []);
  return (
    <>
      <div className="ITStaffing-services-container">
        <Navbar />
        <div className="ITStaffing-services-content">
          <h1 ref={textRef} className="ITStaffing-animated-text">IT Staffing Services</h1>
          <p ref={descriptionRef} className="ITStaffing-description">
            Connecting your business with the best IT talent.  
            Empowering teams with top-tier professionals for success. 
          </p>
        </div>
      </div>
      <Unlock />
      <Approach />
      <Email/>
      <Footer />
    </>
  );
};


const Unlock = () => {

  return (
    <>

      <div className="ITStaffing-sec-coontainer">
        <div className="ITStaffing-head1">
          <h2>Connecting <span>Top Talent</span> with Leading Technology</h2>
        </div>
        <div className="AboutContainer"> {/* Changed class name */}
          <img className="aboutusimg" src={itStaffImg} alt="About Us Image" />

          <div className="TextContent">

            <p>
              With todays fast-changing technological landscape, the right talent is whats going to take your business up the ladder. At KrystalNest, we specialize in helping organizations connect with top IT professionals to drive innovation, optimize operations, and deliver impactful results. Whether you need temporary staff, permanent hires, or specialized technical expertise, we are here to help you build the dream team that aligns with your unique goals and business needs.
              Its focused on knowing what challenges your business is facing, and then finding the appropriate professionals that have the right kind of skills and experience to meet your needs. Whether its IT strategy and software development or infrastructure management and cybersecurity, we present you with the best options to take you and your business forward.
            </p>

          </div>
        </div>
      </div>
    </>
  )
};

const Approach = () => {
  const itstaffingapproaches = [
    { icon: icon1, content: 'Access to Top Talent ' ,hoverContent:'Gain access to highly skilled professionals who bring expertise, innovation, and efficiency to your business' },
    { icon: icon2, content: 'Fast and Effective Hiring',hoverContent:'Quickly find top talent to grow your business efficiently' },
    { icon: icon3, content: 'Technical IT Roles ',hoverContent:'Expert professionals in development, cybersecurity, cloud computing, and more to power your business.' },
    { icon: icon4, content: 'Managed Staffing Services',hoverContent:'End-to-end staffing solutions to find, hire, and manage top talent for your business' },
    { icon: icon5, content: 'Contract- to- Hire',hoverContent:'Flexible hiring that allows you to evaluate talent before making a full-time commitment.' },
    { icon: icon6, content: 'Cost-Effective results',hoverContent:'Optimize hiring and staffing while reducing costs for maximum efficiency. '  }

  ]

  return (
    <>
      <div className="cloud-approach-main-container">
        <h2 className="cloud-head2">KrystalNest’s Approach to IT Staffing Services</h2>
        <div className="cloud-approach-container">
          {itstaffingapproaches.map((approach, index) => (
            <div className="cloud-approach-sub" key={index}>
              <img src={`${approach.icon}`} alt={approach.icon} />
              <p>{approach.content}</p>
              <div className="cloud-hover-content">
              <p>{approach.hoverContent}</p>
            </div>
              
            </div>
          ))}
        </div>
        <WhyChoose />
      </div>
    </>
  )
}

export default ItStaffing;
