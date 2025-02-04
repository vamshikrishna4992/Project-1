
import './App.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
// import Services from './Pages/Services/Services.jsx';
import Project1 from './Pages/Projects/Project1.jsx';
import Footer from './Components/Footer.jsx';

import SoftwareDevelopment from './Pages/Services/SoftwareDevelopment.jsx';
import ItStaffing from './Pages/Services/ItStaffing.jsx';
import CloudServices from './Pages/Services/CloudServices.jsx';
import DigitalMarketing from './Pages/Services/DigitalMarketing.jsx';



function App() {
  return (
    <>
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/services' element={<Services/>}/> */}
        <Route path='/Projects' element={<Project1/>}/>
        <Route path='/contact' element={<Contact/>}/>

        {/* submenu routes  */}
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/it-staffing" element={<ItStaffing />} />
        <Route path="/services/cloud-services" element={<CloudServices />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App;
