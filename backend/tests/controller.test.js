const controller = require('../controllers/controller')

jest.mock('../models/orders', () => () => {
    const SequelizeMock = require('sequelize-mock')
    const dbMock = new SequelizeMock()
  
    return dbMock.define('orders', {
      id: 'd9dd7031-cacf-44db-ae70-53f5548d3615',
      healthCareDistrict: 'TYKS', 
      orderNumber: 456,
      responsiblePerson: 'Lumi Virta', 
      injections: 3,
      arrived: '2021-04-08T07:17:53.696013Z',
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