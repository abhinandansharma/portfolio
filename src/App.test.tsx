import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';
import App from './App';

jest.mock('./components/Scene', () => () => null);
jest.mock('./components/Pit', () => () => null);

beforeAll(() => {
  window.matchMedia = window.matchMedia || ((() => ({ matches: false, addListener: () => {}, removeListener: () => {} })) as any);
  (window as any).IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
});

test('renders the hero headline', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/First/);
});
