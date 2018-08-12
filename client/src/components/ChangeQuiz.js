import React, { Component } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash'
import "./DisplayQuiz.css";

const test =[];
class ChangeQuiz extends Component {
state = {}


 componentDidMount(){
   axios.get(`/api/quizs/${window.location.search.slice(4)}`).then((res) => {
     console.log(res);
     this.setState({
       title: res.data[0].title,
       questions: res.data[0].questions,
       id: res.data[0]._id
     })
   }).catch((err) => {
     console.log(err)
   })
 }

 setValue(e) {
   this.setState({[e.target.name]: e.target.value});
   //console.log(this.state);
 }

 updateQuizQuestion(q) {
   this.setState({
     originalQuestion: q
   }, () => {
     console.log(this.state);
     axios.put(`/api/quizs/${window.location.search.slice(4)}`, this.state)
     .then(() => console.log(this.state)).then(() => { window.location.reload();
     })
     console.log(q);
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

                   <ul>
                   <div>
                       <input placeholder={q.question} name='question' onChange={(e) => this.setValue(e)}/>
                   </div>
                   <div>
                       <input placeholder={q.answer} name="answer" onChange={(e) => this.setValue(e)}/>
                   </div>
                   <div>
                       <input placeholder={q.opt1} name="opt1" onChange={(e) => this.setValue(e)}/>
                   </div>
                   <div>
                       <input placeholder={q.opt2} name="opt2" onChange={(e) => this.setValue(e)}/>
                   </div>
                   <div>
                       <input placeholder={q.opt3} name="opt3" onChange={(e) => this.setValue(e)}/>
                   </div>
                   <div>
                       <input placeholder={q.opt4} name="opt4" onChange={(e) => this.setValue(e)}/>
                   </div>
                   <div>
                    <button onClick={() => this.updateQuizQuestion(q.question)}>Update Question</button>
                   </div>
                   </ul>
                 </div>
               ))}
             </div>
           ))}
         </div>
       )}
     </span>
   );
 }


}



export default ChangeQuiz;
