import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About/About.jsx';
import SoftwareDevelopment from './Pages/Services/SoftwareDevelopment.jsx';
import ItStaffing from './Pages/services/ItStaffing.jsx';
import DigitalMarketing from './Pages/Services/DigitalMarketing.jsx';
import CloudServices from './Pages/Services/CloudServices.jsx';
import Project1 from './Pages/Projects/Project1.jsx'
import UdayKiran from './Pages/About/UdayKiran.jsx';
import VamshiKrishna from './Pages/About/VamshiKrishna.jsx';
import VinayKumar from './Pages/About/VinayKumar.jsx';
import Lahari from './Pages/About/Lahari.jsx';
import Bhavana from './Pages/About/Bhavana.jsx';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0); 
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return null;
};

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path='/project1' element={<Project1/>} />
          {/* Submenu routes */}
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/it-staffing" element={<ItStaffing />} />
          <Route path="/cloud-services" element={<CloudServices />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path='/udaykiran' element={<UdayKiran/>} />
          <Route path='/vamshiKrishna' element={<VamshiKrishna/>} />
          <Route path='/VinayKumar' element={<VinayKumar/>} />
          <Route path='/Lahari' element={<Lahari/>} />
          <Route path='/Bhavana' element={<Bhavana/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;