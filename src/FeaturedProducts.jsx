import React from 'react'
import Slider from 'react-slick'
import MealCard from './MealCard'

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const FeaturedProducts = ({ addToCart }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }

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
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="sc-carousel-slide">
            <MealCard
              {...product}
              onAddToCart={() => addToCart(product)}
              price={product.price}
            />
          </div>
        ))}
      </Slider>
      <div className="sc-view-all-container">
        <a href="#packaged" className="btn-primary">
          View All Products
        </a>
      </div>
    </div>
  )
}

export default FeaturedProducts
