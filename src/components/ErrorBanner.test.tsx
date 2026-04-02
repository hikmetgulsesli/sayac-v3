import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorBanner } from './ErrorBanner';

describe('ErrorBanner', () => {
  it('renders when error is passed', () => {
    render(<ErrorBanner error="Bir hata oluştu" />);
    expect(screen.getByText('Bir hata oluştu')).toBeInTheDocument();
    expect(screen.getByText('Hata')).toBeInTheDocument();
  });

  it('is hidden when error is null', () => {
    const { container } = render(<ErrorBanner error={null} />);
    expect(container.firstChild).toBeNull();
  });

  it('is hidden when error is empty string', () => {
    const { container } = render(<ErrorBanner error="" />);
    expect(container.firstChild).toBeNull();
  });

  it('calls onDismiss when close button is clicked', () => {
    const onDismiss = vi.fn();
    render(<ErrorBanner error="Bir hata oluştu" onDismiss={onDismiss} />);
    
    const closeButton = screen.getByLabelText('Kapat');
    fireEvent.click(closeButton);
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('displays Turkish text', () => {
    render(<ErrorBanner error="Depolama erişim hatası" />);
    expect(screen.getByText('Hata')).toBeInTheDocument();
    expect(screen.getByText('Depolama erişim hatası')).toBeInTheDocument();
  });
});
