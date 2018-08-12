// module imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


//added by jowen
const mongoose = require('mongoose');
const quizs = require('./routes/api/quizs');

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30days
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

//middleware for auth
require('./routes/api/authRoutes')(app);

// PRODUCTION ONLY
app.use(express.static(path.join(__dirname, 'client/build')));

// app middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/quizs', quizs);

// PRODUCTION ONLY
app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname + '/client/build/index.html'));
 });

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port);

//connect to mongodb
mongoose
  .connect(keys.mongoURI)
  .then(() => console.log('MongoDB connected ...'))
  .catch(err => console.log(err));

module.exports = app;
