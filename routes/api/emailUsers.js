let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
let emailUser = mongoose.model('emailUser');

router.post('/register', ((req, res, next) => {
  let newEmailUser = new emailUser();
  newEmailUser.email = req.body.email;
  newEmailUser.setPassword(req.body.password);
  newEmailUser.save((err) => {
    if(err) {
      res.send(err);
    } else {
      res.json({token: newEmailUser.generateJWT()})
    }
  })
}));

router.post('/login', ((req, res) => {
  emailUser.findOne({email: req.body.email}, ((err, user) => {
    if(err) {
      res.sendStatus(500)
    } else {
      if(user.validatePassword(req.body.password)) {
        res.json({token: user.generateJWT()})
      } else {
        res.json('Incorrect Password')
      }

    }
  }))
}))

module.exports = router;
