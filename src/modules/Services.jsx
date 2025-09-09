import React from 'react'

const items = [
  {
    title: 'Full-service Catering',
    desc: 'Buffet setup, live counters, decor coordination, and courteous servers for stress-free events.'
  },
  {
    title: 'On-site Live Cooking',
    desc: 'Fresh hot food cooked at your venue with traditional pots and modern safety practices.'
  },
  {
    title: 'Event Meal Planning',
    desc: 'From welcome drinks to dessert, we tailor menus for weddings, house-warmings, and corporate meets.'
  },
  {
    title: 'Bulk Orders & Tiffins',
    desc: 'Homestyle meal boxes for pujas, office meetings, and community gatherings.'
  }
]

export default function Services(){
  return (
    <section id="services" className="section alt">
      <div className="container">
        <h2 className="center">Services</h2>
        <div className="grid">
          {items.map((s, i) => (
            <div key={i} className="card service">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
