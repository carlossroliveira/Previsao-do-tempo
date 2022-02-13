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
import { ContainerSC } from './contentInfStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------

export const ContentInf = (): JSX.Element => {
  return (
    <ContainerSC>
      <h2>TEMA</h2>
      <SwitchComponent />
    </ContainerSC>
  );
};
