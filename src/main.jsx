import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Portfolio from '../js/portfolio.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>
);
