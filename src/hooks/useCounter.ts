import { useState, useCallback, useSyncExternalStore } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';

const STORAGE_KEY = 'sayac-v3-count';

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  loading: boolean;
  error: string | null;
  setError: (error: string | null) => void;
}

// Subscribe function for useSyncExternalStore
function subscribe(callback: () => void) {
  // localStorage changes from other tabs
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

// Get snapshot function for useSyncExternalStore
function getSnapshot(): number {
  const saved = getStorageItem(STORAGE_KEY);
  if (saved !== null) {
    const parsed = parseInt(saved, 10);
    if (!isNaN(parsed)) {
      return parsed;
    }
  }
  return 0;
}

// Server snapshot - always returns 0 for SSR
function getServerSnapshot(): number {
  return 0;
}

/**
 * Custom hook for managing counter state with localStorage persistence
 * Handles increment (+1), decrement (-1), reset (to 0)
 * Loads from localStorage on mount, defaults to 0
 * Handles errors (SecurityError, QuotaExceededError)
 */
export function useCounter(): UseCounterReturn {
  const [error, setError] = useState<string | null>(null);
  
  // Use useSyncExternalStore for syncing with localStorage
  const count = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  // Persist to localStorage whenever count changes via the actions
  const increment = useCallback(() => {
    const newCount = count + 1;
    const success = setStorageItem(STORAGE_KEY, newCount.toString());
    if (!success) {
      setError('localStorage yazma hatası');
    } else {
      setError(null);
    }
    // Dispatch storage event to trigger re-render
    window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY }));
  }, [count]);

  const decrement = useCallback(() => {
    const newCount = count - 1;
    const success = setStorageItem(STORAGE_KEY, newCount.toString());
    if (!success) {
      setError('localStorage yazma hatası');
    } else {
      setError(null);
    }
    window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY }));
  }, [count]);

  const reset = useCallback(() => {
    const success = setStorageItem(STORAGE_KEY, '0');
    if (!success) {
      setError('localStorage yazma hatası');
    } else {
      setError(null);
    }
    window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY }));
  }, []);

  return {
    count,
    increment,
    decrement,
    reset,
    loading: false, // Always false since we use useSyncExternalStore
    error,
    setError,
  };
}
