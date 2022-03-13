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
import { Sidebar } from '../../components/Layout/part/Sidebar';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../utils/withThemeComponent';

const SidebarWithTheme = WithThemeComponent(Sidebar);

describe('Sidebar Testing', () => {
  it('Should render the Sidebar component', () => {
    render(<SidebarWithTheme />);
    screen.getByRole('heading', {
      name: /estados/i,
    });
  });
  it('Should render the Sidebar component with max', () => {
    render(<SidebarWithTheme />);
    screen.getByText(/max/i);
  });
  it('Should render the Sidebar component with min', () => {
    render(<SidebarWithTheme />);
    screen.getByText(/min/i);
  });
  it('should match snapshot', () => {
    const component = render(<SidebarWithTheme />);
    screen.logTestingPlaygroundURL();
    expect(component).toMatchSnapshot();
  });
});
