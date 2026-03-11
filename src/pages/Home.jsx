import Navbar from '../components/Navbar.jsx'
import Carousel from '../components/Carousel.jsx'
import Footer from '../components/Footer.jsx'
import PageWrapper from '../components/PageWrapper.jsx'


function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <PageWrapper>
        <Navbar />
        <Carousel />
        <Footer />
      </PageWrapper>
    </div>
  )
}

export default Home
