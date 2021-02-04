import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders header', () => {
  render(<App />);
  const header = screen.getByText("Welcome to Teraki's new web application");
  expect(header).toBeInTheDocument();
});
