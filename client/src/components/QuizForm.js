import React from 'react';
import axios from 'axios';
import "./QuizForm.css";

const test = [];

class QuizForm extends React.Component {
    setValue(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    createQuizQuestion() {
        let formDetails = this.state;
        test.push(formDetails);
        }
    createTest() {
      let Quiz = {
        title: this.state.title,
        questions: test
      }
      axios.post('/api/quizs', {
        title: Quiz.title,
        questions: Quiz.questions
      })
        .then(function (response) {
          console.log(response)
        })
        .then(function(error) {
          console.log(error)
        })
    }
    render() {
        return (
            <div>
              <div id="titleForm">
                <h2 className="Titles">Create Quiz</h2>
                  <input placeholder="title" name="title" onChange={(e) => this.setValue(e)} />
              </div>
              <div id="grid">
                <div className="Form">
              <div className="col-2-3">
              <h2 className="Titles">Question</h2>
              <div>
                  <input placeholder="question" name="question" onChange={(e) => this.setValue(e)} />
              </div>
              <div>
                  <input placeholder="answer" name="answer" onChange={(e) => this.setValue(e)} />
              </div>
              <div>
                  <input placeholder="opt1" name="opt1" onChange={(e) => this.setValue(e)} />
              </div>
              <div>
                  <input placeholder="opt2" name="opt2" onChange={(e) => this.setValue(e)} />
              </div>
              <div>
                  <input placeholder="opt3" name="opt3" onChange={(e) => this.setValue(e)} />
              </div>
              <div>
                  <input placeholder="opt4" name="opt4" onChange={(e) => this.setValue(e)} />
              </div>
              <div>
                  <button onClick={() => this.createQuizQuestion()}>Add Question</button>
                  <button onClick={() => this.createTest()}>Add Test</button>
              </div>
            </div>
          </div>

            <div className="col-1-3">
            <h2 className="Titles">Existing Questions</h2>
            <ul>
              {test.map((Q) =>
              <li> Question:{` ${Q.question} `}<br></br>
                   Answer:{` ${Q.answer} `}<br></br>
                   Choices: A){` ${Q.opt1} `}
                            B){` ${Q.opt2} `}
                            C){` ${Q.opt3} `}
                            D){` ${Q.opt4} `}
              </li>
            )}
          </ul>
            </div>
            </div>
            </div>
        )

    }
}
export default QuizForm
