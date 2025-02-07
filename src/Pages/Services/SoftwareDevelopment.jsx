import React, { useEffect, useRef } from "react";
import Navbar from "../../Components/Navbar";
import gsap from "gsap";
import "../../Styles/SoftwareDevelopment.css";
import Footer from "../../Components/Footer";
import WhyChoose from "../../Components/WhyChoose";
import icon1 from '../../assets/images/icon1.svg'; 
import icon2 from '../../assets/images/icon2.svg'; 
import icon3 from '../../assets/images/icon3.svg'; 
import icon4 from '../../assets/images/icon4.svg'; 
import icon5 from '../../assets/images/icon5.svg'; 
import icon6 from '../../assets/images/icon6.svg'; 

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
          {" "}
          {/* Changed class name */}
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
    { title: "Handle increased traffic and data", image: icon1 },
    { title: "Designed according to needs", image:icon2 },
    { title: "flow of goods, information, and resources", image: icon3},
    { title: "scalable solutions", image: icon4 },
    { title: "Fully responsive and optimized", image: icon5},
    {title: "We identify and fix bugs to ensure a flawless",image: icon6,},
  ];

  return (
    <>
      <div className="software-approac-contarine">
        <h2 className="software-approach-content">KrystalNest’s Approach to IT Staffing Services</h2>
        <div className="content-circle-container">
          {content.map((item, index) => (
            <div className="content-circle" key={index}>
              <img src={item.image} alt={item.title} className="circle-image" />
              <p className="circle-content">{item.title}</p>
            </div>
          ))}
        </div>
        <WhyChoose />
      </div>
    </>
  );
};

export default SoftwareDevelopment;
