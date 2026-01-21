import React from 'react'
import Slider from 'react-slick'

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  }

  const reviews = [
    {
      name: 'Sarah Jenkins',
      text: 'The Rent a Chef service was a game changer for my anniversary dinner. Absolutely delicious!',
      role: 'Home Diner',
    },
    {
      name: 'Michael O.',
      text: 'Best Jollof rice I have had in years. Tastes just like home.',
      role: 'Foodie',
    },
    {
      name: 'Amara K.',
      text: 'The ready-to-cook meals save me so much time during the week without compromising on quality.',
      role: 'Busy Professional',
    },
  ]

  return (
    <div className="sc-testimonials">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="sc-testimonial-card">
            <p className="sc-testimonial-text">"{review.text}"</p>
            <h4 className="sc-testimonial-name">- {review.name}</h4>
            <span className="sc-testimonial-role">{review.role}</span>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Testimonials
