import React from 'react';
import { render, screen } from '@testing-library/react';
import Grid from './Grid';

test('renders Home', () => {
  render(<Grid />);
  const navhome = screen.getByText(/Home/i);
  expect(navhome).toBeInTheDocument();
});


test('renders Nav', () => {
    render(<Grid />);
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });
  
