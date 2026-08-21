import { useState, useEffect } from 'react';
import '../css/portfolio.css';

const data = {
  name: 'Jan Lester U. Camus',
  initials: 'JLC',
  profileImage: '/profile.png',
  coverImage: '/cover.png',
  age: 22,
  sex: 'Male',
  title: 'Graphic Artist',
  subtitle: '& Web Developer',
  tagline:
    'I craft visual identities, illustrations, and print design — and bring ideas to life on the web.',
  email: 'occ.camus.janlester@gmail.com',
  location: 'Philippines',
  contact: {
    phone: '+639500935788',
    facebook: 'https://www.facebook.com/jnlstr01',
    linkedin: 'https://www.linkedin.com/in/jan-lester-camus-182083413/',
    email: 'occ.camus.janlester@gmail.com',
  },
  about: [
    'I am a graphic artist and web developer with a passion for branding, editorial design, and digital illustration. Every project starts with a clear concept and ends with visuals that communicate with purpose.',
    'Alongside design, I build clean, responsive websites — bridging aesthetics and code to deliver cohesive digital experiences.',
  ],
  education: {
    school: 'Opol Community College',
    course: 'Bachelor of Science in Information Technology',
    graduated: 'June 23, 2026',
  },
  skills: [
    {
      title: 'Branding',
      items: ['Visual Identity Design', 'Logo & Mark Design', 'Brand Style Guides'],
    },
    { title: 'Print & Editorial', items: ['Posters', 'Magazines', 'Packaging'] },
    { title: 'Digital Art', items: ['Illustration', 'Social Media', 'UI Mockups'] },
    {
      title: 'Web Development',
      items: ['Reactjs', 'HTML & CSS', 'Laravel', 'JavaScript'],
    },
  ],
  works: [
    {
      id: 1,
      title: 'Bloom Studio',
      category: 'Brand Identity',
      description: 'Logo, color system, and stationery for a boutique flower shop.',
    },
    {
      id: 2,
      title: 'Urban Pulse',
      category: 'Poster Series',
      description: 'A set of event posters blending typography and abstract geometry.',
    },
    {
      id: 3,
      title: 'Coastal Living',
      category: 'Editorial Layout',
      description: 'Magazine spread design with photography-led storytelling.',
    },
    {
      id: 4,
      title: 'Portfolio Site',
      category: 'Web Development',
      description: 'A minimal personal site built with React — design meets code.',
    },
  ],
  nav: [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ],
};

function Header({ active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`pf-header${scrolled ? ' pf-header--scrolled' : ''}`}>
      <nav className="pf-container pf-nav" aria-label="Main navigation">
        <a href="#hero" className="pf-logo">
          {data.name.split(' ')[0]}
        </a>

        <button
          type="button"
          className={`pf-menu-btn${open ? ' pf-menu-btn--open' : ''}`}
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`pf-nav-links${open ? ' pf-nav-links--open' : ''}`}>
          {data.nav.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="pf-hero" id="hero">
      <div
        className="pf-hero-cover"
        style={{ backgroundImage: `url(${data.coverImage})` }}
        aria-hidden="true"
      />
      <div className="pf-hero-overlay" aria-hidden="true" />
      <div className="pf-hero-fade" aria-hidden="true" />
      <div className="pf-container pf-hero-content">
        <p className="pf-hero-label">Graphic Artist / Web Developer</p>
        <h1 className="pf-hero-name">{data.name}</h1>
        <p className="pf-hero-title">
          {data.title} <span>{data.subtitle}</span>
        </p>
        <p className="pf-hero-tagline">{data.tagline}</p>
        <div className="pf-hero-actions">
          <a href="#work" className="pf-btn pf-btn--primary">
            View Work
          </a>
          <a href="#contact" className="pf-btn pf-btn--outline">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="pf-section" id="about">
      <div className="pf-container pf-about">
        <div className="pf-about-visual">
          <img
            className="pf-avatar"
            src={data.profileImage}
            alt={`${data.name} profile photo`}
          />
        </div>
        <div className="pf-about-text">
          <h2 className="pf-section-title">About</h2>
          {data.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="pf-details">
            {data.age} years old · {data.sex} · {data.location}
          </p>
          <div className="pf-education">
            <h3>Education</h3>
            <p className="pf-education-course">{data.education.course}</p>
            <p className="pf-education-school">{data.education.school}</p>
            <p className="pf-education-date">Graduated {data.education.graduated}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="pf-section pf-section--alt" id="work">
      <div className="pf-container">
        <h2 className="pf-section-title">Selected Work</h2>
        <div className="pf-work-grid">
          {data.works.map((item) => (
            <article key={item.id} className="pf-work-card">
              <span className="pf-work-category">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="pf-section" id="skills">
      <div className="pf-container">
        <h2 className="pf-section-title">Skills</h2>
        <div className="pf-skills-grid">
          {data.skills.map((group) => (
            <div key={group.title} className="pf-skill-group">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="pf-section pf-section--alt" id="contact">
      <div className="pf-container pf-contact">
        <div className="pf-contact-info">
          <h2 className="pf-section-title">Get in Touch</h2>
          <p>Available for freelance design projects and web collaborations.</p>
          <ul className="pf-contact-list">
            <li>
              <span className="pf-contact-label">Cellphone</span>
              <a href={`tel:${data.contact.phone}`}>{data.contact.phone}</a>
            </li>
            <li>
              <span className="pf-contact-label">Facebook</span>
              <span>{data.contact.facebook}</span>
            </li>
            <li>
              <span className="pf-contact-label">LinkedIn</span>
              <span className="pf-contact-blank">—</span>
            </li>
            <li>
              <span className="pf-contact-label">Gmail</span>
              <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
            </li>
          </ul>
        </div>

        <form className="pf-form" onSubmit={handleSubmit}>
          <div className="pf-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="pf-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="pf-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="pf-btn pf-btn--primary pf-btn--full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pf-footer">
      <div className="pf-container pf-footer-inner">
        <p>&copy; {year} {data.name}. All rights reserved.</p>
        <a href="#hero" className="pf-back-top" aria-label="Back to top">
          &uarr;
        </a>
      </div>
    </footer>
  );
}

function useScrollSpy(ids) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export default function Portfolio() {
  const sectionIds = ['about', 'work', 'skills', 'contact'];
  const active = useScrollSpy(sectionIds);

  return (
    <>
      <a className="pf-skip" href="#about">
        Skip to content
      </a>
      <Header active={active} />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
