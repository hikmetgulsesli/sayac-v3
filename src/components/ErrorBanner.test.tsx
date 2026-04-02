import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorBanner } from './ErrorBanner';

describe('ErrorBanner', () => {
  it('renders when error message is provided', () => {
    render(<ErrorBanner message="Test error message" />);
    
    expect(screen.getByText('Hata')).toBeInTheDocument();
    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });

  it('is hidden when error message is null', () => {
    const { container } = render(<ErrorBanner message={null} />);
    
    expect(container.firstChild).toBeNull();
  });

  it('calls onDismiss when close button is clicked', () => {
    const onDismiss = vi.fn();
    render(<ErrorBanner message="Test error" onDismiss={onDismiss} />);
    
    const closeButton = screen.getByLabelText('Kapat');
    fireEvent.click(closeButton);

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});
