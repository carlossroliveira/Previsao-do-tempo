// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react'
import 'jest-styled-components'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
// -------------------------------------------------
// Components
// -------------------------------------------------
import theme from '../../styles/themes/dark'
import { Button } from '../../components/Button'
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../utils/withThemeComponent'

const ButtonWithTheme = WithThemeComponent(Button)

describe('Button Testing', () => {
  it('Should render the button component', () => {
    render(<ButtonWithTheme />)
    expect(screen.getByText(/buscar/i)).toBeInTheDocument()
  })

  it('should render the button component as defined', () => {
    render(<ButtonWithTheme />)
    expect(screen.queryByText(/buscar/i)).toBeDefined()
  })

  it('should render the button component with the right color selected', () => {
    render(<ButtonWithTheme />)
    expect(screen.queryByText(/buscar/i)).toHaveStyle({
      color: theme.color.primary,
    })
  })

  it('should match snapshot', () => {
    const component = render(<ButtonWithTheme />)
    expect(component).toMatchSnapshot()
  })
})
