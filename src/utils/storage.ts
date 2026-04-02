/**
 * Safe localStorage wrapper utilities
 * Catches all exceptions and returns safe defaults
 */

/**
 * Safely get an item from localStorage
 * @param key - The key to retrieve
 * @returns The stored value or null if not found or on error
 */
export function getStorageItem(key: string): string | null {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return null;
    }
    return window.localStorage.getItem(key);
  } catch {
    // Catch SecurityError, QuotaExceededError, DOMException, etc.
    return null;
  }
}

/**
 * Safely set an item in localStorage
 * @param key - The key to set
 * @param value - The value to store
 * @returns true if successful, false on error
 */
export function setStorageItem(key: string, value: string): boolean {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return false;
    }
    window.localStorage.setItem(key, value);
    return true;
  } catch {
    // Catch SecurityError, QuotaExceededError, DOMException, etc.
    return false;
  }
}
