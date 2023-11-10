import * as StylesMUI from '@mui/material/styles';
declare module '@mui/material/styles' {
  export default StylesMUI;

  export interface Theme extends StylesMUI.Theme {
    av: {
      [key: string]: string | number;
    };
  }

  export interface CssVarsThemeOptions extends StylesMUI.CssVarsThemeOptions {
    av: {
      [key: string]: string | number;
    };
  }

  export interface PaletteOptions extends StylesMUI.PaletteOptions {
    av: StylesMUI.PaletteColorOptions;
  }
}
