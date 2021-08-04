const router = require('express').Router()
const controller = require('../controllers/controller')

router.get('/', (request, response) => {
    response.send('<h1>Hello API</h1>')
})
/*
router.get('/orders', async (request, response) => {
    const orders = await controller.findAllOrders()
    response.json(orders)
})
*/
module.exports = router