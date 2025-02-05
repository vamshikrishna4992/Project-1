
import Services from '../Components/Services.jsx';
import Header from '../Components/Header.jsx'
import AboutUs from '../Components/AboutUs.jsx'
import Footer from '../Components/Footer.jsx'
import Team from '../Components/Team.jsx'

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Services/>
        <AboutUs/>
        <Team />
        <Footer />
      </div>
    </>
  )
}

export default Home
