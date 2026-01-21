import React from 'react'
import { FaTimes, FaTrash } from 'react-icons/fa'

const CartModal = ({ isOpen, onClose, cartItems, removeFromCart }) => {
  if (!isOpen) return null

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="sc-modal-overlay">
      <div className="sc-modal-content sc-cart-modal">
        <button className="sc-modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="sc-cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="sc-cart-item">
                  <div className="sc-cart-item-info">
                    <h4>{item.title}</h4>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                  <button
                    className="sc-cart-remove-btn"
                    onClick={() => removeFromCart(index)}
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
            <div className="sc-cart-total">
              <h3>Total: ${total.toFixed(2)}</h3>
              <button className="btn-primary sc-checkout-btn">Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CartModal
