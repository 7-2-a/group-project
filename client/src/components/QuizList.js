import React from 'react';
import "./QuizList.css";


/*The parameters listed will replace the Name, Description and link once values are added*/
const QuizList = (/*{QuizName}, {QuizLink}*/) => (
  <div className="QuizListContainer">
  <div className="QuizList">
  <div className="QuizTitle">Title </div>
  <div className="QuizLink" >Take quiz </div>
</div>
  </div>
)

export default QuizList;
