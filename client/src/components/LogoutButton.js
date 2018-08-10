import React, { Component } from 'react';
//import './LogoutButton.css';

class LogoutButton extends Component {
    render() {
        return (
            <button>
                <a href='/api/logout'>Logout</a>
            </button>
        )
    }
}

export default LogoutButton;