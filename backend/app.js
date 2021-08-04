const router = require('./routes/routes')
const express = require('express')

const app = express()

const apiUrl = '/api'
app.use(apiUrl, router)

const unknownEndpoint = (request, response, next) => {
    response.status(404).send({ error: 'unknown endpoint' })
}  

app.use(unknownEndpoint)

module.exports = app

//cors, json?