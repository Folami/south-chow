import React from 'react'
import './About.css'

const About = ({ chefPeeImg }) => {
  return (
    <section id="about" className="sc-section sc-light">
      <div className="sc-content-wrapper">
        <h2>Meet Chef Pee</h2>
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
  )
}

export default About
