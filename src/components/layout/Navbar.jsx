import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = ({ logoImg, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="sc-navbar">
      <img src={logoImg} alt="South Chow Logo" className="sc-logo" />
      <div
        className={`sc-mobile-toggle ${isMenuOpen ? 'active' : ''}`}
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
        <a href="#gallery" onClick={() => setIsMenuOpen(false)}>
          Gallery
        </a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar
