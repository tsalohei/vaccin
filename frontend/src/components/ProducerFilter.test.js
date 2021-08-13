import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ProducerFilter from './ProducerFilter'

//TODO add mock event handler
// https://jestjs.io/docs/mock-functions

describe('ProducerFilter', () => {

  test('renders content', () => {

    const component = render(
      <ProducerFilter setProducer={null} producer={null} />
    )
  
    expect(component.container).toHaveTextContent(
      'Select producer to filter data'
    )
  })
})