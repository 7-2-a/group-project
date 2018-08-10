import React, { Component } from 'react';
//import './FbLoginButton.css';

class FbLoginButton extends Component {
    render() {
        return (
            <button>
                <a href='/auth/facebook'>Login with Facebook</a>
            </button>
        )
    }
}

export default FbLoginButton;