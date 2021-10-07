import React, { Component } from 'react'
import Card from './Card';
import Partone from './Partone';
import Parttwo from './Parttwo';
import Partthree from './Partthree';
import Partfour from './Partfour';
import Partfive from './Partfive';
import Partsix from './Partsix';
import Partseven from './Partseven';
import Footer from './Footer';


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