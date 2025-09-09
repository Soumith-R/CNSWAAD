import React from 'react'

export default function About(){
  return (
    <section id="about" className="section container">
      <div className="split">
        <div>
          <h2>Our Story</h2>
          <p>
            At Chilukamma's Natu Kitchen, we celebrate the earthy, soul-satisfying flavors of
            traditional Telugu cuisine. From slow-cooked gravies to festive thalis, our team
            brings the warmth of home-style food to weddings, house-warmings, baby showers, and
            corporate events.
          </p>
          <ul className="bullets">
            <li>Pure ingredients • farm-fresh produce</li>
            <li>On-site live cooking with smoke-free set-up</li>
            <li>Customizable menus for every budget</li>
            <li>Hygiene-first, FSSAI-guided operations</li>
          </ul>
        </div>
        <div>
          <div className="card highlight">
            <h3>Why choose us?</h3>
            <p>
              We combine heritage recipes with modern planning. Expect punctual service, courteous
              staff, and food that gets your guests talking.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
