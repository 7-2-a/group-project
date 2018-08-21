import React, { Component } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash'
import "./DisplayQuiz.css";


class DisplayQuiz extends Component {
state = {}

 componentDidMount(){
   axios.get(`/api/quizs/${window.location.search.slice(4)}`).then((res) => {

     this.setState({
       title: res.data[0].title,
       questions: res.data[0].questions,
       grade: 0,
       totalQuestions: 0,
       thegrade: ""
     }, () => {

     })
   }).catch((err) => {
     console.log(err)
   })
 }

buildGrade(e, answer) {
  if(e.target.value === answer) {
    this.setState({
      grade: (this.state.grade + 1),
      totalQuestions: (this.state.totalQuestions + 1)
    })
  } else {
    this.setState({
      totalQuestions: (this.state.totalQuestions + 1)
    })
  }
}

returnGrade() {
  let percentage = (this.state.grade / this.state.totalQuestions);
  let total = `${(100 * percentage)}%`;
  this.setState({
    thegrade: total
  })
}


 render() {
   return(
     <span>
       {(this.state.questions) && (
         <div className="quizContainer">
           <div className="Qname">Quiz: {(this.state.title) ? this.state.title : 'no data'}</div>
           {this.state.questions.map((question, index) => (
             <div key={index}>
               {question.map((q, i) => (
                 <div key={i}>
                   <p className="Question">{q.question}?</p>
                   <select  name="userI" onChange={(e) => this.buildGrade(e, q.answer)}>
                    <option name="blank" value="blank"></option>
                    <option name="opt1" value={q.opt1}>{q.opt1}</option>
                    <option name="opt2" value={q.opt2}>{q.opt2}</option>
                    <option name="opt3" value={q.opt3}>{q.opt3}</option>
                    <option name="opt4" value={q.opt4}>{q.opt4}</option>
                   </select>
                 </div>
               ))}
               <button onClick={() => this.returnGrade()}>Grade Test</button><br></br>
               <span>{this.state.thegrade}</span>
             </div>

           ))}
         </div>
       )}
     </span>
   );
 }
}

export default DisplayQuiz;
