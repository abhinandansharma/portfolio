import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'ink' | 'paper';

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({ theme: 'ink', toggleTheme: () => {} });
export const useTheme = () => useContext(ThemeContext);

function initial(): Theme {
  try {
    return localStorage.getItem('theme') === 'paper' ? 'paper' : 'ink';
  } catch {
    return 'ink';
  }
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('ink');
  useEffect(() => {
    setTheme(initial());
  }, []);
  useEffect(() => {
    if (theme === 'paper') document.documentElement.setAttribute('data-theme', 'paper');
    else document.documentElement.removeAttribute('data-theme');
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);
  const toggleTheme = () => setTheme((t) => (t === 'ink' ? 'paper' : 'ink'));
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
