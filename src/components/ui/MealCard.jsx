import React from 'react'

const MealCard = ({ imageClass, title, description, popular, price, addToCart }) => {
  return (
    <div className="sc-card">
      {popular && <div className="sc-badge-popular">Popular</div>}
      <div className={`sc-card-img ${imageClass}`}></div>
      <h3>{title}</h3>
      {price && <p className="sc-price">£{price}</p>}
      <p>{description}</p>
      {addToCart && (
        <button
          className="btn-primary sc-add-cart-btn"
          onClick={() => addToCart({ title, price, imageClass })}
        >
          Add to Cart
        </button>
      )}
    </div>
  )
}

export default MealCard
