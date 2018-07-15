import React from 'react';
import "./QuizList.css";


/*The parameters listed will replace the Name, Description and link once values are added*/
const QuizList = (/*{QuizName}, {QuizDescription}, {QuizLink}*/) => (
  <div className="QuizListContainer">
  <div className="QuizList">
  <div id="QuizName">Name </div>
  <div id="QuizDescription">Description </div>
  <div id="QuizLink">Take quiz </div>
</div>
  </div>
)

export default QuizList;
