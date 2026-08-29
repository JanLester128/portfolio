import { portfolio } from '../data/portfolio';
import FadeIn from './FadeIn';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <FadeIn>
          <div className="section-header-center">
            <span className="section-badge">Core Competencies</span>
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">
              Comprehensive expertise spanning creative design software, video editing suites,
              and modern web development frameworks.
            </p>
          </div>
        </FadeIn>
        
        <div className="skills-categorized-grid">
          {portfolio.skillCategories.map((group) => (
            <FadeIn key={group.category}>
              <article className="skill-category-card">
                <div className="skill-cat-header">
                  <h3 className="skill-cat-title">{group.category}</h3>
                </div>
                <ul className="skill-items-list">
                  {group.skills.map((skill) => (
                    <li key={skill} className="skill-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="skill-check"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
