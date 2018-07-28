// module imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//added by jowen
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const quizs =  require('./routes/api/quizs');

const app = express();


// PRODUCTION ONLY
//app.use(express.static(path.join(__dirname, 'client/build')));

// app middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/api/quizs', quizs)

// PRODUCTION ONLY
 /*app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname + '/client/build/index.html'));
 });*/

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port)

//connect to mongodb
mongoose.connect(db)
  .then(() => console.log('MongoDB connected ...'))
  .catch(err => console.log(err));

module.exports = app;
