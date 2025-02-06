import Footer from "../../Components/Footer"
import Navbar from "../../Components/Navbar"
import Project from "../../Components/Project";
import '../../Styles/Project1.css';


const Project1 = () => {
  return (
    <div>
      <Navbar/>
      <div className="contact-banner">
        <h1>Our Projects</h1>
        <p>"Turning Ideas into Reality with Code."</p>
      </div>
      <Project/>
       <Footer/>
    </div>
  )
}

export default Project1
