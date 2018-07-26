import React, {Component} from "react";
import "./QuizForm.css";
import "./AddChoices.js";


class QuizForm extends Component{
  state = {
    title: '',
    question: '',
    answer: '',
    choices: '',
    inputLinkClicked: false,

  }



  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      title: '',
      question: '',
      answer:'',
      choices:''
   });
   this.props.onChange({
     title: '',
     question: '',
     answer:'',
     choices:''
   });
 };

 onClick = e => {
   e.preventDefault();
   this.props.onClick(this.state);
   this.setState({
     inputLinkClicked: true
   })
 }


  render(){
    return(
      <form  className="form">
        <input name="title" placeholder="quiz title" value={this.state.title} onChange={e => this.change(e)}/><br/>
        <input name="question" placeholder="question" value={this.state.question} onChange={e => this.change(e)}/><br/>
        <input name="answer" placeholder="answer" value={this.state.answer} onChange={e => this.change(e)}/><br/>
        <input name="choices" placeholder="choices" value={this.state.choices} onChange={e => this.change(e)}/>
        <br/>


       <input label=""type="text" id="B" name="B"/>
       <button type="button" className="make-button-link" onClick={this.handleAddSecondInput}>
              Add
        </button>
        <button onClick={e => this.onSubmit(e) }>Submit</button><br/>
      </form>

    );
  }
}


export default QuizForm;
