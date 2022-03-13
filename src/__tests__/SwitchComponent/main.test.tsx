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
import { SwitchComponent } from '../../components/SwitchComponent';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../utils/withThemeComponent';

const SwitchComponentWithTheme = WithThemeComponent(SwitchComponent);

describe('Switch Testing', () => {
  it('Should render the Switch component with name Dark', () => {
    render(<SwitchComponentWithTheme />);
    expect(screen.getByText(/dark/i)).toBeInTheDocument();
  });

  it('should render the Switch component enabled', () => {
    render(<SwitchComponentWithTheme />);
    expect(screen.getByText(/dark/i)).not.toBeDisabled();
  });

  it('should render the Switch component "not" with the right background selected', () => {
    render(<SwitchComponentWithTheme />);
    expect(screen.getByText(/dark/i)).not.toHaveStyle({
      'background-color': theme.background.primary,
    });
  });

  it('should match snapshot', () => {
    const component = render(<SwitchComponentWithTheme />);
    expect(component).toMatchSnapshot();
  });
});
