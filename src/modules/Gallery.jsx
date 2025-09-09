import React from 'react'

const images = [
  '/images/logo.jpg'
]

export default function Gallery(){
  return (
    <section id="gallery" className="section alt">
      <div className="container">
        <h2 className="center">Gallery</h2>
        <div className="gallery-grid">
          {images.map((src, i) => (
            <figure className="gallery-item" key={i}>
              <img loading="lazy" src={src} alt={`Gallery ${i+1}`} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
