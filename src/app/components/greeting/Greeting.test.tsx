import { render, screen, fireEvent } from '@testing-library/react'

import Greeting from './Greeting'

describe('Greeting Component', () => {
  it('renders the correct greeting message', () => {
    render(<Greeting name="World" />)

    const headingElement = screen.getByText(/Hello, World!/i)

    expect(headingElement).toBeInTheDocument()
  })

  it('displays the button', () => {
    render(<Greeting name="Test" />)
    const buttonElement = screen.getByRole('button', { name: /click me/i })

    expect(buttonElement).toBeInTheDocument()
  })

  it('handles button click (example of interaction)', () => {
    const mockOnButtonClick = jest.fn()

    render(<Greeting name="User" onButtonClick={mockOnButtonClick} />)
    const buttonElement = screen.getByRole('button', { name: /click me/i })

    // Simulate a click event
    fireEvent.click(buttonElement)

    expect(mockOnButtonClick).toHaveBeenCalledTimes(1)
  })
})
