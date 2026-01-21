import React, { useState } from 'react'
import { FaTimes, FaTrash, FaArrowLeft } from 'react-icons/fa'

const CartModal = ({
  isOpen,
  onClose,
  cartItems,
  removeFromCart,
  clearCart,
  updateQuantity,
}) => {
  const [step, setStep] = useState('cart') // 'cart', 'checkout', 'success'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    paymentMethod: 'card',
  })

  if (!isOpen) return null

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate order processing
    setTimeout(() => {
      setStep('success')
      clearCart()
    }, 1500)
  }

  const resetModal = () => {
    setStep('cart')
    setFormData({ name: '', email: '', address: '', phone: '' })
    onClose()
  }

  return (
    <div className="sc-modal-overlay">
      <div className="sc-modal-content sc-cart-modal">
        <button className="sc-modal-close" onClick={resetModal}>
          <FaTimes />
        </button>

        {step === 'cart' && (
          <>
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
                      <div className="sc-cart-quantity-controls">
                        <button onClick={() => updateQuantity(index, -1)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(index, 1)}>
                          +
                        </button>
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
                  <button
                    className="btn-primary sc-checkout-btn"
                    onClick={() => setStep('checkout')}
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </>
        )}

        {step === 'checkout' && (
          <>
            <div className="sc-modal-header-row">
              <button className="sc-back-btn" onClick={() => setStep('cart')}>
                <FaArrowLeft /> Back
              </button>
              <h2>Checkout</h2>
            </div>
            <p>
              Total Amount: <strong>${total.toFixed(2)}</strong>
            </p>
            <form className="sc-booking-form" onSubmit={handleSubmit}>
              <div className="sc-form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="sc-form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="sc-form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="sc-form-group">
                <label>Delivery Address</label>
                <textarea
                  name="address"
                  rows="3"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="sc-form-group">
                <label>Payment Method</label>
                <div className="sc-payment-methods">
                  <label className="sc-payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                    />
                    <span>Credit/Debit Card</span>
                  </label>
                  <label className="sc-payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="transfer"
                      checked={formData.paymentMethod === 'transfer'}
                      onChange={handleInputChange}
                    />
                    <span>Bank Transfer</span>
                  </label>
                  <label className="sc-payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="delivery"
                      checked={formData.paymentMethod === 'delivery'}
                      onChange={handleInputChange}
                    />
                    <span>Pay on Delivery</span>
                  </label>
                </div>
              </div>
              <button type="submit" className="btn-primary">
                Place Order
              </button>
            </form>
          </>
        )}

        {step === 'success' && (
          <div className="sc-success-message">
            <div className="sc-success-icon">✓</div>
            <h2>Order Placed!</h2>
            <p>Thank you for your order, {formData.name}.</p>
            <p>
              We will contact you shortly at {formData.email} to confirm
              delivery details.
            </p>
            <button className="btn-primary" onClick={resetModal}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartModal
