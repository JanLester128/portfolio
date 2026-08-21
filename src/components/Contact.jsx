import { useState } from 'react';
import { portfolio } from '../data/portfolio';
import FadeIn from './FadeIn';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(portfolio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <FadeIn>
          <div className="section-header-center">
            <span className="section-badge">Get in Touch</span>
            <h2 className="section-title">Let&apos;s Connect</h2>
            <p className="section-subtitle">
              Have a project, job opening, or creative collaboration in mind? Feel free to reach out directly.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="contact-list-wrapper">
            <ul className="contact-list" role="list">
              {/* Email */}
              <li className="contact-list-item">
                <a
                  href={`mailto:${portfolio.email}`}
                  className="contact-list-link"
                  title="Click to Send Email"
                >
                  <div className="contact-list-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="contact-list-content">
                    <span className="contact-list-label">Email</span>
                    <span className="contact-list-val">{portfolio.email}</span>
                  </div>
                  <div className="contact-list-actions">
                    <button
                      type="button"
                      className="contact-copy-btn"
                      onClick={handleCopyEmail}
                      title="Copy Email Address"
                    >
                      {copied ? '✓ Copied' : 'Copy'}
                    </button>
                    <span className="contact-list-arrow" aria-hidden="true">&rarr;</span>
                  </div>
                </a>
              </li>

              {/* Phone */}
              <li className="contact-list-item">
                <a href={`tel:${portfolio.phone}`} className="contact-list-link" title="Call Phone">
                  <div className="contact-list-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="contact-list-content">
                    <span className="contact-list-label">Phone</span>
                    <span className="contact-list-val">{portfolio.phone}</span>
                  </div>
                  <div className="contact-list-actions">
                    <span className="contact-list-arrow" aria-hidden="true">&rarr;</span>
                  </div>
                </a>
              </li>

              {/* LinkedIn */}
              {portfolio.social?.linkedin && (
                <li className="contact-list-item">
                  <a
                    href={portfolio.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-list-link"
                    title="LinkedIn Profile"
                  >
                    <div className="contact-list-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div className="contact-list-content">
                      <span className="contact-list-label">LinkedIn</span>
                      <span className="contact-list-val">Jan Lester Camus</span>
                    </div>
                    <div className="contact-list-actions">
                      <span className="contact-list-arrow" aria-hidden="true">&rarr;</span>
                    </div>
                  </a>
                </li>
              )}

              {/* Facebook */}
              {portfolio.social?.facebook && (
                <li className="contact-list-item">
                  <a
                    href={portfolio.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-list-link"
                    title="Facebook Profile"
                  >
                    <div className="contact-list-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div className="contact-list-content">
                      <span className="contact-list-label">Facebook</span>
                      <span className="contact-list-val">Jan Lester</span>
                    </div>
                    <div className="contact-list-actions">
                      <span className="contact-list-arrow" aria-hidden="true">&rarr;</span>
                    </div>
                  </a>
                </li>
              )}

              {/* Location */}
              <li className="contact-list-item non-interactive">
                <div className="contact-list-link">
                  <div className="contact-list-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-list-content">
                    <span className="contact-list-label">Location</span>
                    <span className="contact-list-val">{portfolio.location}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}



