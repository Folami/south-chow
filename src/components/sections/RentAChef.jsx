import React from 'react'

const RentAChef = ({ setIsBookingModalOpen, setIsTermsModalOpen }) => {
  return (
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
            <button
              className="btn-primary"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book Now
            </button>
            <div className="sc-terms-link-container">
              <button
                className="sc-link-btn"
                onClick={() => setIsTermsModalOpen(true)}
              >
                View Terms & Conditions
              </button>
            </div>
          </div>
          <div className="sc-image-block"></div>
        </div>
      </div>
    </section>
  )
}

export default RentAChef
