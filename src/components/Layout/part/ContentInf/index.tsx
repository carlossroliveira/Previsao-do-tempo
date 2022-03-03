// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { SwitchComponent } from '../../../SwitchComponent';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC, TitleSC } from './contentInfStyles';

export const ContentInf = (): JSX.Element => {
  return (
    <ContainerSC>
      <TitleSC>Tema</TitleSC>
      <SwitchComponent />
    </ContainerSC>
  );
};
