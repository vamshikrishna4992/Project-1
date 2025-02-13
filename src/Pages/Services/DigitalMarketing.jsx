import React, { useEffect, useRef } from "react";
import Navbar from '../../Components/Navbar';
import gsap from "gsap";
import '../../Styles/DigitalMarketing.css';
import WhyChoose from "../../Components/WhyChoose.jsx";
import Footer from "../../Components/Footer.jsx";
import ads from '../../assets/images/Apporches/DIGITAL MARKETING/google ads.png';
import analytics from '../../assets/images/Apporches/DIGITAL MARKETING/web_14997288.png';
import email from '../../assets/images/Apporches/DIGITAL MARKETING/content writing.png';
import graphic from '../../assets/images/Apporches/DIGITAL MARKETING/graphic-design_18062375.png';
import seo from '../../assets/images/Apporches/DIGITAL MARKETING/search engine optimization.png';
import social from '../../assets/images/Apporches/DIGITAL MARKETING/social media marketing.png';
import Email from "../../Components/Email.jsx";

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
      <DigUnlock />
      <DgApproach />
      <Email/>
      <Footer />
    </>
  )
}


const DigUnlock = () => {
  return (
    <>

      <div className="cloud-sec-coontainer">
        <div className="cloud-head1">
          <h2>Driving Your Brand, Amplifying <span>Your Reach</span></h2>
        </div>
        <div className="dgContainer"> {/* Changed class name */}
          {/* <img className="aboutusimg" src='dg-info.png' alt="About Us Image" />  */}

          <div className="TextContent">

            <p>
              KrystalNest is here to make your business shine digitally in this modern world of digital marketing. By optimizing the entire potential of modern digital marketing strategies, it has become an imperative to establish a stronger presence in this fast-paced and highly competitive online environment. Our team of marketers and data analysts work collaboratively to design and execute results-driven, strategic plans for you to drive high-quality traffic, enhance brand visibility, and ultimately convert prospects into loyal, long-term customers.We provide a wide array of digital marketing services to cater to businesses of all sizes and industries. Our solutions are designed to meet your unique goals, ensuring measurable success across every channel.

            </p>

          </div>
          <img className="dgusimg" src='dg-info.png' alt="About Us Image" />
        </div>
      </div>
    </>
  )
};

const DgApproach = () => {
  const dgapproaches = [
    { icon: ads, content: 'Google ads', hoverContent: 'Reach the right audience and grow your business with Google Ads.' },
    { icon: analytics, content: 'Google Analytics', hoverContent: 'Track, analyze, and optimize your website’s performance with real-time insights' },
    { icon: email, content: 'Email Marketing', hoverContent: 'Engage customers and boost conversions with targeted email campaigns' },
    { icon: graphic, content: 'Graphic Designing', hoverContent: 'Create stunning visuals that enhance branding and engage your audience. ' },
    { icon: seo, content: 'Search Engine Optimization', hoverContent: 'Improve website visibility and rank higher on search engines to drive organic traffic' },
    { icon: social, content: 'Social Media Marketing', hoverContent: 'Grow your brand and engage your audience through strategic social media campaigns' }

  ]

  return (
    <>
      <div className="cloud-approach-main-container">
        <h2 className="cloud-head2">KrystalNest’s Approach to Digital Marketing</h2>
        <div className="cloud-approach-container">
          {dgapproaches.map((approach, index) => (
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

export default DigitalMarketing;
