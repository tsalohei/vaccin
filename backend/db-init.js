console.log('HALLOOTA HALLOO VAAN')


const fs = require('fs')
const { Sequelize } = require('sequelize')

const db = {}
const sequelize = new Sequelize('postgres://user:example@localhost:5432/user')

const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
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

const parseVaccination = async (data) => {
    
    await db.vaccinations.sync()

    try {
        db.vaccinations.bulkCreate(data)
    } catch (error) {
        console.error('Unable to save vaccination data', error)
    }
    
}

if (process.argv.length > 3) {
    console.log(`Parsing ${process.argv[3]}`)

    const rawData = fs.readFileSync(process.argv[3], 'utf-8')
    const jsonArray = rawData.split("\n").map(line => {
        console.log('input ' + line)
        return JSON.parse(line)
    })
    console.log(`Parsed ${jsonArray.length} entries`)

    if (process.argv[2] === 'order') {
        parseOrder(jsonArray)
    } else if (process.argv[2] === 'vaccination') {  

        const newJsonArray = jsonArray.map(({
            ['vaccination-id']: id,
            ...rest
        }) => ({
            id,
            ...rest
        }))  
        
        const anotherJsonArray = newJsonArray.map(({
            vaccinationDate: injected,
            ...rest
        }) => ({
            injected,
            ...rest
        }))  

        parseVaccination(anotherJsonArray);
    }
}

//module.exports = db
