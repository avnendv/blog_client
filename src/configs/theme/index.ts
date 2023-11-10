import { BreakpointOverrides, experimental_extendTheme as extendTheme } from '@mui/material/styles';

const theme = extendTheme({
  av: {
    appBarHeight: '64px',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#E8E8EA',
        },
        av: {
          main: '#fff',
          contrastText: '#000',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#4B6BFB',
        },
        av: {
          main: '#181A2A',
          contrastText: '#fff',
        },
      },
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
