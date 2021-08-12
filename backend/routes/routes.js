const router = require('express').Router()
const controller = require('../controllers/controller')

router.get('/', (request, response) => {
  response.send('<h1>Hello API</h1>')
})

router.get('/orders', async (request, response) => {
  const orders = await controller.findAllOrders(request.query.date)
  response.json(orders)
})

router.get('/vaccinations', async (request, response) => {
  const vaccinations = await controller.findAllVaccinations(request.query.date)
  response.json(vaccinations)
})

module.exports = router