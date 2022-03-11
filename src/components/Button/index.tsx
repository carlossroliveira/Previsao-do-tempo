// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { useMyHookApplication } from '../../Context/contextApplication/ContextTheme';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC, ButtonSC } from './buttonStyles';

export const Button = (): JSX.Element => {
  const { storage, handleButtonAction } = useMyHookApplication();
  return (
    <ContainerSC>
      <ButtonSC onClick={() => handleButtonAction(storage)}>Buscar</ButtonSC>
    </ContainerSC>
  );
};
