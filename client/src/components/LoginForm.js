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
            <input type="text" placeholder="name" /><br/>
            <input type="text" placeholder="email" /><br/>
            <input type="text" placeholder="password" /><br/>
            <button type="Login">Login</button>
            <button type="SignUp">Sign up</button>
            <FbLoginButton />
            </form>
                </div>

            </div>
          )
      }
  }

export default LoginForm;
