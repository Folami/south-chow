import React from 'react'
import './FeaturedProducts.css'
import MealCard from '../../ui/MealCard/MealCard'

const FeaturedProducts = ({ addToCart }) => {
  const products = [
    {
      imageClass: 'sc-img-featured-1',
      title: 'Jollof Rice Feast',
      description: 'Smoky party jollof rice with grilled chicken.',
      price: '25.00',
      popular: true,
    },
    {
      imageClass: 'sc-img-featured-2',
      title: 'Asaro (Yam Porridge)',
      description: 'Creamy yam porridge with assorted meats.',
      price: '22.00',
    },
    {
      imageClass: 'sc-img-featured-3',
      title: 'Efo Riro',
      description: 'Rich vegetable soup with a blend of spices.',
      price: '30.00',
    },
    {
      imageClass: 'sc-img-featured-4',
      title: 'Suya Skewers',
      description: 'Spicy grilled beef skewers, a northern delicacy.',
      price: '18.00',
    },
  ]

  return (
    <div className="sc-featured-grid">
      {products.map((product, index) => (
        <MealCard key={index} {...product} addToCart={addToCart} />
      ))}
    </div>
  )
}

export default FeaturedProducts
