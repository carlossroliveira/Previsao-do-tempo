// -------------------------------------------------
// Packages
// -------------------------------------------------
import { ReactNode } from 'react';
// -------------------------------------------------
// Types
// -------------------------------------------------

export interface IThemeContext {
  themes: ITheme;
  handleThemes: () => void;
}
export interface ITheme {
  title: string;

  fontFamily: {
    fontDefault: string;
  };
  color: {
    primary: string;
  };
  background: {
    primary: string;
    secondary: string;
  };
  boxShadow: {
    primary: string;
  };
}

export interface IThemeProvider {
  children: ReactNode | JSX.Element;
}
