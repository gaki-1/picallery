import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'
class Form extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <ul className="nav-links">
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='/login'>
                            <li>Login</li>
                        </Link>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Form;