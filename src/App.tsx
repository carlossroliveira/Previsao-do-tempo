// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { GlobalStyle } from './styles/GlobalStyles';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

export const App = (): JSX.Element => {
  const [themes, setThemes] = useState<boolean>();

  const handleThemes = () => setThemes((theme) => !theme);

  return (
    <ThemeProvider theme={themes ? light : dark}>
      <GlobalStyle />
      <Routes />
      <button onClick={handleThemes}>AAAA</button>
    </ThemeProvider>
  );
};
