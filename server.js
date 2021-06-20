// require statements
const express = require('express')
const { join } = require('path')

// instantiate express
const app = express()

// middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// connect routes
app.use(require('./routes'))

// listen to port
app.listen(process.env.PORT || 3000)