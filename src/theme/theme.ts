import { createTheme, Theme } from '@mui/material/styles';

const beerYellow = '#FBBF24';
const neutralGray = '#6B7280';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: beerYellow,
    },
    secondary: {
      main: neutralGray,
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#020617',
      secondary: '#e2e8f0',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: beerYellow,
    },
    secondary: {
      main: neutralGray,
    },
    background: {
      default: '#020617',
      paper: '#0f172a',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#e2e8f0',
    },
  },
});

/**
 * Generates CSS variables from MUI theme and injects them into the document root.
 * This allows CSS Modules to use theme values via CSS variables.
 */
export function injectThemeCSSVariables(theme: Theme) {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  const palette = theme.palette;

  // Background colors
  root.style.setProperty('--bg', palette.background.default);
  root.style.setProperty('--surface', palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.06)' 
    : 'rgba(0, 0, 0, 0.04)');
  root.style.setProperty('--surface-2', palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.06)');

  // Text colors
  root.style.setProperty('--text', palette.text.primary);
  root.style.setProperty('--muted', palette.text.secondary);

  // Brand/primary color
  root.style.setProperty('--brand', palette.primary.main);

  // Border color (derived from text with opacity)
  root.style.setProperty('--border', palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.14)'
    : 'rgba(0, 0, 0, 0.12)');
}

