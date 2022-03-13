// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useMemo } from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { useMyHookApplication } from '../../Context/contextApplication/ContextTheme';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC, InputSC } from './inputStyles';
import { Hourglass } from 'react-spinners-css';

export const Input = (): JSX.Element => {
  const { storage, loading, validateInput, onChangeInformation } =
    useMyHookApplication();

  const errorMessage = useMemo(() => {
    return !!validateInput;
  }, [validateInput]);

  return (
    <ContainerSC error={errorMessage}>
      <InputSC
        type="text"
        placeholder="Digite seu estado"
        value={storage}
        onChange={onChangeInformation}
      />

      {loading && <Hourglass color={'#393E46'} />}
    </ContainerSC>
  );
};
