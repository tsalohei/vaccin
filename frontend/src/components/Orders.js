import React from 'react'

const Orders = ({ orders }) => {
  return (
    <div>
      <p>Total amount of orders (bottles) arrived by selected date: { orders.length } </p>
    </div>
  ) 
}

export default Orders