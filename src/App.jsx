import React, { useState, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import BackToTop from './components/ui/BackToTop/BackToTop'

// Styles
import './styles/global.css'

// Layout Components
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'

// Section Components
import Hero from './components/sections/Hero/Hero'
import About from './components/sections/About/About'
import PackagedMeals from './components/sections/PackagedMeals/PackagedMeals'
import FeaturedProducts from './components/sections/FeaturedProducts/FeaturedProducts'
import RentAChef from './components/sections/RentAChef/RentAChef'
import Testimonials from './components/sections/Testimonials/Testimonials'
import Gallery from './components/sections/Gallery/Gallery'
import Contact from './components/sections/Contact/Contact'

// Modal Components
import BookingModal from './components/modals/BookingModal/BookingModal'
import TermsModal from './components/modals/TermsModal/TermsModal'
import CartModal from './components/modals/CartModal/CartModal'

// Assets
import logoImg from './assets/south-chow-img.png'
import chefPeeImg from './assets/chef-pee-img.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

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

      <BackToTop />

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
