// module imports
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
// const passport = require('passport');
// const keys = require('./config/keys');

// require('./services/passport');

//connect to mongodb
mongoose.connect("mongodb://jowen:abc123@ds125912.mlab.com:25912/group-project-db")

require('./models/User');
require('./models/emailUser');

//added by jowen
const quizs = require('./routes/api/quizs');
const emailUsers = require('./routes/api/emailUsers')

const app = express();

// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000, //30days
//     keys: [keys.cookieKey]
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

//middleware for auth
// require('./routes/api/authRoutes')(app);

// PRODUCTION ONLY
 app.use(express.static(path.join(__dirname, 'client/build')));

// app middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/quizs', quizs);
app.use('/api/emailUsers', emailUsers);

// PRODUCTION ONLY
 app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port);
module.exports = app;
