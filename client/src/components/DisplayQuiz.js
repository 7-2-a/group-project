import React, { Component } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash'
import "./DisplayQuiz.css";


class DisplayQuiz extends Component {
state = {}

 componentDidMount(){
   axios.get(`/api/quizs/${window.location.search.slice(4)}`).then((res) => {
     console.log(res);
     this.setState({
       title: res.data[0].title,
       questions: res.data[0].questions,
       grade:[],
       thegrade: ""
     })
   }).catch((err) => {
     console.log(err)
   })
 }



buildGrade(e, answer, i) {
  if(e.target.value === answer) {
    this.state.grade.push(1)
    //this.setState({grade[i]: 1})
  } else {
    this.state.grade.push(0)
    //this.setState({grade[i]: 0})
  }
  console.log(i)
  console.log(this.state.grade)
}

returnGrade() {
  var total = 0;
  for(let i = 0; i < this.state.grade.length; i++) {
    total += this.state.grade[i]
  }
  var avg = ((total/this.state.grade.length) * 100) +"%" ;
  console.log(avg)
  this.setState({thegrade: avg})
}


 render() {
   console.log(this.state.title);
   console.log(this.state.questions);

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
                   <select  name="userI" onChange={(e) => this.buildGrade(e, q.answer, i)}>
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
