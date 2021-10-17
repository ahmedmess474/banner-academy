import React, { Component } from 'react'
import Card from './Layout/Card';
import Partone from './others/Partone';
import Parttwo from './others/Parttwo';
import Partthree from './others/Partthree';
import Partfour from './others/Partfour';
import Partfive from './others/Partfive';
import Partsix from './others/Partsix';
import Partseven from './others/Partseven';
import Footer from './Layout/Footer';


class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <Card />
        <Partone />
        <Parttwo />
        <Partthree />
        <Partfour />
        <Partfive />
        <Partsix />
        <Partseven />
        <Footer />
      </div>
    )
  }
}
 
export default HomePage;