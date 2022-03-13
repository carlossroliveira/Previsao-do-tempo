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
import { ContentInf } from '../../components/Layout/part/ContentInf';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../utils/withThemeComponent';

const ContentInfWithTheme = WithThemeComponent(ContentInf);

describe('ContentInf Testing', () => {
  it('Should render the ContentInf component', () => {
    render(<ContentInfWithTheme />);
    expect(
      screen.getByRole('heading', {
        name: /tema/i,
      }),
    ).toBeInTheDocument();
  });

  it('should render the ContentInf component with the right color selected', () => {
    render(<ContentInfWithTheme />);
    expect(
      screen.getByRole('heading', {
        name: /tema/i,
      }),
    ).toHaveStyle({
      color: theme.color.primary,
    });
  });

  it('should match snapshot', () => {
    const component = render(<ContentInfWithTheme />);
    expect(component).toMatchSnapshot();
  });
});
