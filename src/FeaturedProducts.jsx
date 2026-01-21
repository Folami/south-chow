import React from 'react'
import MealCard from './MealCard'

const FeaturedProducts = ({ addToCart }) => {
  const products = [
    {
      imageClass: 'sc-img-featured-1',
      title: 'Jollof Rice Feast',
      description: 'Smoky party jollof rice with grilled chicken.',
      price: 25.0,
    },
    {
      imageClass: 'sc-img-featured-2',
      title: 'Asaro (Yam Porridge)',
      description: 'Creamy yam porridge with assorted meats.',
      price: 20.0,
    },
    {
      imageClass: 'sc-img-featured-3',
      title: 'Efo Riro',
      description: 'Rich vegetable soup with a blend of spices.',
      price: 22.5,
    },
    {
      imageClass: 'sc-img-featured-4',
      title: 'Suya Skewers',
      description: 'Spicy grilled beef skewers, a northern delicacy.',
      price: 15.0,
    },
  ]

  return (
    <div className="sc-featured-products">
      <div className="sc-featured-grid">
        {products.map((product, index) => (
          <MealCard
            key={index}
            {...product}
            onAddToCart={() => addToCart(product)}
            price={product.price}
          />
        ))}
      </div>
      <div className="sc-view-all-container">
        <a href="#packaged" className="btn-primary">
          View All Products
        </a>
      </div>
    </div>
  )
}

export default FeaturedProducts
