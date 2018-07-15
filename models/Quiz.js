const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const QuizSchema = new Schema({
   title: {
     type: String,
     required: true
   },
   date: {
     type: Date,
     default: Date.now
   }
});

//if we need to add to our schema later
//look at these urls http://mongoosejs.com/docs/guide.html
//add specifically http://mongoosejs.com/docs/api.html#schema_Schema-add

module.exports = Quiz = mongoose.model('quiz', QuizSchema);
