import { BreakpointOverrides, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  spacing: 4,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          '*::-webkit-scrollbar': {
            width: '5px',
            height: '5px',
            backgroundColor: '#f5f5f5',
            borderRadius: '5px',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgb(51,153,204)',
            background: 'linear-gradient(90deg,rgb(75,173,221) 0%,rgb(90,137,230) 100%)',
            borderRadius: '5px',
          },
        },
        body: {
          backgroundColor: '#f7f7f7',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  } as BreakpointOverrides,
});

export default theme;
