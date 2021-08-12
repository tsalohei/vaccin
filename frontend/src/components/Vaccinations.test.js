import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Vaccinations from './Vaccinations'

describe('Vaccinations', () => {

  test('renders content', () => {
    const vaccinations = [
      {
        id: 'e01dda3a-9fe6-4ac5-8b81-f3e0d4c3cf84',
        gender: 'female',
        sourceBottle: '5065f281-da69-46ef-b491-ff5eaf7b5642',
        injected: '2021-01-26T01:13:19.701415Z'
      }
    ]
  
    const component = render(
      <Vaccinations vaccinations={vaccinations} />
    )
  
    expect(component.container).toHaveTextContent(
      'Total amount of vaccinations injected by selected date: 1'
    )
  })
})
  