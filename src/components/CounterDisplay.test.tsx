import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CounterDisplay } from './CounterDisplay';

describe('CounterDisplay', () => {
  it('renders numeric count correctly', () => {
    render(<CounterDisplay count={42} />);
    
    const display = screen.getByTestId('counter-display');
    expect(display).toHaveTextContent('42');
  });

  it('renders zero correctly', () => {
    render(<CounterDisplay count={0} />);
    
    const display = screen.getByTestId('counter-display');
    expect(display).toHaveTextContent('0');
  });
});
