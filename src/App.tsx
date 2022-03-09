// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Routes } from './routes';
import { useMyHook } from './Context/themes/ContextTheme';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { ThemeProviderApplication } from './Context/contextApplication/ContextTheme';

export const App = (): JSX.Element => {
  const { themes } = useMyHook();

  return (
    <ThemeProvider theme={themes}>
      <ThemeProviderApplication>
        <GlobalStyle />
        <Routes />
      </ThemeProviderApplication>
    </ThemeProvider>
  );
};
