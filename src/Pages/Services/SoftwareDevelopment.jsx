import React, { useEffect, useRef } from "react";
import Navbar from "../../Components/Navbar";
import gsap from "gsap";
import "../../Styles/SoftwareDevelopment.css";
import Footer from "../../Components/Footer";
import WhyChoose from "../../Components/WhyChoose";
import icon1 from '../../assets/images/Apporches/SOFTWARE DEVELOPMENT/end to end development.png'; 
import icon2 from '../../assets/images/Apporches/SOFTWARE DEVELOPMENT/ios android development.png'; 
import icon3 from '../../assets/images/Apporches/SOFTWARE DEVELOPMENT/responsive design.png'; 
import icon4 from '../../assets/images/Apporches/SOFTWARE DEVELOPMENT/scalable solutions.png'; 
import icon5 from '../../assets/images/Apporches/SOFTWARE DEVELOPMENT/Skype_Picture_2025_02_12T07_13_16_359Z.jpeg'; 
import icon6 from '../../assets/images/Apporches/SOFTWARE DEVELOPMENT/web development.png'; 

const SoftwareDevelopment = () => {
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
      <div className="software-development-container">
        <Navbar />
        <div className="software-development-content">
          <h1 ref={textRef} className="software-animated-text">
            Software Development
          </h1>
          <p ref={descriptionRef} className="software-description">
            "Empower your business with scalable and secure cloud hosting
            services, and we will provide advanced resource management for
            optimal digital performance."
          </p>
        </div>
      </div>
      <UnlockSoftware />
      <SoftwareApproach />
      <Footer />
    </>
  );
};

const UnlockSoftware = () => {
  return (
    <>
      <div className="software-sec-coontainer">
        <div className="software-head1">
          <h2>
            Unlocking the Power of <span>Software Development</span>
          </h2>
        </div>
        <div className="AboutSoftwareContainer">
          <img
            className="aboutusimg"
            src="/development-1.png"
            alt="About Us Image"
          />
          <div className="SoftwareTextContent">
            <p>
              At <i>krystalnest</i>, we are committed to transforming innovative
              ideas into robust, scalable, and high-performance software
              solutions. With years of expertise in the technology sector, Our
              team of experienced developers, designers, and consultants work
              collaboratively with you throughout the entire lifecycle—from
              initial concept through to deployment and ongoing support. Whether
              you require sophisticated web applications, intuitive mobile apps,
              enterprise-grade software, or cutting-edge cloud-based solutions,
              we leverage the latest technologies and industry best practices to
              deliver results that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const SoftwareApproach = () => {
  const content = [
<<<<<<< HEAD
    { sdhoverContent: 'Protect sensitive information by using advanced encryption methods for data security.',title: "Handle increased traffic and data", image: icon1 },
    {sdhoverContent: 'Protect sensitive information by using advanced encryption methods for data security.', title: "Designed according to needs", image:icon2 },
    { sdhoverContent: 'Protect sensitive information by using advanced encryption methods for data security.',title: "flow of goods, information, resources", image: icon3},
    { sdhoverContent: 'Protect sensitive information by using advanced encryption methods for data security.',title: "scalable solutions", image: icon4 },
    {sdhoverContent: 'Protect sensitive information by using advanced encryption methods for data security.', title: "Fully responsive and optimized", image: icon5},
    {sdhoverContent: 'Protect sensitive information by using advanced encryption methods for data security.',title: "Identify & fix bugs to ensure a flawless",image: icon6,},
=======
    { title: "End To End Devlopment", image: icon1 },
    { title: "Ios Android Devlopment", image:icon2 },
    { title: "Responsive Design", image: icon3},
    { title: "Scalable Solutions", image: icon4 },
    { title: "ERP & CRM Systems", image: icon5},
    {title: "Web Devlopment",image: icon6,},
>>>>>>> 52eb6220a55584ea0bfc9c337e447b54832bda59
  ];

  return (
    <>
    <div className="software-approach-contariner">
<<<<<<< HEAD
        <h2 className="software-approach-content">KrystalNest’s Approach to Software Development</h2>
=======
        <h2 className="software-approach-content">KrystalNest’s Approach to Software Development Services</h2>
>>>>>>> 52eb6220a55584ea0bfc9c337e447b54832bda59
        <div className="content-circle-container">
          {content.map((item, index) => (
            <div className="content-circle" key={index}>
              <img src={item.image} alt={item.title} className="circle-image" />
              <p className="circle-content">{item.title}</p>
              <div className="sd-hover-content">
              <p>{item.sdhoverContent}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
      <div className="why">
      <WhyChoose />
      </div>
    </>
  );
};


export default SoftwareDevelopment;

