import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
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
  )
}

export default Contact
