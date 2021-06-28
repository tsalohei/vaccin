const express = require('express')
const app = express()

let antiqua = [
    {"id":"6da3a8cf-c923-4c77-8f80-c69c935fe1df","orderNumber":1,"responsiblePerson":"Joonatan Siloma","healthCareDistrict":"KYS","vaccine":"Antiqua","injections":4,"arrived":"2021-01-11T08:59:28.642790Z"},
    {"id":"1251aa6c-ebaf-4e33-89d3-d6f210497b94","orderNumber":2,"responsiblePerson":"Tarvo Puro","healthCareDistrict":"TAYS","vaccine":"Antiqua","injections":4,"arrived":"2021-01-10T01:29:26.642846Z"},
    {"id":"c00e2610-5bd9-4f84-9597-1e7febfae62c","orderNumber":4,"responsiblePerson":"Linda Väisälä","healthCareDistrict":"HYKS","vaccine":"Antiqua","injections":4,"arrived":"2021-01-08T05:33:37.642901Z"},
    {"id":"e8de1bb1-490c-48b7-bddd-c4b6d4ed835c","orderNumber":5,"responsiblePerson":"Alfred Kalliala","healthCareDistrict":"TAYS","vaccine":"Antiqua","injections":4,"arrived":"2021-01-27T16:02:09.642922Z"},
    {"id":"6f4dac20-374e-42d5-9403-f4e0c8e7bedb","orderNumber":8,"responsiblePerson":"Miikka Kulomäki","healthCareDistrict":"HYKS","vaccine":"Antiqua","injections":4,"arrived":"2021-03-05T03:51:27.643049Z"},
    {"id":"b546d626-5d04-485d-856c-6d57ea3ae74a","orderNumber":10,"responsiblePerson":"Lempi Särkilahti","healthCareDistrict":"KYS","vaccine":"Antiqua","injections":4,"arrived":"2021-03-04T08:36:44.643107Z"},
    {"id":"37940c46-8016-45f6-b02c-9480ea78d88b","orderNumber":11,"responsiblePerson":"Kaappo Kuusisto","healthCareDistrict":"HYKS","vaccine":"Antiqua","injections":4,"arrived":"2021-01-06T02:53:22.643128Z"}
]


app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
})

app.get('/api/antiqua', (request, response) => {
  response.json(antiqua)
})

const unknownEndpoint = (request, response, next) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})