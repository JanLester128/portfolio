import { useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio-theme';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const handleThemeChange = (e) => {
      if (e.detail && (e.detail === 'dark' || e.detail === 'light')) {
        setTheme(e.detail);
      }
    };
    window.addEventListener('portfolio-theme-change', handleThemeChange);
    return () => window.removeEventListener('portfolio-theme-change', handleThemeChange);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    window.dispatchEvent(new CustomEvent('portfolio-theme-change', { detail: next }));
  };

  return { theme, toggleTheme };
}
