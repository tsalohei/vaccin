const db = require('../models')
const { Op } = require('sequelize')

const all_orders = db.orders
const all_vaccinations = db.vaccinations

const findAllOrders = async (dateMsec, producer) => {    

  let query = {
    attributes: ['id', 'injections'],
    where: {
      arrived: {
        [Op.lte]: new Date(parseInt(dateMsec))
      }
    }
  }

  if (producer !== 'all') {
    query.where.vaccine = {
        [Op.iLike]: producer
    } 
  }

  return await all_orders.findAll(query)
}

const findAllDoses = async (dateMsec, producer) => {   
  const orders = await findAllOrders(dateMsec, producer)
  let doses = 0
  orders.forEach(order => doses = doses + order.injections)

  return doses
}

const findAllVaccinations = async (dateMsec, producer) => {  

  let query = {
    attributes: ['id'],
    where: {
      injected: {
        [Op.lte]: new Date(parseInt(dateMsec))
      }
    }
  }

  if (producer !== 'all') {
    query.include = {
      model: db.orders,
      where: {
        vaccine: {
          [Op.iLike]: producer
        }
      }
    }
  }

  return await all_vaccinations.findAll(query)
}

module.exports = {
  findAllOrders,
  findAllDoses,
  findAllVaccinations
}