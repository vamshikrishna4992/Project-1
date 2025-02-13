import React, { useEffect, useRef } from "react";
import Navbar from '../../Components/Navbar';
import gsap from "gsap";
import '../../Styles/CloudServices.css';
import WhyChoose from "../../Components/WhyChoose.jsx";
import Footer from "../../Components/Footer.jsx";
import approach4 from '../../assets/images/Apporches/CLOUD SERVICES/server_13806863.png';
import approach2 from '../../assets/images/Apporches/CLOUD SERVICES/gear_10214626.png'
import approach1 from '../../assets/images/Apporches/CLOUD SERVICES/carbon--ibm-cloud-internet-services.png'
import approach3 from '../../assets/images/Apporches/CLOUD SERVICES/repair_8500751.png'
import approach5 from '../../assets/images/Apporches/CLOUD SERVICES/services_12249556.png'
import approach6 from '../../assets/images/Apporches/CLOUD SERVICES/web_8500931.png';
import cloudInfo from '../../assets/images/cloud-info.png';
import Email from "../../Components/Email.jsx";


const CloudServices = () => {
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
      <div className="cloud-services-container">
        <Navbar />
        <div className="cloud-services-content">
          <h1 ref={textRef} className="cloud-animated-text">Cloud Services</h1>
          <p ref={descriptionRef} className="cloud-description">
          "In today’s fast-paced digital world, businesses need agile, scalable, and secure solutions to stay ahead. "</p>
        </div>
      </div>
      <UnlockCloud />
      <CloudApproach  />
      <Email/>
      <Footer />
    </>
  );
};

const UnlockCloud = () => {
return (
  <>
    <div className="cloud-sec-coontainer">
      <div className="cloud-head1">
        <h2>
          Unlocking the Power of <span>Cloud Services</span>
        </h2>
      </div>
      <div className="AboutCloudContainer">
        <img
          className="aboutusimg"
          src={cloudInfo}
          alt="About Us Image"
        />
        <div className="CloudTextContent">
          <p>
          Cloud hosting is the practice of hosting websites, applications, and other resources on virtual
              servers that draw computing resources from a vast network of physical servers. This model
              provides several advantages, including increased reliability, scalability, and cost-effectiveness.
              Cloud hosting services are categorized into Infrastructure as a Service (IaaS), Platform as a
              Service (PaaS), and Software as a Service (SaaS), each offering different levels of control and
              customization.
              In the fast-paced and dynamic world of technology, businesses are constantly seeking ways to enhance
              their agility, scalability, and overall efficiency. One transformative solution that has gained immense
          </p>
        </div>
      </div>
    </div>
  </>
);
};

const CloudApproach = () => {
const content = [
  {hoverContent:'Ensure continuous data availability with secure backups and quick recovery solutions.',title: "Implement robust data backup and recovery strategies", image: approach4 },
  {hoverContent: 'Protect sensitive information by using advanced encryption methods for data security.', title: "Encrypt data at rest and in transit", image:approach2 },
  {hoverContent: 'Stay ahead of security risks with real-time monitoring and adaptive threat detection.',title: "Continuously monitor and adapt to evolving threats", image: approach5},
  {hoverContent: 'Enhance protection using built-in security measures from trusted cloud providers.',title: "Leverage cloud provider security features", image: approach6 },
  {hoverContent: 'Keep your infrastructure secure by applying the latest updates and security patches.',title:'Regularly update and patch systems', image: approach1},
  {hoverContent: 'Track and analyze security events to detect and respond to potential threats effectively',title: "Implement cloud security monitoring and logging",image: approach3,},
];

return (
  <>
  <div className="cloud-approach-contariner">
      <h2 className="cloud-approach-content">KrystalNest’s Approach to Cloud Services</h2>
      <div className="cloud-circle-container">
        {content.map((item, index) => (
          <div className="cloud-circle" key={index}>
            <img src={item.image} alt={item.title} className="cloud-image" />
            <p className="cloud-title">{item.title}</p>
            <div className="cloud-hover-content">
            <p>{item.hoverContent}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
    <div className="why">
    <WhyChoose />
    </div>
  </>
  )
      
}

export default CloudServices;
