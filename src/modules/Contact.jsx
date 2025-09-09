import React, { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
  const data = Object.fromEntries(new FormData(e.currentTarget))
  const message = `New enquiry from ${data.name} (${data.phone}) for ${data.eventType} on ${data.date}. Guests: ${data.guests}. Notes: ${data.notes}`
  const whatsapp = `https://wa.me/919391357497?text=${encodeURIComponent(message)}`
    window.open(whatsapp, '_blank')
    setStatus('Opening WhatsApp…')
  }

  return (
    <section id="contact" className="section container">
      <h2 className="center">Get a quick quote</h2>
      <form className="form" onSubmit={onSubmit}>
        <div className="grid form-grid">
          <label>
            <span>Name</span>
            <input name="name" required placeholder="Your full name"/>
          </label>
          <label>
            <span>Phone</span>
            <input name="phone" required pattern="[0-9\-\+ ]{8,}" placeholder="WhatsApp or mobile"/>
          </label>
          <label>
            <span>Event Type</span>
            <select name="eventType" defaultValue="Wedding">
              <option>Wedding</option>
              <option>House Warming</option>
              <option>Baby Shower</option>
              <option>Corporate</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            <span>Guests</span>
            <input name="guests" type="number" min="10" max="2000" defaultValue="100"/>
          </label>
          <label>
            <span>Date</span>
            <input name="date" type="date"/>
          </label>
          <label className="full">
            <span>Notes</span>
            <textarea name="notes" rows="3" placeholder="Cuisine preferences, live counters, timings…"/>
          </label>
        </div>
        <button className="btn primary" type="submit">Send on WhatsApp</button>
        <div className="status" role="status">{status}</div>
      </form>
    </section>
  )
}
