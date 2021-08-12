import React, { useState, useEffect } from 'react' 

import DateFilter from './components/DateFilter'
import Orders from './components/Orders'
import Vaccinations from './components/Vaccinations'
import dataService from './services/dataService'

const App = () => {
  const [orders, setOrders] = useState([])
  const [vaccinations, setVaccinations] = useState([])
  const [endDate, setEndDate] = useState(new Date())
  
  console.log(endDate)

  useEffect(() => {

    const fetchData = async () => {
      dataService(`orders?date=${endDate.getTime()}`).then(response => setOrders(response))
      dataService(`vaccinations?date=${endDate.getTime()}`).then(response => setVaccinations(response))
    }    

    fetchData()

  }, [endDate])

  return (
    <div>
      <h1>Vaccine orders and vaccinations</h1>  
      <DateFilter setEndDate={setEndDate} endDate={endDate}/>
      <Orders orders={orders}/>
      <Vaccinations vaccinations={vaccinations}/>
    </div>
  )
}

export default App