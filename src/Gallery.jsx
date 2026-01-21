import React from 'react'

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1563342192-513194147873?auto=format&fit=crop&w=800&q=80', // Jollof
    'https://images.unsplash.com/photo-1625944230942-905dc6f659c6?auto=format&fit=crop&w=800&q=80', // Suya
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80', // Efo Riro
    'https://images.unsplash.com/photo-1604329263239-aa8ce2742086?auto=format&fit=crop&w=800&q=80', // Porridge
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80', // Salad/Greens
    'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80', // Feast
  ]

  return (
    <div className="sc-gallery-grid">
      {images.map((img, index) => (
        <div key={index} className="sc-gallery-item">
          <img src={img} alt={`Gallery Image ${index + 1}`} loading="lazy" />
        </div>
      ))}
    </div>
  )
}

export default Gallery
