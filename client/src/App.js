import React, { Component } from 'react';
import axios from 'axios';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {}
  
  componentDidMount() {
    axios.get('/api/quizs').then((res) => {
      this.setState({
        title: res.data[0].title,
        date: res.data[0].date
      })
    }).catch((err) => {
      console.log(err)
    })
  }
  render() {
    return (
      <span>
        <h1>Title: {this.state.title}</h1>
        <h3>Date: {this.state.date}</h3>
      </span>
    );
  }
}

export default App;
