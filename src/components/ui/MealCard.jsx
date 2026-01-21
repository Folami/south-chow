import React from 'react'

const MealCard = ({ imageClass, title, description, popular }) => {
  return (
    <div className="sc-card">
      {popular && <div className="sc-badge-popular">Popular</div>}
      <div className={`sc-card-img ${imageClass}`}></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default MealCard
