// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { Layout } from './components/Layout';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { GlobalStyle } from './styles/GlobalStyles';

export const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
};
