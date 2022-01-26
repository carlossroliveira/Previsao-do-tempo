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
import Green from './styles/themes/Green';
import Marron from './styles/themes/Marron';

export const App = (): JSX.Element => {
  const [themes, setThemes] = useState<boolean>();

  const handleThemes = () => setThemes((theme) => !theme);

  return (
    <>
      <ThemeProvider theme={themes ? Green : Marron}>
        <GlobalStyle />
        <Routes />
        <button onClick={handleThemes}>AAAA</button>
      </ThemeProvider>
    </>
  );
};
