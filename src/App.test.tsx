import { describe, it } from 'vitest'
import { screen, render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('Renders Title', () => {
    // Arrange
    render(<App />)
    // Act (user Interaction)
    // Expected
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello World'
    )
  })
})
