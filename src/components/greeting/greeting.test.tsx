import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Greeting from './greeting'

describe('Greeting Component', () => {
  it('renders the correct greeting message', () => {
    render(<Greeting name="World" />)
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })

  it('displays the button', () => {
    render(<Greeting name="World" />)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('handles button click', () => {
    const mockClick = jest.fn()
    render(<Greeting name="World" onButtonClick={mockClick} />)

    const button = screen.getByText('Click Me')
    button.click()

    expect(mockClick).toHaveBeenCalledTimes(1)
  })
})
