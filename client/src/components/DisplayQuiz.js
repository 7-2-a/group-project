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
       questions: res.data[0].questions
     })
   }).catch((err) => {
     console.log(err)
   })
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
                   <ul>
                    <div className="options"><label>{q.opt1}<input className="opt1" value="" type="radio" /*checked={this.state.selectedOption === 'opt1'}*//></label></div><br/>
                    <div className="options"><label>{q.opt1}<input className="opt2" value="" type="radio"/></label></div><br/>
                    <div className="options"><label>{q.opt1}<input className="opt3" value="" type="radio"/></label></div><br/>
                    <div className="options"><label>{q.opt1}<input className="opt4" value="" type="radio"/></label></div><br/>
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



export default DisplayQuiz;
