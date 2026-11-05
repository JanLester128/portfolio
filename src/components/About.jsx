import { useState } from 'react';
import { portfolio } from '../data/portfolio';
import FadeIn from './FadeIn';

const HIGHLIGHTED_OUTPUTS = [
  {
    id: 'pubmat-uniqlo',
    badge: 'PUBMAT Design',
    meta: 'Fashion Retail Campaign',
    title: 'UNIQLO Sweatshirt — Fashion Retail Pubmat',
    description:
      'Clean retail product campaign poster featuring modern typography, color swatch hierarchy, and promotional layout.',
    image: '/pubmat/UNIQLO.jpg',
  },
  {
    id: 'pubmat-pal',
    badge: 'PUBMAT Design',
    meta: 'Brand Campaign',
    title: 'Philippine Airlines — Travel Promo Pubmat',
    description:
      'High-impact promotional social media layout showcasing modern visual hierarchy and compositing.',
    image: '/pubmat/PAL.jpg',
  },
];

export default function About() {
  const [previewItem, setPreviewItem] = useState(null);

  return (
    <section className="section" id="about">
      <div className="container">
        <FadeIn>
          <div className="section-header-center">
            <span className="section-badge">Background &amp; Profile</span>
            <h2 className="section-title">About Me</h2>
          </div>
        </FadeIn>

        <FadeIn className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-avatar-card">
              {portfolio.cover || portfolio.avatar ? (
                <img
                  src={portfolio.cover || '/cover.png'}
                  alt={portfolio.name}
                  className="about-avatar-img"
                />
              ) : (
                <div className="about-avatar-fallback">
                  <span>{portfolio.initials}</span>
                </div>
              )}
            </div>
          </div>

          <div className="about-content">
            <h3 className="about-lead">
              Hi, I&apos;m <strong>{portfolio.shortName || 'Jan Lester'}</strong> — Graphic Artist &amp; Web Developer.
            </h3>
            {portfolio.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="about-highlights-wrapper">
              <h4 className="highlights-title">Key Expertise</h4>
              <ul className="about-highlights">
                {portfolio.about.highlights.map((item) => (
                  <li key={item}>
                    <svg
                      className="check-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* Highlighted Outputs in About */}
        <FadeIn>
          <div className="about-featured-outputs">
            <div className="about-outputs-header">
              <div>
                <span className="about-outputs-eyebrow">Selected Highlights</span>
                <h3 className="about-outputs-title">Featured Output Highlights</h3>
              </div>
              <a href="#projects" className="about-outputs-link">
                View All Works &rarr;
              </a>
            </div>

            <div className="about-outputs-grid">
              {HIGHLIGHTED_OUTPUTS.map((item) => (
                <article
                  key={item.id}
                  className="about-output-card"
                  onClick={() => setPreviewItem(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setPreviewItem(item);
                    }
                  }}
                  aria-label={`Preview ${item.title}`}
                >
                  <div className="about-output-thumb">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="about-output-overlay">
                      <span className="view-badge">Preview Output</span>
                    </div>
                  </div>
                  <div className="about-output-body">
                    <div className="about-output-tags">
                      <span className="project-category-tag">{item.badge}</span>
                      <span className="about-output-meta">{item.meta}</span>
                    </div>
                    <h4 className="about-output-card-title">{item.title}</h4>
                    <p className="about-output-card-desc">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Quick Lightbox Preview for Highlighted Output */}
        {previewItem && (
          <div
            className="lightbox-overlay"
            onClick={() => setPreviewItem(null)}
            role="dialog"
            aria-modal="true"
            aria-label={previewItem.title}
          >
            <div
              className="lightbox-container"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="lightbox-close"
                onClick={() => setPreviewItem(null)}
                aria-label="Close preview"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <div className="lightbox-content">
                <div className="lightbox-media-wrapper">
                  <img
                    src={previewItem.image}
                    alt={previewItem.title}
                    className="lightbox-img"
                  />
                </div>
                <div className="lightbox-info">
                  <div className="lightbox-header-row">
                    <span className="project-category-tag">{previewItem.badge}</span>
                    <span className="lightbox-counter">{previewItem.meta}</span>
                  </div>
                  <h3 className="lightbox-title">{previewItem.title}</h3>
                  <p className="lightbox-desc">{previewItem.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
