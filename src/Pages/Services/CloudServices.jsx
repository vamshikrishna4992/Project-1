
import React, { useEffect, useRef } from "react";
import Navbar from '../../Components/Navbar';
import gsap from "gsap";
import '../../Styles/CloudServices.css';
import WhyChoose from "../../Components/WhyChoose.jsx";
import Footer from "../../Components/Footer.jsx";
import approach4 from '../../assets/images/approach4.png';
import approach2 from '../../assets/images/approach2.png'
import approach1 from '../../assets/images/approach1.png'
import approach3 from '../../assets/images/approach3.png'
import approach5 from '../../assets/images/approach5.png'
import approach6 from '../../assets/images/approach6.png';
import cloudInfo from '../../assets/images/cloud-info.png'


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
        "In today’s fast-paced digital world, businesses need agile, scalable, and secure solutions to stay ahead. "
        </p>
      </div>
    </div>
    <Unlock/>
    <Approach/>
    <Footer />
   </>
  );
};


const Unlock = ()=>{
  return(
    <>
          
     <div className="cloud-sec-coontainer">
      <div className="cloud-head1">
        <h2>Unlocking the Power of <span>Cloud Services</span></h2>
      </div>
     <div className="AboutContainer"> {/* Changed class name */}
          <img className="aboutusimg" src={cloudInfo} alt="About Us Image" /> 

          <div className="TextContent">
            
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
  )
};

const Approach = ()=>{
 const  cloudapproaches = [
  {icon:approach4,content:'Implement robust data backup and recovery strategies'},
  {icon:approach2,content:'Encrypt data at rest and in transit'},
  {icon:approach5,content:'Continuously monitor and adapt to evolving threats'},
  {icon:approach6,content:'Leverage cloud provider security features'},
  {icon:approach1,content:'Regularly update and patch systems'},
  {icon:approach3,content:'Implement cloud security monitoring and logging'}

 ]
 
  return (
    <>
    <div className="cloud-approach-main-container">
      <h2 className="cloud-head2">KrystalNest’s Approach to Cloud Services</h2>
    <div className="cloud-approach-container">
    {cloudapproaches.map((approach, index) => (
       <div className="cloud-approach-sub" key={index}>
        <img src={`${approach.icon}`} alt={approach.icon} />
        <p>{approach.content}</p>
       </div>
    ))}
    </div>
    <WhyChoose/>
    </div>
    </>
  )
}

export default CloudServices;
