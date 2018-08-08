const express = require('express');
const router = express.Router();

//Quiz Model
const Quiz = require('../../models/Quiz');


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

router.get('/:id', (req, res) => {
  Quiz.find({_id: req.params.id})
   .sort({ date: -1 })
   .then(quiz => res.json(quiz))
});
// @DELETE api/quizs/:id
// @desc  Delete A Quiz
// @access  Public
router.delete('/:id', (req, res) => {
  Quiz.findById(req.params.id)
    .then(quiz => quiz.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

router.put('/:id', (req, res) => {
  //console.log(req.params.id);
    Quiz.findById(req.params.id, (err, quiz) => {
      console.log(quiz);
      console.log(err);
        if(err) {
            res.send(err)
        } else {
        let items = quiz.questions[0];
        //console.log(items);
        //let matching = items.filter((item => item.question === req.body.question))
        let nonMatching = items.filter((item => item.question != req.body.originalQuestion))
        //console.log(nonMatching)
        let newQuestion = {
          question: req.body.question,
          answer: req.body.answer,
          opt1: req.body.opt1,
          opt2: req.body.opt2,
          opt3: req.body.opt3,
          opt4: req.body.opt4
        }

        nonMatching.push(newQuestion);
        //console.log(quiz);
        quiz.questions = [nonMatching];
        quiz.save((err) => {res.end()})



        }

    })
})


module.exports = router;
