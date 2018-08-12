//app.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Home from './views/App';
import Login from './views/Login';
import MakeQuiz from './views/MakeQuiz';
import ViewQuiz from './views/ViewQuiz';
import Dashboard from './views/Dashboard';
import UpdateQuiz from './views/UpdateQuiz';
import './index.css';


//Refactored for cleaner code
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/MakeQuiz" component={MakeQuiz} />
            <Route path="/ViewQuiz" component={ViewQuiz} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/UpdateQuiz" component={UpdateQuiz} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
