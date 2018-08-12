import React, { Component } from 'react';
import FbLoginButton from './FbLoginButton';
import "./LoginForm.css";


class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
          name: "",
          email: "",
          password: ""
        };
      }

      validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

      handleSubmit = event => {
        event.preventDefault();
      }
      render(){
          return(
            <div id="container">
              <div className="login">
              <form onSubmit={this.handleSubmit}>
            <div className="col-1-2">
            <input type="text" placeholder="name" /><br/>
            <input type="text" placeholder="email" /><br/>
            <input type="text" placeholder="password" /><br/>
          </div>
          <div className="col-1-2">
            <div id="spacing">
            <button id="btn" type="Login">Login</button>
            </div>

            <div id="spacing">
            <button id="btn" type="SignUp">Sign up</button><br></br>
            <FbLoginButton />
          </div>
        </div>
            </form>
                </div>

            </div>
          )
      }
  }

export default LoginForm;
