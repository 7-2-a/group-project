import React from "react";
import "./DisplayQuiz.css";


const DisplayQuiz = () => (
    <div className="quizContainer">
    <div className="Qname">Relevant Questions{ /*Title*/ }</div>
    <form>
    <div className="Question"> 1. What are we doing? { /*Question*/ }</div>
      <div>
        <div className="options"><label>Eating lunch<input className="opt1" value="" type="radio" /*checked={this.state.selectedOption === 'opt1'}*//></label></div><br/>
        <div className="options"><label>Building a React App<input className="opt2" value="" type="radio"/></label></div><br/>
        <div className="options"><label>Knitting Mittens<input className="opt3" value="" type="radio"/></label></div><br/>
        <div className="options"><label>Building an igloo<input className="opt4" value="" type="radio"/></label></div><br/>
      </div>
    </form>
    </div>
)


export default DisplayQuiz;
