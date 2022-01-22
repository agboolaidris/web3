import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  colors: {
    background: '#F4F6FA',
    pink: '#DD00FF',
    grey: '#5E6C86',
  },
});
declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      background: string;
      pink?: string;
      grey?: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: {
      background?: string;
      pink?: string;
      grey?: string;
    };
  }
}

export default theme;
