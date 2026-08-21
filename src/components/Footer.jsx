import { portfolio } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          &copy; {year} {portfolio.name}. Built with React &amp; Vite.
        </p>
        <a href="#hero" className="back-to-top" aria-label="Back to top">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
