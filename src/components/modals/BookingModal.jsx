import React from 'react'
import { FaTimes } from 'react-icons/fa'

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="sc-modal-overlay">
      <div className="sc-modal-content">
        <button className="sc-modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        <h2>Book a Chef</h2>
        <p>Fill out the form below to request a chef for your event.</p>
        <form className="sc-booking-form">
          <div className="sc-form-group">
            <label>Name</label>
            <input type="text" required />
          </div>
          <div className="sc-form-group">
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className="sc-form-group">
            <label>Phone</label>
            <input type="tel" required />
          </div>
          <div className="sc-form-group">
            <label>Date of Event</label>
            <input type="date" required />
          </div>
          <div className="sc-form-group">
            <label>Time of Event</label>
            <input type="time" required />
          </div>
          <div className="sc-form-group">
            <label>Number of Guests</label>
            <input type="number" min="1" required />
          </div>
          <div className="sc-form-group">
            <label>Special Requests</label>
            <textarea rows="4"></textarea>
          </div>
          <div className="sc-form-checkbox">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the Terms & Conditions</label>
          </div>
          <button type="submit" className="btn-primary">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookingModal
