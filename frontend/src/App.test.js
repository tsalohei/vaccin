import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {

  test('renders header', async () => {
    const component = render(<App />)
  
    expect(component.container).toHaveTextContent(
      'Vaccine orders and vaccinations')

    expect(component.container).toHaveTextContent(
      'Total amount of orders (bottles)'
    )  
      
    expect(component.container).toHaveTextContent(
      'Total amount of vaccinations'
    )  
  })
})