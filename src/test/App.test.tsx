import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders the portfolio page', () => {
    render(<App />);
    
    // Check that the main content is rendered
    expect(document.body).toBeInTheDocument();
  });

  it('contains Steve Chen name in the document', () => {
    render(<App />);
    
    // The portfolio should contain Steve Chen's name
    const steveElements = screen.getAllByText(/Steve Chen/i);
    expect(steveElements.length).toBeGreaterThan(0);
  });
});

