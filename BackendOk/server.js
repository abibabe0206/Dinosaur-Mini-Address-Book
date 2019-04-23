// import all the needed tools
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

 const infoDetails = require('./routes/api/infoDetails');
 const signinDetails = require('./routes/api/loginDetails');



// init our express into a var called app
const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// Cors 
app.use(cors());

// Use Routes
const baseURL = '/api';
app.use(baseURL + '/informations', infoDetails);
app.use(baseURL + '/user', signinDetails);




// Using mlab.com for my mongoDB
// DB Config
const db = require('./config/keys').mongoURI;

// Now connecting to mongo
mongoose
.connect(db)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));


// var for port to use
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));