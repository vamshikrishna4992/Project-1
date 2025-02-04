
import './App.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import Services from './Pages/Services/Services.jsx';
import Project1 from './Pages/Projects/Project1.jsx';
import Footer from './Components/Footer.jsx';
import AboutUs from './Components/AboutUs.jsx'
import WhyUs from './Components/WhyUs.jsx';



function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/Projects' element={<Project1/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App;
