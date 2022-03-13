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
import { ContentBus } from '../../components/Layout/part/ContentBus';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../utils/withThemeComponent';

const ContentBusWithTheme = WithThemeComponent(ContentBus);

describe('ContentBus Testing', () => {
  it('Should render the ContentBus component - with input and button', () => {
    render(<ContentBusWithTheme />);
    screen.getByRole('textbox');
    screen.getByText(/buscar/i);
  });

  it('should expect the paragraph to equal null from the beginning', () => {
    render(<ContentBusWithTheme />);
    expect(screen.queryByText(/Digite apenas texto/i)).toBeNull();
  });

  it('should render the ContentBus component with the right color selected', () => {
    render(<ContentBusWithTheme />);
    expect(screen.getByRole('textbox')).toHaveStyle({
      color: theme.color.secondary,
    });
  });

  it('should match snapshot', () => {
    const component = render(<ContentBusWithTheme />);
    expect(component).toMatchSnapshot();
  });
});
