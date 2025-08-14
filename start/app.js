// Setup express
const express = require('express')
const Controller = require('./controllers')
const app = express()
const port = 3000

// endpoint
app.get('/games', Controller.read)
app.get('/games/:id', Controller.detail)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})