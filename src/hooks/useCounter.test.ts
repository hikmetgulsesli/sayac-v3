import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter hook', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('increments count by 1', async () => {
    const { result } = renderHook(() => useCounter());

    // Wait for initial load
    await waitFor(() => expect(result.current.loading).toBe(false));

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it('decrements count by 1', async () => {
    const { result } = renderHook(() => useCounter());

    await waitFor(() => expect(result.current.loading).toBe(false));

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });

  it('resets count to 0', async () => {
    const { result } = renderHook(() => useCounter());

    await waitFor(() => expect(result.current.loading).toBe(false));

    // Increment first
    act(() => {
      result.current.increment();
      result.current.increment();
    });

    expect(result.current.count).toBe(2);

    // Then reset
    act(() => {
      result.current.reset();
    });

    expect(result.current.count).toBe(0);
  });

  it('loads initial value from localStorage', async () => {
    localStorage.setItem('sayac-v3-count', '42');

    const { result } = renderHook(() => useCounter());

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.count).toBe(42);
  });

  it('falls back to 0 when localStorage has invalid value', async () => {
    localStorage.setItem('sayac-v3-count', 'not-a-number');

    const { result } = renderHook(() => useCounter());

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.count).toBe(0);
  });

  it('falls back to 0 when localStorage throws error', async () => {
    // Mock localStorage to throw an error
    const originalGetItem = Storage.prototype.getItem;
    Storage.prototype.getItem = vi.fn(() => {
      throw new Error('SecurityError');
    });

    const { result } = renderHook(() => useCounter());

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.count).toBe(0);
    expect(result.current.error).toBe('localStorage erişim hatası');

    // Restore original
    Storage.prototype.getItem = originalGetItem;
  });

  it('persists count to localStorage when changed', async () => {
    const { result } = renderHook(() => useCounter());

    await waitFor(() => expect(result.current.loading).toBe(false));

    act(() => {
      result.current.increment();
    });

    expect(localStorage.getItem('sayac-v3-count')).toBe('1');
  });

  it('sets error when localStorage write fails', async () => {
    const { result } = renderHook(() => useCounter());

    await waitFor(() => expect(result.current.loading).toBe(false));

    // Mock localStorage.setItem to fail
    const originalSetItem = Storage.prototype.setItem;
    Storage.prototype.setItem = vi.fn(() => {
      throw new Error('QuotaExceededError');
    });

    act(() => {
      result.current.increment();
    });

    await waitFor(() => expect(result.current.error).toBe('localStorage yazma hatası'));

    // Restore original
    Storage.prototype.setItem = originalSetItem;
  });
});
