// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Header } from './part/Header';
import { Sidebar } from './part/Sidebar';
import { ContentMap } from './part/ContentMap';
import { ContentBus } from './part/ContentBus';
import { ContentInf } from './part/ContentInf';
import { Footer } from './part/Footer';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC } from './layoutStyles';

export const Layout = (): JSX.Element => {
  return (
    <ContainerSC>
      <Header />
      <Sidebar />
      <ContentMap />
      <ContentBus />
      <ContentInf />
      <Footer />
    </ContainerSC>
  );
};
