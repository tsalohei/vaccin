import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Orders from './Orders'

describe('Orders', () => {

    test('renders content', () => {
      const orders = [
        {
          id: 'd9dd7031-cacf-44db-ae70-53f5548d3615',
          healthCareDistrict: 'TYKS', 
          orderNumber: 456,
          responsiblePerson: 'Lumi Virta', 
          injections: 3,
          arrived: '2021-04-08T07:17:53.696013Z',
          vaccine: 'antiqua'
        }
      ]
  
      const component = render(
        <Orders orders={orders} />
      )
  
      expect(component.container).toHaveTextContent(
        'Total amount of orders: 1'
      )
    })
})
  