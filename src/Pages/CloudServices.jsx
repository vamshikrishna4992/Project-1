
import React, { useEffect, useRef } from "react";
import Navbar from '../Components/Navbar.jsx';
import gsap from "gsap";
import '../Styles/CloudServices.css'
import { div } from "framer-motion/client";


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
        "Empower your business with scalable and secure cloud hosting services, and we will provide 
        advanced resource management for optimal digital performance."
        </p>
      </div>
    </div>
    <Unlock/>
    {/* <Approach/> */}
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
          <img className="aboutusimg" src='/cloud-img1.png' alt="About Us Image" /> 

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
            popularity is cloud hosting. Cloud hosting services and solutions have revolutionized the way 
            organizations manage and store their data, providing a flexible and scalable infrastructure. Kastech has 
            emerged as a key player in helping businesses harness the full potential of cloud hosting.
            </p>
            
          </div>
        </div>
     </div>
    </>
  )
};

const Approach = ()=>{
 const  approaches = [
  {icon:'approch1',content:'Implement robust data backup and recovery strategies'},
  {icon:'approch1',content:'Implement robust data backup and recovery strategies'},
  {icon:'approch1',content:'Implement robust data backup and recovery strategies'},
  {icon:'approch1',content:'Implement robust data backup and recovery strategies'},
  {icon:'approch1',content:'Implement robust data backup and recovery strategies'},
  {icon:'approch1',content:'Implement robust data backup and recovery strategies'}

 ]
  return (
    <>
    <div className="cloud-approach-main-container">
    <div className="cloud-approach-container">
    {approaches.map((approach, index) => (
       <div className="cloud-approach-sub">
        <img src={`/${approach.icon}.png`} alt={approach.icon} />
        <p>{approach.content}</p>
       </div>
    ))}
    </div>
    </div>
    </>
  )
}

export default CloudServices;
