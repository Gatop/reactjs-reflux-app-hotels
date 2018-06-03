import React, { Component } from 'react';
import './App.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Router
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Importing Header component
import Header from './components/Header';

// Views
import Home from './views/Home';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header/>
                        <Route exact path="/" component={Home}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
