import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getStorageItem, setStorageItem } from './storage';

describe('storage utils', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    vi.clearAllMocks();
  });

  describe('getStorageItem', () => {
    it('returns null when key does not exist', () => {
      const result = getStorageItem('non-existent-key');
      expect(result).toBeNull();
    });

    it('returns the value when key exists', () => {
      localStorage.setItem('test-key', 'test-value');
      const result = getStorageItem('test-key');
      expect(result).toBe('test-value');
    });

    it('returns null on error (e.g., SecurityError)', () => {
      // Mock localStorage to throw an error
      const originalGetItem = Storage.prototype.getItem;
      Storage.prototype.getItem = vi.fn(() => {
        throw new Error('SecurityError');
      });

      const result = getStorageItem('any-key');
      expect(result).toBeNull();

      // Restore original
      Storage.prototype.getItem = originalGetItem;
    });
  });

  describe('setStorageItem', () => {
    it('returns true when value is set successfully', () => {
      const result = setStorageItem('test-key', 'test-value');
      expect(result).toBe(true);
      expect(localStorage.getItem('test-key')).toBe('test-value');
    });

    it('returns false on error (e.g., QuotaExceededError)', () => {
      // Mock localStorage to throw an error
      const originalSetItem = Storage.prototype.setItem;
      Storage.prototype.setItem = vi.fn(() => {
        throw new Error('QuotaExceededError');
      });

      const result = setStorageItem('any-key', 'any-value');
      expect(result).toBe(false);

      // Restore original
      Storage.prototype.setItem = originalSetItem;
    });
  });
});
