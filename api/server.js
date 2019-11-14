const express = require('express');

const carsRouter = require('../cars/cars-router.js')

const server = express();

server.use(express.json());

server.use('/cars', carsRouter)

server.get('/', (req, res) => {
  res.status(200).json({ api: 'server running' });
});




  

module.exports = server;
