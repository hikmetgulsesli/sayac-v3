import { useState, useEffect, useCallback } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';

const STORAGE_KEY = 'sayac-v3-count';

export interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  loading: boolean;
  error: string | null;
}

export function useCounter(): UseCounterReturn {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = getStorageItem(STORAGE_KEY);
    if (saved !== null) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed)) {
        setCount(parsed);
      }
    }
    setLoading(false);
  }, []);

  // Save to localStorage whenever count changes
  useEffect(() => {
    if (loading) return;
    
    const success = setStorageItem(STORAGE_KEY, count.toString());
    if (!success) {
      setError('Tarayıcı depolama erişimi engellendi. Lütfen gizli modu kapatın veya izinleri kontrol edin.');
    }
  }, [count, loading]);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(c => c - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return {
    count,
    increment,
    decrement,
    reset,
    loading,
    error,
  };
}
