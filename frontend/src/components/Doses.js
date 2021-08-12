import React from 'react'

const Doses = ({ doses }) => {
  return (
    <div>
      <p>Total amount of vaccine doses arrived by selected date (one bottle has many doses): { doses } </p>
    </div>
  ) 
}

export default Doses