const express = require('express');
const router = express.Router();

//Quiz Model
const Quiz = require('../../models/Quiz');
const Short = require('../../models/ShortQuestion');
const Multiple = require('../../models/MultipleQuestion');
const TrueFalse = require('../../models/TrueFalseQuestion');

// @GET api/quizs
// @desc Get All Quizs
// @access  Public
router.get('/', (req, res) => {
   Quiz.find()
    .sort({ date: -1 })
    .then(quizs => res.json(quizs))
});

// @POST api/quizs
// @desc  Create A Quiz
// @access  Public
router.post('/', (req, res) => {
  const newQuiz = new Quiz ({
    title: req.body.title,
    questions: [req.body.questions]
  })

  newQuiz.save().then(quiz => res.json(quiz));
});

// @DELETE api/quizs/:id
// @desc  Delete A Quiz
// @access  Public
router.delete('/:id', (req, res) => {
  Quiz.findById(req.params.id)
    .then(quiz => quiz.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;
