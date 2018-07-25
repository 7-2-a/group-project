import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home';
import Login from './views/Login';
import MakeQuiz from './views/MakeQuiz';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route} from "react-router-dom";

const Index = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/MakeQuiz" component={MakeQuiz} />
    </div>
  </Router>
)

ReactDOM.render(<Index />,
document.getElementById('root'));
registerServiceWorker();
