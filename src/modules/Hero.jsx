import React from 'react'

export default function Hero(){
  return (
    <header className="hero">
      <nav className="nav container">
        <a className="brand" href="#home">
          <img src="/images/logo.jpg" alt="Chilukamma's Naatu Swaad logo" />
          <span>Chilukamma's Naatu Swaad</span>
        </a>
        <input id="menu-toggle" type="checkbox" />
        <label className="hamburger" htmlFor="menu-toggle" aria-label="Toggle Menu">☰</label>
        <ul className="links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a className="cta" href="#contact">Get Quote</a></li>
        </ul>
      </nav>

      <div className="container hero-content">
  <h1>Authentic Naatu flavors for every celebration</h1>
        <p>Catering and on-site cooking crafted with love, tradition, and impeccable hygiene.</p>
        <div className="actions">
          <a className="btn primary" href="#contact">Book catering</a>
          <a className="btn ghost" href="#menu">Explore menu</a>
        </div>
      </div>

      <div className="hero-shapes" aria-hidden="true">
        <div className="shape s1"/>
        <div className="shape s2"/>
        <div className="shape s3"/>
      </div>
    </header>
  )
}
