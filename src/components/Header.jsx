import { useEffect, useState } from 'react';
import { portfolio } from '../data/portfolio';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useTheme } from '../hooks/useTheme';

function ThemeIcon() {
  return (
    <>
      <svg
        className="icon-sun"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
      <svg
        className="icon-moon"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toggleTheme } = useTheme();
  const sectionIds = portfolio.navLinks.map((link) => link.id);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav container" aria-label="Main navigation">
        <a href="#home" className="logo" aria-label="Jan Lester Camus Portfolio">
          Jan Lester<span>.</span>
        </a>

        <button
          type="button"
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`} id="nav-menu">
          {portfolio.navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="theme-toggle"
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
            >
              <ThemeIcon />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
