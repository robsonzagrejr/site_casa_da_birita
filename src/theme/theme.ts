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
      secondary: '#0f0f10ff',
    },
  },
  shape: {
    borderRadius: 10,
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
  shape: {
    borderRadius: 10,
  },
});


