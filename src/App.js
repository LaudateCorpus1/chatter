import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link
} from 'react-router-dom';

import './App.css';
import { ChatComponent } from './chat/Chat';
import { SignUp } from './auth/SignUp/SignUp.container';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/chats">Chats</Link></li>
                        <li><Link to="/sign-up">Sign Up</Link></li>
                    </ul>
                    <Route path="/chats" component={ ChatComponent }/>
                    <Route path="/sign-up" component={ SignUp }/>
                    <Redirect from="/" exact to="/chats"/>
                </div>
            </Router>
        );
    }
}

export default App;
