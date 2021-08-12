import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Doses from './Doses'

describe('Doses', () => {

  test('renders content', () => {
    const doses = 4
  
    const component = render(
      <Doses doses={doses} />
    )
  
    expect(component.container).toHaveTextContent(
      'Total amount of vaccine doses arrived by selected date (one bottle has many doses): 4'
    )
  })
})