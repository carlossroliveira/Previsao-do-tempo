// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useState } from 'react';
import { useMyHook } from '../hooks/theme';
import { ParagraphSC, Toggle } from './SwitchComponentStyles';

export const SwitchComponent = (): JSX.Element => {
  const { handleThemes } = useMyHook();

  const [first, setfirst] = useState<boolean>(false);

  const test = () => {
    setfirst((firstt) => !firstt);
    handleThemes();
  };

  return (
    <>
      <ParagraphSC>{!first ? 'Light' : 'Dark'}</ParagraphSC>
      <Toggle
        checked={first}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={test}
      />
    </>
  );
};
