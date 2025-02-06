import React, { useEffect, useRef } from "react";
import Navbar from '../../Components/Navbar';
import gsap from "gsap";
import '../../Styles/DigitalMarketing.css';
import WhyChoose from "../../Components/WhyChoose.jsx";
import Footer from "../../Components/Footer.jsx";

const DigitalMarketing = () => {

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
    <div className="dg-services-container">
      <Navbar />
      <div className="dg-services-content">
        <h1 ref={textRef} className="dg-animated-text">Digital Marketing</h1>
        <p ref={descriptionRef} className="cloud-description">
        " In today's fast-changing online world, success is only possible with a robust digital presence. "
        </p>
      </div>
    </div>
    <DigUnlock/>
    <DgApproach/>
    <Footer/>
   </>
  )
}


const DigUnlock = ()=>{
  return(
    <>
          
     <div className="cloud-sec-coontainer">
      <div className="cloud-head1">
        <h2>Driving Your Brand, Amplifying <span>Your Reach</span></h2>
      </div>
     <div className="AboutContainer"> {/* Changed class name */}
          <img className="aboutusimg" src='dg-info.png' alt="About Us Image" /> 

          <div className="TextContent">
            
            <p>
            KrystalNest is here to make your business shine digitally in this modern world of digital marketing. By optimizing the entire potential of modern digital marketing strategies, it has become an imperative to establish a stronger presence in this fast-paced and highly competitive online environment. Our team of marketers and data analysts work collaboratively to design and execute results-driven, strategic plans for you to drive high-quality traffic, enhance brand visibility, and ultimately convert prospects into loyal, long-term customers.
           
            </p>
            
          </div>
        </div>
     </div>
    </>
  )
};

const DgApproach = ()=>{
  const  dgapproaches = [
   {icon:'approach4',content:'Implement robust data backup and recovery strategies'},
   {icon:'approach2',content:'Encrypt data at rest and in transit'},
   {icon:'approach5',content:'Continuously monitor and adapt to evolving threats'},
   {icon:'approach6',content:'Leverage cloud provider security features'},
   {icon:'approch2',content:'Regularly update and patch systems'},
   {icon:'approach3',content:'Implement cloud security monitoring and logging'}
 
  ]
  
   return (
     <>
     <div className="dg-approach-main-container">
       <h2 className="dg-head2">KrystalNest’s Approach to Digital Marketing</h2>
     <div className="dg-approach-container">
     {dgapproaches.map((approach, index) => (
        <div className="dg-approach-sub" key={index}>
         <img src={`/${approach.icon}.png`} alt={approach.icon} />
         <p>{approach.content}</p>
        </div>
     ))}
     </div>
     <WhyChoose/>
     </div>
     </>
   )
 }

export default DigitalMarketing;
