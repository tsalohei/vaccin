import React, { useState, useEffect } from 'react' 

import Orders from './components/Orders'
import Vaccinations from './components/Vaccinations'
import dataService from './services/dataService'

const App = () => {
  const [orders, setOrders] = useState([])
  const [vaccinations, setVaccinations] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      dataService('orders').then(response => setOrders(response))
      dataService('vaccinations').then(response2 => setVaccinations(response2))
    }    

    fetchData()

  }, [])
 
  console.log('render number of orders:', orders.length)
  console.log('render number of vaccinations:', vaccinations.length)

  return (
    <div>
      <h1>Vaccine orders and vaccinations</h1>
      <Orders orders={orders}/>
      <Vaccinations vaccinations={vaccinations}/>
    </div>
  )
}

export default App