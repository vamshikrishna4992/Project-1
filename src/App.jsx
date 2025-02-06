
import './App.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import Project1 from './Pages/Projects/Project1.jsx';

// import SoftwareDevelopment from './Pages/SoftwareDevelopment.jsx';
// import ItStaffing from './Pages/ItStaffing.jsx';
import CloudServices from './Pages/CloudServices.jsx';
import SoftwareDevelopment from './Pages/Services/SoftwareDevelopment.jsx';
// import DigitalMarketing from './Pages/DigitalMarketing.jsx';



function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/services' element={<Services/>}/> */}
        <Route path='/Projects' element={<Project1/>}/>
        <Route path='/contact' element={<Contact/>}/>

        {/* submenu routes  */}
        {/* <Route path="/software-development" element={<SoftwareDevelopment />} /> */}
        {/* <Route path="/it-staffing" element={<ItStaffing />} /> */}
        <Route path="/cloud-services" element={<CloudServices />} />
        <Route path='/software-development' element={<SoftwareDevelopment />} />
        {/* <Route path="/digital-marketing" element={<DigitalMarketing />} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App;
