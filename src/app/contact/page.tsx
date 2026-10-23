'use client'

import { useState } from 'react'
import { contact } from '@/lib/resume'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )

    window.location.href = `mailto:trivedidev16@gmail.com?subject=${subject}&body=${body}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <section className="page-hero" aria-labelledby="contact-title">
        <div className="container grid-12">
          <h1 id="contact-title">Get in touch</h1>
          <div className="page-hero__side">
            <p className="lead">A question, or work we could do together? I&rsquo;ll reply soon.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-12 contact">
          <dl className="contact__info">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contact.email}`} className="link">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{contact.location}</dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="link">
                  linkedin.com/in/trivedi-dev
                </a>
              </dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="link">
                  github.com/d3v07
                </a>
              </dd>
            </div>
            <div>
              <dt>Available for opportunities</dt>
              <dd>Looking for full-time roles and interesting projects.</dd>
            </div>
          </dl>

          <form onSubmit={handleSubmit} className="contact__form" aria-labelledby="form-title">
            <h2 id="form-title">Send me a message</h2>
            <div className="field-row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
              />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Your message"
              />
            </div>

            <div className="actions">
              <button type="submit" className="btn btn--primary">
                Send message
              </button>
            </div>

            <p className="form-note">All fields are required. Sending opens your email app with the message filled in.</p>
          </form>
        </div>
      </section>

      <section className="section--s band" aria-labelledby="other-title">
        <div className="container">
          <div className="head">
            <h2 id="other-title">Or find me here</h2>
          </div>
          <div className="panels elsewhere">
            <a href={`mailto:${contact.email}`}>
              <b>Email</b>
              <span>Direct message</span>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              <b>LinkedIn</b>
              <span>Professional network</span>
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              <b>GitHub</b>
              <span>View my code</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
