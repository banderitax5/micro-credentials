import App from '../App.jsx'
import Navbar from '../components/Navbar.jsx'
import MainContent from '../components/MainContent.jsx'
import Footer from '../components/Footer.jsx'


function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  )
}

export default Home
