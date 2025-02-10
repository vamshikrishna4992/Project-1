import React from 'react';
import '../Styles/WhyChoose.css'

const WhyChoose = () => {
    const whyChooses = [
      {q:'1. Scalability and Flexibility', a:'Our cloud services grow with your business. Scale up or down, without any hassle of physical infrastructure management, to meet your fluctuating demands.'},
      {q:'2. Cost Efficiency', a:'Offer customized services based on the unique needs of your clients rather than a one-size-fits-all approach.'},
      {q:'3. Cutting-Edge Technology', a:'Show that you re at the forefront of IT trends by offering services related to the latest advancements like AI, machine learning, IoT, and blockchain.'},
      {q:'4. Enhanced Security', a:'State-of-the-art security measures protect your data. Our cloud solutions include advanced encryption, multi-factor authentication, and regular security updates to keep your information safe.'},
      {q:'5. Seamless Collaboration', a:'Enable your team to work from anywhere, anytime. Our cloud services provide seamless access to files, applications, and tools, fostering collaboration and productivity.'},
      {q:'6. 24/7 Support', a:'Our expert team ensures round the clock technical support so that your cloud environment goes on smoothly and efficiently.'}
     ]
  return (
   <>
    <h2 className="cloud-head2">Why Choose us ?</h2>
     <div className="cloud-why-container">
        {whyChooses.map((choose, index) => (
           <div className="cloud-why-sub" key={index}>
            <h3>{choose.q}</h3>
            <p className="answer">{choose.a}</p>
           </div>
        ))}
        </div>
   </>
  )
}

export default WhyChoose
