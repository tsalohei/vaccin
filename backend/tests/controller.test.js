const controller = require('../controllers/controller')

jest.mock('../models/orders', () => () => {
    const SequelizeMock = require('sequelize-mock')
    const dbMock = new SequelizeMock()
  
    return dbMock.define('orders', {
      id: '1a2b3c',
      healthCareDistrict: 'TYKS', 
      orderNumber: 456,
      responsiblePerson: 'Lumi Virta', 
      injections: 3,
      arrived: null,
      vaccine: 'antiqua'
    })
})

describe('orders', () => {
  it('can be found from database', async () => {
    const orders = await controller.findAllOrders()
    expect(orders.length).toEqual(1)
    expect(orders[0].responsiblePerson).toEqual('Lumi Virta')
  })
})  