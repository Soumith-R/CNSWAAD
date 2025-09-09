import React from 'react'

const menu = [
  {
    group: 'Vegetarian Specials',
    items: ['Pappu Charu', 'Gutti Vankaya Kura', 'Mukkala Pulusu', 'Gongura Pappu', 'Curd Rice']
  },
  {
    group: 'Non-Veg Delights',
    items: ['Kodi Vepudu', 'Chepala Pulusu', 'Mutton Kheema Balls', 'Prawn Fry']
  },
  {
    group: 'Live Counters',
    items: ['Dosa & Pesarattu', 'Punugulu', 'Mirchi Bajji', 'Jilebi', 'Jonna Roti']
  }
]

export default function Menu(){
  return (
    <section id="menu" className="section container">
      <h2 className="center">Signature Menu</h2>
      <div className="menu-grid">
        {menu.map((m, i) => (
          <div key={i} className="card">
            <h3>{m.group}</h3>
            <ul>
              {m.items.map((it, j) => (<li key={j}>{it}</li>))}
            </ul>
          </div>
        ))}
      </div>
      <p className="center small muted">Ask for seasonal specials and customized sattvic or spicy menus.</p>
    </section>
  )
}
