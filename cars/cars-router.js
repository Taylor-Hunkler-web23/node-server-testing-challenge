
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
  
  router.post('/',  (req, res) => {
    const car = req.body;
  
    
  
    cars.insert(car)
      .then(car => {
        res.status(201).json(car);
        
      
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  
  
  router.delete('/:id',  (req, res) => {
    const {id} = req.params;
  
    
  
    cars.remove(id)
      .then(removed => {
        res.status(200).json(removed);
        
      
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });



  module.exports= router;