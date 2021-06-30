const express = require('express')
const app = express()
const fs = require('fs')

//database stuff
const { Sequelize } = require('sequelize')
const order = require('./models/orders')
const db = {}
const sequelize = new Sequelize('postgres://user:example@localhost:5432/user')


const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }    
}
connectDb()

db.sequelize = sequelize
db.Sequelize = Sequelize

db.orders = require('./models/orders')(sequelize, Sequelize)
db.vaccinations = require('./models/vaccinations')(sequelize, Sequelize)


const parseOrder = (entry) => {   
    const newOrder = db.orders.build({ id: entry.id, orderNumber: entry.orderNumber, 
        healthCareDistrict: entry.healthCareDistrict, responsiblePerson: entry.responsiblePerson,
        injections: entry.injections, arrived: entry.arrived, vaccine: entry.vaccine
    })
    /*
    console.log(newOrder instanceof db.orders); // true
    console.log(newOrder.id)
    console.log(newOrder.orderNumber)
    console.log(newOrder.healthCareDistrict)
    console.log(newOrder.responsiblePerson)
    console.log(newOrder.injections)
    console.log(newOrder.arrived)
    console.log(newOrder.vaccine)
    */

}

const parseVaccination = (entry) => {
    const newVaccination = db.vaccinations.build({ id: entry['vaccination-id'], gender: entry.gender, 
        sourceBottle: entry.sourceBottle, injected: entry.vaccinationDate })
    /*   
    console.log(newVaccination.id)
    console.log(newVaccination.gender)
    console.log(newVaccination.sourceBottle)
    console.log(newVaccination.injected)
    */
}

if (process.argv.length > 3) {
    console.log(`Parsing ${process.argv[3]}`)

    const rawData = fs.readFileSync(process.argv[3], 'utf-8')
    const jsonArray = rawData.split("\n").map(line => {
        console.log('input ' + line)
        return JSON.parse(line)
    })
    console.log(`Parsed ${jsonArray.length} entries`)

    jsonArray.forEach(entry => {
        if (process.argv[2] === 'order') {
            parseOrder(entry);
        } else if (process.argv[2] === 'vaccination') {
            parseVaccination(entry);
        }
    });
}


app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
})

app.get('/api/antiqua', (request, response) => {
  //response.json(antiqua)
})

const unknownEndpoint = (request, response, next) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})