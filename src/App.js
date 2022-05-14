import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import HomePage from './components/HomePage';
import Inscription from './components/others/inscription/Inscription';
import FormIns from './components/others/inscription/FormIns';
// import Cours from './Cours';

class App extends Component {
  render() {
    return (
        <main className="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/inscriptions" exact component={Inscription} />
            <Route path="/inscriptions/hi" exact component={FormIns} />
            {/* <Route path="/cours" exact component={Cours} /> */}
          </Switch>
        </main>
    )
  }
}

export default App;