import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brandline">
          <img src="/images/logo.jpg" alt="Logo"/>
          <div>
            <strong>Chilukamma's Naatu Swaad</strong>
            <div className="muted">Catering & Cooking Services • Authentic Telugu Cuisine</div>
          </div>
        </div>
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="subfooter">
        <div className="container">
          © {new Date().getFullYear()} Chilukamma's Naatu Swaad. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
