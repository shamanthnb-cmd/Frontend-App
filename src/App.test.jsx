import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App from './App';

describe('My To-Do App', () => {
  it('renders the application', () => {
    render(<App />);

    expect(
      screen.getByText(/todo/i)
    ).toBeInTheDocument();
  });
});