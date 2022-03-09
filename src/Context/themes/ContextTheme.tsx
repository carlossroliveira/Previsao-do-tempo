// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { createContext, useContext, useState } from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { ITheme, IThemeContext, IThemeProvider } from './types';

const Context = createContext({} as IThemeContext);

export const ThemeProvider = ({ children }: IThemeProvider): JSX.Element => {
  const [themes, setThemes] = useState<ITheme>(dark);

  const handleThemes = () =>
    themes.title === 'dark' ? setThemes(light) : setThemes(dark);

  return (
    <Context.Provider value={{ handleThemes, themes }}>
      {children}
    </Context.Provider>
  );
};

export const useMyHook = (): IThemeContext => useContext(Context);
