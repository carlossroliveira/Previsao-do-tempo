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
import { Button } from '../../components/Button';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../utils/withThemeComponent';

const ButtonWithTheme = WithThemeComponent(Button);

describe('Button Testing', () => {
  xit('Should render the button component', () => {
    render(<ButtonWithTheme />);
    expect(screen.getByText(/buscar/i)).toBeInTheDocument();
  });
});
