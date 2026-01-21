import React from 'react'
import Slider from 'react-slick'
import './Hero.css'

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Hero = ({ heroSettings }) => {
  return (
    <section id="home" className="sc-hero-section">
      <Slider {...heroSettings} className="sc-hero-slider">
        <div className="sc-hero-slide sc-hero-slide-1">
          <div className="sc-hero-overlay">
            <div className="sc-hero-brand-container">
              <div className="sc-brand-main">
                <span className="sc-text-south">South</span>
                <span className="sc-text-chow">Chow</span>
              </div>
              <div className="sc-brand-sub">
                <span className="sc-text-by">by</span>
                <span className="sc-text-ace">ACE</span>
              </div>
            </div>
            <h1>CULINARY EXCELLENCE</h1>
            <p>Experience restaurant quality in the comfort of your home.</p>
            <div className="sc-hero-btns">
              <a href="#chef" className="btn-secondary">
                Book Chef Pee
              </a>
            </div>
          </div>
        </div>
        <div className="sc-hero-slide sc-hero-slide-2">
          <div className="sc-hero-overlay">
            <div className="sc-hero-brand-container">
              <div className="sc-brand-main">
                <span className="sc-text-south">South</span>
                <span className="sc-text-chow">Chow</span>
              </div>
              <div className="sc-brand-sub">
                <span className="sc-text-by">by</span>
                <span className="sc-text-ace">ACE</span>
              </div>
            </div>
            <h1>A LA CARTE DINING</h1>
            <p>Exquisite menus tailored for your exclusive events.</p>
            <div className="sc-hero-btns">
              <a href="#chef" className="btn-primary">
                Order a La Carte
              </a>
            </div>
          </div>
        </div>
        <div className="sc-hero-slide sc-hero-slide-3">
          <div className="sc-hero-overlay">
            <div className="sc-hero-brand-container">
              <div className="sc-brand-main">
                <span className="sc-text-south">South</span>
                <span className="sc-text-chow">Chow</span>
              </div>
              <div className="sc-brand-sub">
                <span className="sc-text-by">by</span>
                <span className="sc-text-ace">ACE</span>
              </div>
            </div>
            <h1>GOURMET PACKAGED MEALS</h1>
            <p>Ready to eat or cook delicacies delivered to you.</p>
            <div className="sc-hero-btns">
              <a href="#packaged" className="btn-primary">
                Order Packaged Meals
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  )
}

export default Hero
