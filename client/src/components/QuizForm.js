import React, {Component} from "react";
import "./QuizForm.css";
import { button } from "reactstrap";


const QuizArray = [
  {
      title: '',
      question: '',
      answer: '',
      choiceA: '',
      choiceB: '',
      choiceC: '',
      choiceD: '',
    }
  ];

  class QuizForm extends Component {

    constructor() {
      super();
      this.state = {
        Quiz: QuizArray
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault();
      const
      { Quiz } = this.state,
      title = this.refs.title.value,
      question = this.refs.question.value,
      answer = this.refs.answer.value,
      choiceA = this.refs.choiceA.value,
      choiceB = this.refs.choiceB.value,
      choiceC = this.refs.choiceC.value,
      choiceD = this.refs.choiceD.value
      this.setState({
        Quiz: [...Quiz, {
          title,
          question,
          answer,
          choiceA,
          choiceB,
          choiceC,
          choiceD
        }]
      }, () => {
        this.refs.title.value = '';
        this.refs.question.value = '';
        this.refs.answer.value = '';
        this.refs.choiceA.value = '';
        this.refs.choiceB.value = '';
        this.refs.choiceC.value = '';
        this.refs.choiceD.value = '';
      });
    }

    render() {
      const { Quiz } = this.state;
      console.log('message',this.state.Quiz);
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
            {Quiz.map((Quiz) =>
            <li> {` ${Quiz.question} ${Quiz.answer} ${Quiz.choiceA} ${Quiz.choiceB} ${Quiz.choiceC} ${Quiz.choiceD} `}</li>

            )}
          </ul>
          </div>
          </div>
          
        
        </div>
      )
    }
  }

export default QuizForm;
