import React, {Component} from "react";
import "./QuizForm.css";
import { button } from "reactstrap";


const QuestionArray = [];
const Quiz = {
  title: {},
  Questions: QuestionArray
};

  class QuizForm extends Component {

    constructor() {
      super();
      this.state = {
        Questions: QuestionArray,
        Quiz: Quiz
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault();
      const
      { Questions, Quiz } = this.state,
      //{ Quiz } = this.state,
      title = this.refs.title.value,
      question = this.refs.question.value,
      answer = this.refs.answer.value,
      choiceA = this.refs.choiceA.value,
      choiceB = this.refs.choiceB.value,
      choiceC = this.refs.choiceC.value,
      choiceD = this.refs.choiceD.value
      this.setState({
        Quiz: {
          tile: title,
          Questions: Questions
        },

        Questions: [...Questions, {

          question,
          answer,
          choiceA,
          choiceB,
          choiceC,
          choiceD

      }]
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
      const { Questions, Quiz } = this.state;
      //const { Quiz } = this.state;
      console.log('message', Quiz);
      console.log('message', Questions);
      return (
        <div>
          <div id="titleForm">
          <h2>Create Quiz</h2>
          <input type="text" ref="title" placeholder="title" /><br/>
        </div>
          <div className="grid">

          <form onSubmit={this.handleSubmit}>
            <div className="col-2-3">
            <h1>Question</h1>

            <input type="text" ref="question" placeholder="question" /><br/>
            <input type="text" ref="answer" placeholder="answer" /><br/>
            <input type="text" ref="choiceA" placeholder="choiceA" /><br/>
            <input type="text" ref="choiceB" placeholder="choiceB" /><br/>
            <input type="text" ref="choiceC" placeholder="choiceC" /><br/>
            <input type="text" ref="choiceD" placeholder="choiceD" /><br/>

            <button block type="submit">Add Question to Quiz</button>
          </div>
          </form>
          <div className="col-1-3">
          <h2>Existing Questions</h2>
          <ul>
            {Questions.map((Q) =>
            <li> Question:{` ${Q.question} `}<br></br>
                 Answer:{` ${Q.answer} `}<br></br>
                 Choices: A){` ${Q.choiceA} `}
                          B){` ${Q.choiceB} `}
                          C){` ${Q.choiceC} `}
                          D){` ${Q.choiceD} `}
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
