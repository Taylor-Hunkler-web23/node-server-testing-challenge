
const express = require('express');

const cars = require('./cars-model.js')

const router = express.Router();

router.get('/', (req, res) => {
    cars.get()
      .then(cars => {
        res.status(200).json(cars);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  

  module.exports= router;