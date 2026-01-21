import React from 'react'
import './TermsModal.css'
import { FaTimes } from 'react-icons/fa'

const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="sc-modal-overlay">
      <div className="sc-modal-content">
        <button className="sc-modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        <h2>Terms & Conditions</h2>
        <div className="sc-terms-text">
          <p>
            <strong>1. Booking & Confirmation:</strong> All bookings for the
            "Rent a Chef" service must be made at least 72 hours in advance. A
            confirmation email will be sent upon acceptance.
          </p>
          <p>
            <strong>2. Payment:</strong> A 50% non-refundable deposit is
            required to secure your date. The remaining balance is due on the
            day of the event.
          </p>
          <p>
            <strong>3. Cancellation Policy:</strong> Cancellations made within
            48 hours of the scheduled event will result in forfeiture of the
            deposit.
          </p>
          <p>
            <strong>4. Menu Customization:</strong> Menu selections must be
            finalized 48 hours prior to the event. Any last-minute changes may
            incur additional charges.
          </p>
          <p>
            <strong>5. Liability:</strong> South Chow is not liable for any food
            allergies not disclosed prior to menu finalization.
          </p>
          <p>
            <strong>6. Service Area:</strong> Our chefs currently serve the
            greater metropolitan area. Travel fees may apply for locations
            outside this zone.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TermsModal
