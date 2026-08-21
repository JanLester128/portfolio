import { useState } from 'react';
import { portfolio } from '../data/portfolio';
import FadeIn from './FadeIn';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <FadeIn>
          <div className="section-header-center">
            <span className="section-badge">Get in Touch</span>
            <h2 className="section-title">Let&apos;s Connect</h2>
            <p className="section-subtitle">
              Have a project, job opening, or creative collaboration in mind? Feel free to reach out.
            </p>
          </div>
        </FadeIn>

        <FadeIn className="contact-grid">
          <div className="contact-info">
            {/* Email */}
            <a href={`mailto:${portfolio.email}`} className="contact-item" title="Send Email">
              <div className="contact-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <span className="contact-label">Email</span>
                <span className="contact-val">{portfolio.email}</span>
              </div>
            </a>

            {/* Phone */}
            <a href={`tel:${portfolio.phone}`} className="contact-item" title="Call Phone">
              <div className="contact-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <span className="contact-label">Phone</span>
                <span className="contact-val">{portfolio.phone}</span>
              </div>
            </a>

            {/* Location */}
            <div className="contact-item non-interactive">
              <div className="contact-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <span className="contact-label">Location</span>
                <span className="contact-val">{portfolio.location}</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Jan Lester Camus"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Hi Jan Lester, I would like to discuss a project..."
              />
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              Send Message
            </button>
            <p className="form-note">Directly opens your email app with the pre-filled message.</p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
