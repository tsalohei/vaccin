import React, { useState, useEffect } from 'react' 

import Orders from './components/Orders'
import dataService from './services/dataService'

const App = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      dataService('orders').then(response => setOrders(response))
    }    

    fetchData()

  }, [])
 
  console.log('render number of orders:', orders.length)

  return (
    <div>
      <h1>Vaccine orders and vaccinations</h1>
      <Orders orders={orders}/>
    </div>
  )
}

export default App