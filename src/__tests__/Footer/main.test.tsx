// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';

import 'jest-styled-components';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Footer } from '../../components/Layout/part/Footer';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../utils/withThemeComponent';

const FooterWithTheme = WithThemeComponent(Footer);

describe('Footer Testing', () => {
  it('should match snapshot', () => {
    const component = render(<FooterWithTheme />);
    expect(component).toMatchSnapshot();
  });
});
