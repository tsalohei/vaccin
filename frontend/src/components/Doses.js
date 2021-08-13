import React from 'react'

const Doses = ({ doses }) => {
  return (
    <div>
      <p>Total amount of vaccine doses (one bottle has many doses) arrived by selected date and producer: { doses } </p>
    </div>
  ) 
}

export default Doses