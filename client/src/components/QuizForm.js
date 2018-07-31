import React, {Component} from "react";
import "./QuizForm.css";

const QuizQuestionArray = [ ];
const QuizTest = {
  title: {},
  QuizQuestions: []
}
//changed questions to QuizQuestions..


  class QuizForm extends Component {

    constructor() {
      super();
      this.state = {
        Quiz: QuizTest,
        QuizQuestions: QuizQuestionArray
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault();
      const
      { QuizQuestions } = this.state,
      title = this.refs.title.value,
      question = this.refs.question.value,
      answer = this.refs.answer.value,
      choiceA = this.refs.choiceA.value,
      choiceB = this.refs.choiceB.value,
      choiceC = this.refs.choiceC.value,
      choiceD = this.refs.choiceD.value
      this.setState({
        Quiz:{
          title: title,
          QuizQuestions:[...QuizQuestions, {
          //title,
          question,
          answer,
          choiceA,
          choiceB,
          choiceC,
          choiceD
        }]
      }
      }, () => {
        //this.refs.title.value = '';
        this.refs.question.value = '';
        this.refs.answer.value = '';
        this.refs.choiceA.value = '';
        this.refs.choiceB.value = '';
        this.refs.choiceC.value = '';
        this.refs.choiceD.value = '';
      });
    }


    render() {
      const { QuizQuestions } = this.state;
      const { Quiz } = this.state;
      console.log('message', Quiz);

      return (
        <div>
          <div id="titleForm">
          <h2 id="titles">Create Quiz</h2>
          <input type="text" ref="title" placeholder="title" /><br/>
        </div>
          <div className="grid">

          <form onSubmit={this.handleSubmit}>
            <div className="col-2-3">
            <h1 id="titles">Question</h1>

            <input type="text" ref="question" placeholder="question" /><br/>
            <input type="text" ref="answer" placeholder="answer" /><br/>
            <input type="text" ref="choiceA" placeholder="choiceA" /><br/>
            <input type="text" ref="choiceB" placeholder="choiceB" /><br/>
            <input type="text" ref="choiceC" placeholder="choiceC" /><br/>
            <input type="text" ref="choiceD" placeholder="choiceD" /><br/>

            <button  type="submit">Add Question to Quiz</button>
          </div>
          </form>
          <div className="col-1-3">
          <h2 id="titles">Existing Questions</h2>
          <ul>
    {QuizQuestions.map((i) =>
    <li>

      Question: {`${i.questions}`}<br></br>
      Answer:{`${i.answer}`},<br></br>
      Choices:{`${i.choiceA}`},
      {`${i.choiceB}`},
      {`${i.choiceC}`},
      {`${i.choiceD}`}<br></br>
      - - - - - - - - - -
    </li>

    )}
  </ul>
          </div>
          </div>


        </div>
      )
    }
  }

export default QuizForm;
