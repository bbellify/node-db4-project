const express = require('express')
const helmet = require('helmet')
const recipesRouter = require('./router')

const server = express();

server.use(helmet())
server.use(express.json())

server.use(`/api/recipes`, recipesRouter)


server.use('*', (req, res) => { 
    res.json({ message: 'hi '})
})

module.exports = server

