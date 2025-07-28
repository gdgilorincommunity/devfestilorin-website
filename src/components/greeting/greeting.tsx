import React from 'react'

interface GreetingProps {
  name: string
  onButtonClick?: () => void
}

export default function Greeting({ name, onButtonClick }: GreetingProps) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  )
}
