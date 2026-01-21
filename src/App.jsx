import React, { useState, useEffect } from 'react'
import './LandingPage.css'
import MealCard from './MealCard'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaBars,
  FaTimes,
} from 'react-icons/fa'
import FeaturedProducts from './FeaturedProducts'
import Testimonials from './Testimonials'
import logoImg from './assets/south-chow-img.png'
import chefPeeImg from './assets/chef-pee-img.jpg'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  return (
    <div className="sc-container">
      <nav className="sc-navbar">
        <img src={logoImg} alt="South Chow Logo" className="sc-logo" />
        <div
          className="sc-mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`sc-nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <div className="sc-dropdown">
            <button className="sc-dropbtn">Services ▾</button>
            <div className="sc-dropdown-content">
              <a href="#chef" onClick={() => setIsMenuOpen(false)}>
                Rent-A-Chef
              </a>
              <a href="#chef" onClick={() => setIsMenuOpen(false)}>
                Order a La Carte
              </a>
              <a href="#packaged" onClick={() => setIsMenuOpen(false)}>
                Order Packaged Meals
              </a>
            </div>
          </div>
          <a href="#featured" onClick={() => setIsMenuOpen(false)}>
            Featured
          </a>
          <a href="#reviews" onClick={() => setIsMenuOpen(false)}>
            Reviews
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </div>
      </nav>

      <section id="home" className="sc-hero">
        <div className="sc-hero-overlay">
          <h1>CULINARY EXCELLENCE</h1>
          <p>Experience restaurant quality in the comfort of your home.</p>
          <div className="sc-hero-btns">
            <button className="btn-primary">Order Meals</button>
            <button className="btn-secondary">Book Chef Pee</button>
          </div>
        </div>
      </section>

      <section id="about" className="sc-section sc-light">
        <div className="sc-content-wrapper">
          <h2>Meet Chef Sonia</h2>
          <p className="sc-subtitle">EXECUTIVE CHEF & CREATIVE DIRECTOR</p>
          <div className="sc-split-layout">
            <div
              className="sc-image-block"
              style={{ backgroundImage: `url(${chefPeeImg})` }}
            ></div>
            <div className="sc-text-block">
              <p>
                A vision of multi-talented excellence, Chef Sonia Praise
                Ben-Woko transitions seamlessly from the global stage as Miss
                Ideal Nigeria 2019 to the culinary arts. With a profound passion
                for orchestrating savoury delights, she infuses every dish with
                the same elegance and creativity that defined her modeling
                career, delivering a dining experience that is both
                sophisticated and soul-satisfying.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="packaged" className="sc-section sc-dark">
        <div className="sc-content-wrapper">
          <h2>Packaged Meals</h2>
          <p className="sc-subtitle">COOKED & UNCOOKED DELICACIES</p>
          <div className="sc-grid">
            <MealCard
              imageClass="sc-img-ready"
              title="Ready to Eat"
              description="Gourmet meals prepared by our chefs, ready to heat and serve for an instant fine dining experience."
              popular={true}
            />
            <MealCard
              imageClass="sc-img-cook"
              title="Ready to Cook"
              description="Prepped ingredients and professional instructions for a fresh, interactive home-cooked masterpiece."
            />
          </div>
        </div>
      </section>

      <section id="featured" className="sc-section sc-light">
        <div className="sc-content-wrapper">
          <h2>Featured Products</h2>
          <p className="sc-subtitle">CUSTOMER FAVORITES</p>
          <FeaturedProducts />
        </div>
      </section>

      <section id="chef" className="sc-section sc-dark">
        <div className="sc-content-wrapper">
          <h2>Rent a Chef</h2>
          <p className="sc-subtitle">A LA CARTE HOME DINING</p>
          <div className="sc-split-layout">
            <div className="sc-text-block">
              <p>
                Transform your dinner party into an unforgettable event. Our
                "Rent a Chef" service brings professional culinary talent
                directly to your kitchen to prepare exquisite a la carte menus.
              </p>
              <button className="btn-primary">Inquire Now</button>
            </div>
            <div className="sc-image-block"></div>
          </div>
        </div>
      </section>

      <section id="reviews" className="sc-section sc-light">
        <div className="sc-content-wrapper">
          <h2>Customer Reviews</h2>
          <p className="sc-subtitle">WHAT PEOPLE ARE SAYING</p>
          <Testimonials />
        </div>
      </section>

      <section id="contact" className="sc-section sc-dark">
        <div className="sc-content-wrapper">
          <h2>Contact Us</h2>
          <p className="sc-subtitle">GET IN TOUCH</p>
          <form className="sc-contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="sc-footer">
        <div className="sc-social-icons">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} South Chow. All rights reserved.
        </p>
      </footer>

      {showBackToTop && (
        <button className="sc-back-to-top" onClick={scrollToTop}>
          &#8679;
        </button>
      )}
    </div>
  )
}

export default App
