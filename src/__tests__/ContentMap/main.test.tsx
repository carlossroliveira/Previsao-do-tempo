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
import { ContentMap } from '../../components/Layout/part/ContentMap';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../utils/withThemeComponent';

const ContentMapWithTheme = WithThemeComponent(ContentMap);

describe('ContentMap Testing', () => {
  it('should match snapshot', () => {
    const component = render(<ContentMapWithTheme />);
    expect(component).toMatchSnapshot();
  });
});
