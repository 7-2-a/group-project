import React, { Component } from 'react';
import FbLoginButton from './FbLoginButton';
import axios from 'axios'
import "./LoginForm.css";


class LoginForm extends Component {

  state = {}


   setValue(e) {
     this.setState({[e.target.name]: e.target.value})
   }

   register() {
     axios.post('/api/emailUsers/register', this.state).then((res) => {
       localStorage.setItem('token', res.data.token)
       window.location.pathname = '/';
     })
     console.log(this.state)
   }

   login() {
     axios.post('/api/emailUsers/login', this.state).then((res) => {
       localStorage.setItem('token', res.data.token)
       window.location.pathname = '/';
     })
   }


    render(){
        return(
          <div id="container">
            <div className="login">

          <div className="col-1-2">
          <input type="text" name="name" placeholder="name" onChange={(e) => this.setValue(e)}/><br/>
          <input type="text" name= "email" placeholder="email" onChange={(e) => this.setValue(e)}/><br/>
          <input type="text" name = "password" placeholder="password" onChange={(e) => this.setValue(e)}/><br/>

        </div>
        <div className="col-1-2">
          <div id="spacing">
          <button id="btn" type="Login" onClick={() => this.login()}>Login</button>
          </div>

          <div id="spacing">
          <button id="btn" type="SignUp" onClick={() => this.register()} >Sign up</button><br></br>
          <FbLoginButton />
        </div>
      </div>

              </div>

          </div>
        )
    }
}

export default LoginForm;
