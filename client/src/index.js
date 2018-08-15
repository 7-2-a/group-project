//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//Refactored for cleaner code
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();