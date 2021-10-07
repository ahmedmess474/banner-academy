import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import HomePage from './HomePage';
import Movies from './Movies';

class App extends Component {
  render() {
    return (
        <main className="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </main>
    )
  }
}

export default App;