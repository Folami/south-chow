import React, { useState, useEffect } from 'react'

// Styles
import './styles/LandingPage.css'

// Layout Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Section Components
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import PackagedMeals from './components/sections/PackagedMeals'
import FeaturedProducts from './components/sections/FeaturedProducts'
import RentAChef from './components/sections/RentAChef'
import Testimonials from './components/sections/Testimonials'
import Gallery from './components/sections/Gallery'
import Contact from './components/sections/Contact'

// Modal Components
import BookingModal from './components/modals/BookingModal'
import TermsModal from './components/modals/TermsModal'

// Assets
import logoImg from './assets/south-chow-img.png'
import chefPeeImg from './assets/chef-pee-img.jpg'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  }

  return (
    <div className="sc-container">
      <Navbar
        logoImg={logoImg}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <Hero heroSettings={heroSettings} />

      <About chefPeeImg={chefPeeImg} />

      <PackagedMeals />

      <section id="featured" className="sc-section sc-light">
        <div className="sc-content-wrapper">
          <h2>Featured Products</h2>
          <p className="sc-subtitle">CUSTOMER FAVORITES</p>
          <FeaturedProducts />
        </div>
      </section>

      <RentAChef
        setIsBookingModalOpen={setIsBookingModalOpen}
        setIsTermsModalOpen={setIsTermsModalOpen}
      />

      <section id="reviews" className="sc-section sc-light">
        <div className="sc-content-wrapper">
          <h2>Customer Reviews</h2>
          <p className="sc-subtitle">WHAT PEOPLE ARE SAYING</p>
          <Testimonials />
        </div>
      </section>

      <section id="gallery" className="sc-section sc-dark">
        <div className="sc-content-wrapper">
          <h2>Gallery</h2>
          <p className="sc-subtitle">CULINARY MASTERPIECES</p>
          <Gallery />
        </div>
      </section>

      <Contact />

      <Footer />

      {showBackToTop && (
        <button className="sc-back-to-top" onClick={scrollToTop}>
          &#8679;
        </button>
      )}

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
    </div>
  )
}

export default App
