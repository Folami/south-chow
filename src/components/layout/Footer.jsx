import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
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
  )
}

export default Footer
