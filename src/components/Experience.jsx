import { portfolio } from '../data/portfolio';
import FadeIn from './FadeIn';

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <FadeIn>
          <div className="section-header-center">
            <span className="section-badge">Career & Education</span>
            <h2 className="section-title">Experience & Background</h2>
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
              <span className="heading-icon">💼</span> Professional Experience
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
                    <p className="timeline-location">📍 {exp.location}</p>
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
              <span className="heading-icon">🎓</span> Education & Leadership
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
                    <p className="timeline-location">📍 {edu.location}</p>
                    
                    <div className="leadership-section">
                      <h5 className="leadership-title">🏆 Leadership & Campus Roles</h5>
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
