
import Services from '../Components/Services.jsx';
import Header from '../Components/Header.jsx'
import OurMission from '../Components/OurMission.jsx'
import Footer from '../Components/Footer.jsx'
import Email from '../Components/Email.jsx'
import Testimonials from '../Components/Testimonials.jsx'


const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Services/>
        <OurMission />
        <Testimonials />
        <Email />
        <Footer />
      </div>
    </>
  )
}

export default Home
