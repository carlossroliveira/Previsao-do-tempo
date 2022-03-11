// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { useMyHookApplication } from '../../../../Context/contextApplication/ContextTheme';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Button } from '../../../Button';
import { Input } from '../../../Input';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC, ParagraphSC } from './contentBusStyles';

export const ContentBus = (): JSX.Element => {
  const { validateInput } = useMyHookApplication();
  return (
    <ContainerSC>
      {validateInput && <ParagraphSC>Digite apenas texto</ParagraphSC>}
      <Input />
      <Button />
    </ContainerSC>
  );
};
