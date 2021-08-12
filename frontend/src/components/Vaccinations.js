import React from 'react'

const Vaccinations = ({ vaccinations }) => {
  return (
    <div>
      <p>Total amount of vaccinations injected by selected date: { vaccinations.length } </p>
    </div>
  )
}

export default Vaccinations