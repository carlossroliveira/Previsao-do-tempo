/* eslint-disable react/display-name */
// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { ComponentType } from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import dark from '../../styles/themes/dark';
import { ThemeProvider } from 'styled-components';
import { ThemeProviderApplication } from '../../Context/contextApplication/ContextTheme';

function WithThemeComponent<T>(Component: ComponentType<T>) {
  return (props: T): JSX.Element => {
    return (
      <ThemeProvider theme={dark}>
        <ThemeProviderApplication>
          <Component {...(props as T)} />
        </ThemeProviderApplication>
      </ThemeProvider>
    );
  };
}
export default WithThemeComponent;
