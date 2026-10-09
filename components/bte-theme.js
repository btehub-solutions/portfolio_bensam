/**
 * M3 Theme Management Module
 * Supports light, dark, high-contrast, and system preference with zero flash
 */

export function getStoredTheme() {
  try {
    return localStorage.getItem('theme') || 'auto';
  } catch (e) {
    return 'auto';
  }
}

export function setTheme(theme) {
  try {
    if (theme === 'auto') {
      localStorage.removeItem('theme');
      document.documentElement.removeAttribute('data-theme');
    } else {
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  } catch (e) {
    console.error('Failed to save theme to localStorage', e);
  }
}

export function initTheme() {
  const current = getStoredTheme();
  if (current !== 'auto') {
    document.documentElement.setAttribute('data-theme', current);
  }
}
