/**
 * M3 Spec-Compliant Dynamic Color Engine (Material You)
 * Generates complete tonal color schemes dynamically from any seed color
 * Pure Vanilla JavaScript — zero third-party dependencies.
 */

// Helper: Hex to RGB
function hexToRgb(hex) {
  const cleanHex = hex.replace('#', '');
  const bigint = parseInt(cleanHex.length === 3 ? cleanHex.split('').map(c => c + c).join('') : cleanHex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}

// Helper: RGB to HSL
function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

// Helper: HSL to Hex
function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

/**
 * Generate M3 Tonal Palette from Seed Color
 */
export function generateM3Palette(seedHex, isDark = false, isHighContrast = false) {
  const { r, g, b } = hexToRgb(seedHex);
  const { h, s } = rgbToHsl(r, g, b);

  const priSat = Math.max(s, 40);
  const secSat = Math.round(priSat * 0.4);
  const neuSat = Math.min(Math.round(priSat * 0.12), 12);
  const tertHue = (h + 60) % 360;

  if (isHighContrast) {
    if (isDark) {
      return {
        primary: hslToHex(h, priSat, 90),
        onPrimary: '#000000',
        primaryContainer: hslToHex(h, priSat, 75),
        onPrimaryContainer: '#000000',
        secondary: hslToHex(h, secSat, 90),
        onSecondary: '#000000',
        secondaryContainer: hslToHex(h, secSat, 70),
        onSecondaryContainer: '#000000',
        tertiary: hslToHex(tertHue, priSat, 90),
        onTertiary: '#000000',
        surface: '#000000',
        onSurface: '#ffffff',
        surfaceContainer: '#121212',
        outline: '#ffffff'
      };
    } else {
      return {
        primary: hslToHex(h, priSat, 20),
        onPrimary: '#ffffff',
        primaryContainer: hslToHex(h, priSat, 35),
        onPrimaryContainer: '#ffffff',
        secondary: hslToHex(h, secSat, 20),
        onSecondary: '#ffffff',
        secondaryContainer: hslToHex(h, secSat, 35),
        onSecondaryContainer: '#ffffff',
        tertiary: hslToHex(tertHue, priSat, 20),
        onTertiary: '#ffffff',
        surface: '#ffffff',
        onSurface: '#000000',
        surfaceContainer: '#f0f0f0',
        outline: '#000000'
      };
    }
  }

  if (isDark) {
    return {
      primary: hslToHex(h, priSat, 80),
      onPrimary: hslToHex(h, priSat, 20),
      primaryContainer: hslToHex(h, priSat, 30),
      onPrimaryContainer: hslToHex(h, priSat, 90),
      secondary: hslToHex(h, secSat, 80),
      onSecondary: hslToHex(h, secSat, 20),
      secondaryContainer: hslToHex(h, secSat, 30),
      onSecondaryContainer: hslToHex(h, secSat, 90),
      tertiary: hslToHex(tertHue, priSat, 80),
      onTertiary: hslToHex(tertHue, priSat, 20),
      surface: hslToHex(h, neuSat, 6),
      onSurface: hslToHex(h, neuSat, 90),
      surfaceContainerLowest: hslToHex(h, neuSat, 4),
      surfaceContainerLow: hslToHex(h, neuSat, 10),
      surfaceContainer: hslToHex(h, neuSat, 12),
      surfaceContainerHigh: hslToHex(h, neuSat, 17),
      surfaceContainerHighest: hslToHex(h, neuSat, 22),
      outline: hslToHex(h, neuSat, 60),
      outlineVariant: hslToHex(h, neuSat, 30)
    };
  }

  // Light Mode
  return {
    primary: hslToHex(h, priSat, 40),
    onPrimary: '#ffffff',
    primaryContainer: hslToHex(h, priSat, 90),
    onPrimaryContainer: hslToHex(h, priSat, 10),
    secondary: hslToHex(h, secSat, 40),
    onSecondary: '#ffffff',
    secondaryContainer: hslToHex(h, secSat, 90),
    onSecondaryContainer: hslToHex(h, secSat, 10),
    tertiary: hslToHex(tertHue, priSat, 40),
    onTertiary: '#ffffff',
    surface: hslToHex(h, neuSat, 98),
    onSurface: hslToHex(h, neuSat, 10),
    surfaceContainerLowest: '#ffffff',
    surfaceContainerLow: hslToHex(h, neuSat, 96),
    surfaceContainer: hslToHex(h, neuSat, 94),
    surfaceContainerHigh: hslToHex(h, neuSat, 92),
    surfaceContainerHighest: hslToHex(h, neuSat, 90),
    outline: hslToHex(h, neuSat, 50),
    outlineVariant: hslToHex(h, neuSat, 80)
  };
}

/**
 * Apply Dynamic Palette to Document Root
 */
export function applyDynamicSeedColor(seedHex) {
  try {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark' ||
      (!document.documentElement.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const isHighContrast = document.documentElement.getAttribute('data-theme')?.includes('high-contrast');

    const palette = generateM3Palette(seedHex, isDark, isHighContrast);
    const root = document.documentElement;

    Object.entries(palette).forEach(([role, hex]) => {
      const kebabRole = role.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
      root.style.setProperty(`--md-sys-color-${kebabRole}`, hex);
    });

    localStorage.setItem('m3-seed-color', seedHex);
  } catch (e) {
    console.error('Failed to apply dynamic seed color', e);
  }
}

/**
 * Reset Dynamic Color to Default Baseline
 */
export function resetDynamicSeedColor() {
  localStorage.removeItem('m3-seed-color');
  const tokens = [
    'primary', 'on-primary', 'primary-container', 'on-primary-container',
    'secondary', 'on-secondary', 'secondary-container', 'on-secondary-container',
    'tertiary', 'on-tertiary', 'surface', 'on-surface', 'surface-container',
    'surface-container-low', 'surface-container-high', 'surface-container-highest',
    'outline', 'outline-variant'
  ];
  tokens.forEach(t => document.documentElement.style.removeProperty(`--md-sys-color-${t}`));
}
