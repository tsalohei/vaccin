import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

const ProducerFilter = ( {setProducer, producer}) => {
  const options = [
    { value: 'all', label: 'All' },
    { value: 'antiqua', label: 'Antiqua' },
    { value: 'solarbuddhica', label: 'SolarBuddhica' },
    { value: 'zerpfy', label: 'Zerpfy' },
  ] 

  return (
    <div className='react-dropdown'>
      <p>Select producer to filter data:</p>
      <Dropdown options={options} onChange={setProducer} value={producer} placeholder="Select an option" />
    </div>
  ) 
}

export default ProducerFilter