const db = require('../models')
const { Op } = require("sequelize")

const all_orders = db.orders
const all_vaccinations = db.vaccinations

const findAllOrders = async (dateMsec, producer) => {    
  str = '%'
  producerMatch = str.concat(producer)
  
  if (producer == 'all') {
    const orders = await all_orders.findAll({
      where: {
        arrived: {
          [Op.lte]: new Date(parseInt(dateMsec)) 
        } 
      }
    })
    return orders
  } else {
    const orders = await all_orders.findAll({
      where: {
        arrived: {
          [Op.lte]: new Date(parseInt(dateMsec)) 
        },
        vaccine: {
          [Op.iLike]: producerMatch
        } 
      }
    })
    return orders
  }
}

const findAllDoses = async (dateMsec, producer) => {   
  const orders = await findAllOrders(dateMsec, producer)
  let doses = 0
  orders.forEach(order => doses = doses + order.injections)

  return doses
}

const findAllVaccinations = async (dateMsec) => {  
  const vaccinations = await all_vaccinations.findAll({
    where: {
      injected: {
        [Op.lte]: new Date(parseInt(dateMsec))
      }
    }
  })   
  return vaccinations
}

module.exports = {
  findAllOrders,
  findAllDoses,
  findAllVaccinations
}
