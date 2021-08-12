const db = require('../models')
const { Op } = require("sequelize")

const all_orders = db.orders
const all_vaccinations = db.vaccinations

const findAllOrders = async (dateMsec) => {    
  console.log('ORDER DATE')
  console.log(new Date(parseInt(dateMsec)))

  const orders = await all_orders.findAll({
    where: {
      arrived: {
        [Op.lte]: new Date(parseInt(dateMsec)) 
      } 
    }
  })
  return orders
}


const findAllVaccinations = async (dateMsec) => {  
  console.log('VACCINATION DATE')
  console.log(new Date(parseInt(dateMsec)))

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
  findAllVaccinations
}
