import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CounterButtons } from './CounterButtons';

describe('CounterButtons', () => {
  it('calls onIncrement when Arttır button is clicked', () => {
    const onIncrement = vi.fn();
    const onDecrement = vi.fn();
    const onReset = vi.fn();

    render(
      <CounterButtons 
        onIncrement={onIncrement} 
        onDecrement={onDecrement} 
        onReset={onReset} 
      />
    );

    const incrementButton = screen.getByLabelText('Arttır');
    fireEvent.click(incrementButton);

    expect(onIncrement).toHaveBeenCalledTimes(1);
  });

  it('calls onDecrement when Azalt button is clicked', () => {
    const onIncrement = vi.fn();
    const onDecrement = vi.fn();
    const onReset = vi.fn();

    render(
      <CounterButtons 
        onIncrement={onIncrement} 
        onDecrement={onDecrement} 
        onReset={onReset} 
      />
    );

    const decrementButton = screen.getByLabelText('Azalt');
    fireEvent.click(decrementButton);

    expect(onDecrement).toHaveBeenCalledTimes(1);
  });

  it('calls onReset when Sıfırla button is clicked', () => {
    const onIncrement = vi.fn();
    const onDecrement = vi.fn();
    const onReset = vi.fn();

    render(
      <CounterButtons 
        onIncrement={onIncrement} 
        onDecrement={onDecrement} 
        onReset={onReset} 
      />
    );

    const resetButton = screen.getByLabelText('Sıfırla');
    fireEvent.click(resetButton);

    expect(onReset).toHaveBeenCalledTimes(1);
  });

  it('has correct aria-labels in Turkish', () => {
    render(
      <CounterButtons 
        onIncrement={() => {}} 
        onDecrement={() => {}} 
        onReset={() => {}} 
      />
    );

    expect(screen.getByLabelText('Arttır')).toBeInTheDocument();
    expect(screen.getByLabelText('Azalt')).toBeInTheDocument();
    expect(screen.getByLabelText('Sıfırla')).toBeInTheDocument();
  });
});
