import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    fontFamily: {
      fontDefault: string;
    };
    color: {
      primary: string;
      secondary: string;
    };
    background: {
      primary: string;
      secondary: string;
    };
    boxShadow: {
      primary: string;
    };
  }
}
