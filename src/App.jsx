import React, { useState, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa'

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
import CartModal from './components/modals/CartModal'

// Assets
import logoImg from './assets/south-chow-img.png'
import chefPeeImg from './assets/chef-pee-img.jpg'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

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

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.title === product.title,
      )
      if (existingItem) {
        return prevItems.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const updateQuantity = (index, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    )
  }

  const removeFromCart = (index) => {
    const newCart = cartItems.filter((_, i) => i !== index)
    setCartItems(newCart)
  }

  const clearCart = () => {
    setCartItems([])
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

      <PackagedMeals addToCart={addToCart} />

      <section id="featured" className="sc-section sc-light">
        <div className="sc-content-wrapper">
          <h2>Featured Products</h2>
          <p className="sc-subtitle">CUSTOMER FAVORITES</p>
          <FeaturedProducts addToCart={addToCart} />
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

      <button className="sc-cart-btn" onClick={() => setIsCartOpen(true)}>
        <FaShoppingCart />
        {cartItems.length > 0 && (
          <span className="sc-cart-count">{cartItems.length}</span>
        )}
      </button>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        updateQuantity={updateQuantity}
      />
    </div>
  )
}

export default App
