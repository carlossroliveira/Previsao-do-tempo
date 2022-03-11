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
import { ContainerSC, InputSC } from './inputStyles';

export const Input = (): JSX.Element => {
  const { storage, onChangeInformation } = useMyHookApplication();
  return (
    <ContainerSC>
      <InputSC
        type="text"
        placeholder="Digite seu estado"
        value={storage}
        onChange={onChangeInformation}
      />
    </ContainerSC>
  );
};
