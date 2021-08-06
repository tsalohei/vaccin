import React from 'react'

const Vaccinations = ({ vaccinations }) => {
    return (
      <div>
        <p>Total amount of vaccinations: { vaccinations.length } </p>
      </div>
    )
}

export default Vaccinations