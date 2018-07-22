const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  text: String,
  required: true
});

const QuestionSchema = new Schema ({
  question: {
    type: String,
    required: true
  },
  answer: AnswerSchema,
  answerprompt: [AnswerSchema]

});

// Quiz Schema
const QuizSchema = new Schema({
   title: {
     type: String,
     required: true
   },
   date: {
     type: Date,
     default: Date.now
   },
   questions: [questionSchema]
});

//if we need to add to our schema later
//look at these urls http://mongoosejs.com/docs/guide.html
//add specifically http://mongoosejs.com/docs/api.html#schema_Schema-add

module.exports = Quiz = mongoose.model('quiz', QuizSchema);
