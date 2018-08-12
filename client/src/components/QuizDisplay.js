import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';
import "./QuizDisplay.css";


class Data extends Component {
  constructor(props) {
   super(props);

   this.state = {
     array: [ ]
   };

   this.rendertests = this.rendertests.bind(this);
 }

 componentDidMount(){
   axios
     .get('/api/quizs')
     .then(({ data })=> {
       console.log(data);
       this.setState(
         { array: data }
       );
     })
     .catch((err)=> {})
 }

 render() {
   console.log(this.state.array);
   return(
     <div>
       <ul className="list-group" id="listOfQuiz">
          {this.rendertests()}
       </ul>
     </div>
   );
 }

 rendertests() {
   console.log(this.state.array);
   return _.map(this.state.array, test => {
     return (
       <div className="col-1-3">
       <li className="list-group-item" id="items" key={test._id}>
           <a className="link" href={`/ViewQuiz?id=${test._id}`}>
           {test.title}
         </a>
           <p className="date">{test.date}</p>
             <a href={`/UpdateQuiz?id=${test._id}`}><button id="btn2">Update</button></a>
           <button id="btn"
                    /*className="remove-btn"
                    color="danger"
                    size="sm"*/
                    onClick={() => {
                      axios.delete(`/api/quizs/${test._id}`).then((res) => {
                        console.log(res);
                      }).catch((err) => {
                        console.log(err)
                      }).then(() => { window.location.reload();
                      })
                    }}
                  >&times;</button>
           <ul className="list-group" >


           </ul>
       </li>
     </div>
     );
   });
 }
 //puth this script at line 50 to render the quiz questions
//{this.renderQuestions(test)}
 renderQuestions(test) {

    return _.map(test.questions, quiz => {

        return (
          <li className="list-group-item" key={quiz[0].question}>

              <p> {quiz[0].question}</p>
              <ul>

                <li>{quiz[0].opt1}</li>
                <li>{quiz[0].opt2}</li>
                <li>{quiz[0].opt3}</li>
                <li>{quiz[0].opt4}</li>
              </ul>
          </li>

        );

    });
 }

}

export default Data;
