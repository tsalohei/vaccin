import React, { useState, useEffect } from 'react' 

import DateFilter from './components/DateFilter'
import ProducerFilter from './components/ProducerFilter'
import Orders from './components/Orders'
import Doses from './components/Doses'
import Vaccinations from './components/Vaccinations'
import dataService from './services/dataService'

const App = () => {
  const [orders, setOrders] = useState([])
  const [doses, setDoses] = useState(null)
  const [vaccinations, setVaccinations] = useState([])
  const [endDate, setEndDate] = useState(new Date())
  const [producer, setProducer] = useState({value: "all", label: "All"})
  
  //console.log(endDate)

  useEffect(() => {

    const fetchData = async () => {
      dataService(`orders?date=${endDate.getTime()}&producer=${producer['value']}`).then(response => setOrders(response))
      dataService(`doses?date=${endDate.getTime()}`).then(response => setDoses(response))
      dataService(`vaccinations?date=${endDate.getTime()}`).then(response => setVaccinations(response))
    }    

    fetchData()

  }, [endDate, producer])

  return (
    <div>
      <h1>Vaccine orders and vaccinations</h1>  
      <h2>Filters</h2>
      <DateFilter setEndDate={setEndDate} endDate={endDate}/>
      <ProducerFilter setProducer={setProducer} producer={producer}/>
      <h2>Data</h2>
      <Orders orders={orders}/>
      <Doses doses={doses}/>
      <Vaccinations vaccinations={vaccinations}/>
    </div>
  )
}

export default App