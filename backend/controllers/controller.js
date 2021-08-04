const db = require('../models')

const all_orders = db.orders
const all_vaccinations = db.vaccinations

const findAllOrders = async () => {
    const orders = await all_orders.findAll()
    return orders
}

const findAllVaccinations = async () => {
    const vaccinations = await all_vaccinations.findAll()
    return vaccinations
}
module.exports = {
    findAllOrders,
    findAllVaccinations
}
