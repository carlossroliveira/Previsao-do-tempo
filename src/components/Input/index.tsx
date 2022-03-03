// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC, InputSC } from './inputStyles';

export const Input = (): JSX.Element => {
  return (
    <ContainerSC>
      <InputSC type="text" placeholder="Digite sua capital" />
    </ContainerSC>
  );
};
