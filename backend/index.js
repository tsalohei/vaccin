const express = require('express')
const app = express()
const fs = require('fs')

const { Sequelize } = require('sequelize')
const orders = require('./models/orders')
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

const parseOrder = async (data) => {
    
    await db.orders.sync()

    try {     
        db.orders.bulkCreate(data)
            
    } catch (error) {
        console.error('Unable to save order data', error)
    }
    console.log('save done sucessfully')
    
}

const parseVaccination = async (entry) => {
    
    /*
    await db.vaccinations.sync()

      
    try {
        db.vaccinations.create({ id: entry['vaccination-id'], gender: entry.gender, 
        sourceBottle: entry.sourceBottle, injected: entry.vaccinationDate })
    } catch (error) {
        console.error('Unable to save vaccination data', error)
    }
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

    /*
    i = 0;
    for (const entry of jsonArray) {    
        if (process.argv[2] === 'order') {
            parseOrder(entry);
        } else if (process.argv[2] === 'vaccination') {
            parseVaccination(entry);
        }
        i++;
        if (i > 1) {
            console.log('NYT TULI BREAK VASTAAN!!!!')
            break;
        }
    }
    */
   /*
   //KOKEILLAAN KÄSITELLÄ VAIN EKA RIVI JSONARRAYSTÄ
   
   if (process.argv[2] === 'order') {
    parseOrder(jsonArray[0])
    //parseOrder(jsonArray[1])

   } 
   console.log('ARRAYN EKA RIVI')
   console.log(jsonArray[0])
   //console.log(jsonArray[1])
   */
 
    parseOrder(jsonArray)

  
}


app.get('/', (request, response) => {
 
  response.send('<h1>Hello World</h1>')
})

const unknownEndpoint = (request, response, next) => {
    response.status(404).send({ error: 'unknown endpoint' })
}  

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = db
