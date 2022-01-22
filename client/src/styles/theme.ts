import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  colors: {
    background: '#F4F6FA',
    toolbar: '#5E6C86',
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});
declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      background: string;
      toolbar: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: {
      background?: string;
      toolbar?: string;
    };
  }
}

export default theme;
