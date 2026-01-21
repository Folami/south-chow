import React from 'react'

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80',
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
