import { portfolio } from '../data/portfolio';
import FadeIn from './FadeIn';

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <FadeIn>
          <div className="section-header-center">
            <span className="section-badge">Career &amp; Education</span>
            <h2 className="section-title">Experience &amp; Background</h2>
            <p className="section-subtitle">
              Demonstrated hands-on experience in multimedia layouting, video production,
              and academic student leadership.
            </p>
          </div>
        </FadeIn>

        <div className="experience-education-grid">
          {/* Work Experience */}
          <div className="exp-column">
            <h3 className="column-heading">
              <span className="heading-icon" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </span>
              Professional Experience
            </h3>
            <div className="timeline">
              {portfolio.experience.map((exp) => (
                <FadeIn key={exp.id}>
                  <div className="timeline-card">
                    <div className="timeline-header">
                      <div className="role-org">
                        <h4 className="timeline-role">{exp.role}</h4>
                        <p className="timeline-org">{exp.organization}</p>
                      </div>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <p className="timeline-location">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>{exp.location}</span>
                    </p>
                    <ul className="timeline-bullets">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                    <div className="timeline-skills">
                      {exp.skillsUsed.map((sk) => (
                        <span key={sk} className="skill-pill">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Education & Leadership */}
          <div className="exp-column">
            <h3 className="column-heading">
              <span className="heading-icon" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </span>
              Education &amp; Leadership
            </h3>
            <div className="timeline">
              {portfolio.education.map((edu) => (
                <FadeIn key={edu.id}>
                  <div className="timeline-card edu-card">
                    <div className="timeline-header">
                      <div className="role-org">
                        <h4 className="timeline-role">{edu.degree}</h4>
                        <p className="timeline-org">{edu.institution}</p>
                      </div>
                      <span className="timeline-period graduation-tag">{edu.graduation}</span>
                    </div>
                    <p className="timeline-location">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>{edu.location}</span>
                    </p>

                    <div className="leadership-section">
                      <h5 className="leadership-title">Leadership &amp; Campus Roles</h5>
                      <ul className="timeline-bullets">
                        {edu.leadership.map((lead, i) => (
                          <li key={i}>{lead}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
