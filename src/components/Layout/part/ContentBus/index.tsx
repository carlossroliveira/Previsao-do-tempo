// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Button } from '../../../Button';
import { Input } from '../../../Input';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC } from './contentBusStyles';

export const ContentBus = (): JSX.Element => {
  return (
    <ContainerSC>
      <Input />
      <Button />
    </ContainerSC>
  );
};
