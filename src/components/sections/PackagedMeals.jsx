import React from 'react'
import MealCard from '../ui/MealCard'

const PackagedMeals = () => {
  return (
    <section id="packaged" className="sc-section sc-dark">
      <div className="sc-content-wrapper">
        <h2>Packaged Meals</h2>
        <p className="sc-subtitle">COOKED & UNCOOKED DELICACIES</p>
        <div className="sc-grid">
          <MealCard
            imageClass="sc-img-ready"
            title="Ready to Eat"
            description="Gourmet meals prepared by our chefs, ready to heat and serve for an instant fine dining experience."
            popular={true}
          />
          <MealCard
            imageClass="sc-img-cook"
            title="Ready to Cook"
            description="Prepped ingredients and professional instructions for a fresh, interactive home-cooked masterpiece."
          />
        </div>
      </div>
    </section>
  )
}

export default PackagedMeals
