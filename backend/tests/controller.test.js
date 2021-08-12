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
  }, 
  {
    id: '6077b2ce-d5a6-4ce1-8cad-f3f11126578e',
    healthCareDistrict: 'HYKS', 
    orderNumber: 678,
    responsiblePerson: 'Tiina Tavallinen', 
    injections: 4,
    arrived: '2024-04-08T07:17:53.696013Z',
    vaccine: 'zerpfy'
  })
})

describe('orders', () => {
  it('can be found from database', async () => {
    const orders = await controller.findAllOrders(1628726400000)
    expect(orders.length).toEqual(1)
    expect(orders[0].responsiblePerson).toEqual('Lumi Virta')
  })
})  

describe('doses', () => {
  it('can be calculated from database', async () => {
    const doses = await controller.findAllDoses(1628726400000)
    expect(doses).toEqual(3)
  })
})

jest.mock('../models/vaccinations', () => () => {
  const SequelizeMock = require('sequelize-mock')
  const dbMock = new SequelizeMock()

  return dbMock.define('vaccinations', {
    id: 'e01dda3a-9fe6-4ac5-8b81-f3e0d4c3cf84',
    gender: 'female',
    sourceBottle: '5065f281-da69-46ef-b491-ff5eaf7b5642',
    injected: '2021-01-26T01:13:19.701415Z'
  }, 
  {
    id: 'f4e4fb60-b75d-4469-bf1f-191ef59a3e0d',
    gender: 'male',
    sourceBottle: 'a6779db4-fb58-461b-948d-3dfafdf78e4a',
    injected: '2023-01-26T01:13:19.701415Z'
  })
})

describe('vaccinations', () => {
  it('can be found from database', async () => {
    const vaccinations = await controller.findAllVaccinations(1628726400000)
    expect(vaccinations.length).toEqual(1)
    expect(vaccinations[0].gender).toEqual('female')
  })
})  