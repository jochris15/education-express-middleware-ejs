// Setup express
const express = require('express')
const router = require('./routes')
const app = express()
const port = 3000

// template engine, default folder is 'views'
app.set('view engine', 'ejs')

// Middleware to parse data from html form
app.use(express.urlencoded({ extended: true }))

// Middleware to use router
app.use(router)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})