// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useCallback, useState } from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { useMyHook } from '../../Context/themes/ContextTheme';
// Styles
// -------------------------------------------------
import { ParagraphSC, Toggle } from './SwitchComponentStyles';

export const SwitchComponent = (): JSX.Element => {
  const { handleThemes } = useMyHook();
  const [themesValue, setThemesValue] = useState<boolean>(false);

  const handleThemesFc = useCallback(() => {
    setThemesValue((switchValue) => !switchValue);
    handleThemes();
  }, [handleThemes]);

  return (
    <>
      <ParagraphSC>{!themesValue ? 'Dark' : 'Light'}</ParagraphSC>
      <Toggle
        checked={themesValue}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={handleThemesFc}
      />
    </>
  );
};
