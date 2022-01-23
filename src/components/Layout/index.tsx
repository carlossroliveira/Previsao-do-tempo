// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Header } from './part/Header';
import { ContentOne } from './part/ContentOne';
import { ContentTwo } from './part/ContentTwo';
import { Footer } from './part/Footer';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC } from './layoutStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------

export const Layout = (): JSX.Element => {
  return (
    <ContainerSC>
      <Header />
      <ContentOne />
      <ContentTwo />
      <Footer />
    </ContainerSC>
  );
};
