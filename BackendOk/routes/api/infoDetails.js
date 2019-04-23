const express = require('express');

const router = express.Router();

// Used Postman to TEST the API 

// Information Model 
const Information = require('../../models/Information');

// @route GET api/information
// @desc Get All information
// @access Public
// req = request
// res = responce
router.get('/', (req, res) => {
    Information.find()
    .then(info => res.json(info))
});

// @route GET api/information/id
// @desc Get All information
// @access Public
// req = request
// res = responce
router.get('/:id', (req, res) => {
  Information.findById(req.params.id, (err, info) => {
    if (err)
      console.log(err);
    else
      res.json(info);
  });
});


// @route POST api/information
// @desc Create an information
// @access Public
// req = request
// res = responce
router.post('/', (req, res) => {
    const newInformation = new Information({
        age: req.body.age,
        family: req.body.family,
        race: req.body.race,
        food: req.body.food
    });

    newInformation.save().then(info => res.json(info));
});


// @route Update api/information/:id
// @desc Update a information
// @access Public
// req = request
// res = responce
router.put('/:id', (req, res) => {
    Information.findById(req.params.id, (err, newInformation) => {
      if(!newInformation)
           return next(new Error('Could not load documents'));
      else {
        newInformation.age = req.body.age;
        newInformation.family = req.body.family;
        newInformation.race = req.body.race;
        newInformation.food = req.body.food;

        newInformation.save().then(newInformation => {
          res.json('Update Done');
        })
        .catch(err => res.status(404).json({
          success: false
         }));
      }
    });
});


// @route DELETE api/information/:id
// @desc Delete a information
// @access Public
// req = request
// res = responce
router.delete('/:id', (req, res) => {
   Information.findById(req.params.id)
   .then(info => info.remove()
     .then(() => res.json({
          success: true
        }))
    )
     .catch(err => res.status(404).json({
         success: false
        }));
   
});

module.exports = router;