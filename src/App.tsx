// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import { useMyHook } from './components/hooks/theme';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { GlobalStyle } from './styles/GlobalStyles';

export const App = (): JSX.Element => {
  const { themes } = useMyHook();
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};
