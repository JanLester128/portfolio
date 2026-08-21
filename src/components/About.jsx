import { portfolio } from '../data/portfolio';
import FadeIn from './FadeIn';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <FadeIn>
          <div className="section-header-center">
            <span className="section-badge">Background & Profile</span>
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
              Hi, I&apos;m <strong>{portfolio.name}</strong> — Graphic Artist & Web Developer.
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
      </div>
    </section>
  );
}
