import React from 'react'

const MealCard = ({
  imageClass,
  title,
  description,
  popular,
  price,
  onAddToCart,
}) => {
  return (
    <div className="sc-card">
      {popular && <div className="sc-badge-popular">Popular</div>}
      <div className={`sc-card-img ${imageClass}`}></div>
      <h3>{title}</h3>
      <p>{description}</p>
      {price && <p className="sc-price">${price.toFixed(2)}</p>}
      {onAddToCart && (
        <button className="btn-primary sc-add-cart-btn" onClick={onAddToCart}>
          Add to Cart
        </button>
      )}
    </div>
  )
}

export default MealCard
