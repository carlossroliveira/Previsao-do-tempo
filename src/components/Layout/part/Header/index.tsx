// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC, TitleSC } from './headerStyles';

export const Header = (): JSX.Element => {
  return (
    <ContainerSC>
      <TitleSC>Previsão do Tempo</TitleSC>
    </ContainerSC>
  );
};
