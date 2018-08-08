import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/App';
import Login from './views/Login';
import MakeQuiz from './views/MakeQuiz';
import ViewQuiz from './views/ViewQuiz';
import UpdateQuiz from './views/UpdateQuiz';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



const Index = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/MakeQuiz" component={MakeQuiz} />
      <Route path="/ViewQuiz" component={ViewQuiz} />
      <Route path="/UpdateQuiz" component={UpdateQuiz} />
    </div>
  </Router>
)

ReactDOM.render(<Index />,
document.getElementById('root'));
registerServiceWorker();
