import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';

class Data extends Component {
  constructor(props) {
   super(props);

   this.state = {
     array: [ ]
   };

   this.rendertests = this.rendertests.bind(this);
 }

 componentDidMount(){
   axios
     .get('/api/quizs')
     .then(({ data })=> {
       console.log(data);
       this.setState(
         { array: data }
       );
     })
     .catch((err)=> {})
 }

 render() {
   console.log(this.state.array);
   return(
     <div>
       <h3>tests</h3>
       <ul className="list-group">
          {this.rendertests()}
       </ul>
     </div>
   );
 }

 rendertests() {
   console.log(this.state.array);
   return _.map(this.state.array, test => {
     return (
       <li className="list-group-item" key={test._id}>
           {test.title}
           {test.date}
           <ul className="list-group">

              {this.renderIngredients(test)}
           </ul>
       </li>
     );
   });
 }

 renderIngredients(test) {

    return _.map(test.questions, quiz => {

        return (
          <li className="list-group-item" key={quiz[0].question}>

              <p> {quiz[0].question}</p>
              <ul>

                <li>{quiz[0].opt1}</li>
                <li>{quiz[0].opt2}</li>
                <li>{quiz[0].opt3}</li>
                <li>{quiz[0].opt4}</li>
              </ul>
          </li>

        );

    });
 }

}

export default Data;
