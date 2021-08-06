import React from 'react'

const Orders = ({ orders }) => {
    return (
      <div>
        <p>Total amount of orders (bottles): { orders.length } </p>
      </div>
    ) 
}

export default Orders