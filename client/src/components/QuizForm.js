import React, {Component} from "react";
import "./QuizForm.css";

class QuizForm extends Component{
  state = {
    title: '',
    question: '',
    answer: '',
    choices: '',
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

  render(){
    return(
      <form  className="form">
        <input name="title" placeholder="quiz title" value={this.state.title} onChange={e => this.change(e)}/><br/>
        <input name="question" placeholder="question" value={this.state.question} onChange={e => this.change(e)}/><br/>
        <input name="answer" placeholder="answer" value={this.state.answer} onChange={e => this.change(e)}/><br/>
        <input name="choices" placeholder="choices" value={this.state.choices} onChange={e => this.change(e)}/><br/>
        <button onClick={e => this.onSubmit(e) }>Submit</button><br/>
      </form>

    );
  }
}

export default QuizForm;
