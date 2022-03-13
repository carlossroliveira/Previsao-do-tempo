// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';

import 'jest-styled-components';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import theme from '../../styles/themes/dark';
import { Header } from '../../components/Layout/part/Header';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../utils/withThemeComponent';

const HeaderWithTheme = WithThemeComponent(Header);

describe('Header Testing', () => {
  it('Should render the header component', () => {
    render(<HeaderWithTheme />);
    expect(
      screen.getByRole('heading', {
        name: /previsão do tempo/i,
      }),
    ).toBeInTheDocument();
  });

  it('should render the header component with the right color selected', () => {
    render(<HeaderWithTheme />);
    expect(
      screen.getByRole('heading', {
        name: /previsão do tempo/i,
      }),
    ).toHaveStyle({
      color: theme.color.primary,
    });
  });

  it('should match snapshot', () => {
    const component = render(<HeaderWithTheme />);
    expect(component).toMatchSnapshot();
  });
});
