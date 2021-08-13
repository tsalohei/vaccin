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
      'Select end date to filter data'
    ) 

    expect(component.container).toHaveTextContent(
      'Select producer to filter data'
    ) 
    
    expect(component.container).toHaveTextContent(
      'Total amount of orders (bottles) arrived by selected date'
    ) 
    
    expect(component.container).toHaveTextContent(
      'Total amount of vaccine doses arrived by selected date (one bottle has many doses)'
    ) 
      
    expect(component.container).toHaveTextContent(
      'Total amount of vaccinations injected by selected date'
    )  
  })
})