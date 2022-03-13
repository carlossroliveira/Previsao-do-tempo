// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import theme from '../../styles/themes/dark';
import { Input } from '../../components/Input';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../utils/withThemeComponent';

const InputWithTheme = WithThemeComponent(Input);

describe('Input Testing', () => {
  it('Should render the Input component', () => {
    render(<InputWithTheme />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render the input component enabled', () => {
    render(<InputWithTheme />);
    expect(screen.getByRole('textbox')).not.toBeDisabled();
  });

  it('should render the Input component with the right color selected', () => {
    render(<InputWithTheme />);
    expect(screen.getByRole('textbox')).toHaveStyle({
      color: theme.color.secondary,
    });
  });

  it('this should allow you to type the input', () => {
    render(<InputWithTheme />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.click(input);
    fireEvent.change(input, { target: { value: 'Salvador' } });
    expect(input.value).toBe('Salvador');
  });

  it('should match snapshot', () => {
    const component = render(<InputWithTheme />);
    expect(component).toMatchSnapshot();
  });
});
