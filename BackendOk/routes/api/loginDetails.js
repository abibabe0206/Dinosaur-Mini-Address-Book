// Login in this case means to Register a new User

const express = require('express');

const router = express.Router();

// Used Postman to TEST the API 

// LoginInformation Model 
const LoginInformation = require('../../models/LoginInformation');

// @route GET /signinDetails
// @desc Get All signinDetails
// @access Public
// req = request
// res = responce
router.get('/info', (req, res) => {
    LoginInformation.find()
    .then(loginInfo => res.json(loginInfo))
});


// @route POST /signinDetails
// @desc Create an signinDetails
// @access Public
// req = request
// res = responce
router.post('/sigin', (req, res) => {
    const newLoginInformation = new LoginInformation({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

    newLoginInformation.save().then(loginInfo => res.json(loginInfo));
});


// @route POST /loginDetails
// @desc Create an signinDetails
// @access Public
// req = request
// res = responce
router.post('/login', (req, res) => {
   
   const mail = req.body.email;
    const pass = req.body.password;
    LoginInformation.findOne({password: pass, email: mail})
    .then(info  => {
        res.json(info);
    });
 
});


module.exports = router;