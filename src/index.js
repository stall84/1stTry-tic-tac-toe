import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dob';
import Board from './components/Board';
import Scoreboard from './components/Scoreboard';

import './styles/board.css';
import './styles/box.css';
import './styles/buttons.css';

// Create the main App component 

class App extends Component {


    render() {
      return (
        <div className="app">
            <BrowserRouter>
              <Route exact path="/" component={ Scoreboard } />
              <Route path="/board" component={ Board } />
            </BrowserRouter>  
        </div>
      )
    }
}


ReactDOM.render(
  
    <App />,
  
  document.getElementById('root')
);


