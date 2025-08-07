import { render, screen, fireEvent } from '@testing-library/react'

import Example from './example'

describe('Greeting Component', () => {
  it('renders the correct greeting message', () => {
    render(<Example name="World" />)

    const headingElement = screen.getByText(/Hello, World!/i)

    expect(headingElement).toBeInTheDocument()
  })

  it('displays the button', () => {
    render(<Example name="Test" />)
    const buttonElement = screen.getByRole('button', { name: /click me/i })

    expect(buttonElement).toBeInTheDocument()
  })

  it('handles button click (example of interaction)', () => {
    const mockOnButtonClick = jest.fn()

    render(<Example name="User" onButtonClick={mockOnButtonClick} />)
    const buttonElement = screen.getByRole('button', { name: /click me/i })

    // Simulate a click event
    fireEvent.click(buttonElement)

    expect(mockOnButtonClick).toHaveBeenCalledTimes(1)
  })
})
