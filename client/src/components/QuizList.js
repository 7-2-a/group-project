import React from 'react';
import "./QuizList.css";
import "./DisplayQuiz";


/*The parameters listed will replace the Name, Description and link once values are added*/
const QuizList = (/*{QuizName}, {QuizLink}*/) => (
  <div className="QuizListContainer">
  <div className="QuizList">
  <div className="QuizTitle">Title </div>
  <div className="QuizLink" ><a href="/ViewQuiz">TAKE QUIZ</a></div>
</div>
  </div>
)

export default QuizList;
