
import Services from '../Components/Services.jsx';
import Header from '../Components/Header.jsx'
import OurMission from '../Components/OurMission.jsx'
import Footer from '../Components/Footer.jsx'
import Team from '../Components/Team.jsx'

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Services/>
        <OurMission/>
        <Team />
        <Footer />
      </div>
    </>
  )
}

export default Home
