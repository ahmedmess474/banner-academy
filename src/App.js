import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import HomePage from './components/HomePage';
// import Cours from './Cours';

class App extends Component {
  render() {
    return (
        <main className="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
            {/* <Route path="/cours" exact component={Cours} /> */}
          </Switch>
        </main>
    )
  }
}

export default App;