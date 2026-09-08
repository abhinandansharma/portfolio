import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './ThemeContext';

const container = document.getElementById('root') as HTMLElement;
const app = (
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// The build step prerenders the page into index.html, so the markup is already there on first load.
if (container.hasChildNodes()) hydrateRoot(container, app);
else createRoot(container).render(app);
