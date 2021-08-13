const db = require('../models')
const { Op } = require("sequelize")

const all_orders = db.orders
const all_vaccinations = db.vaccinations

const findAllOrders = async (dateMsec, producer) => {    
  //console.log('ORDER DATE')
  //console.log(new Date(parseInt(dateMsec)))
  //console.log('PRODUCER RECEIVED IN BACKEND')
  //console.log(producer)

  str = '%'
  producerMatch = str.concat(producer)
  
  if (producer == 'all') {
    //console.log('ALL WAS ASKED')
    const orders = await all_orders.findAll({
      where: {
        arrived: {
          [Op.lte]: new Date(parseInt(dateMsec)) 
        } 
      }
    })
    return orders
  } else {
    //console.log('SPECIFIED PRODUCER WAS ASKED;', producer)
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

const findAllDoses = async (dateMsec) => {    
  const orders = await all_orders.findAll({
    where: {
      arrived: {
        [Op.lte]: new Date(parseInt(dateMsec)) 
      } 
    }
  })

  let doses = 0
  orders.forEach(order => doses = doses + order.injections)

  return doses
}

const findAllVaccinations = async (dateMsec) => {  
  //console.log('VACCINATION DATE')
  //console.log(new Date(parseInt(dateMsec)))

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
