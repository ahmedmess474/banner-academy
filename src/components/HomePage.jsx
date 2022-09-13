import React, { Component } from 'react'
import Partone from './others/Partone';
import Partthree from './others/Partthree';
import Partfour from './others/Partfour';
import Partfive from './others/Partfive';
import Partsix from './others/Partsix';
import Partseven from './others/Partseven';
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar/Navbar';
import PartOne from './parts/part-one/PartOne';
import PartTwo from './parts/part-two/PartTwo';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <>
          <PartOne />
        </>
        <>
          <PartTwo />
        </>
        <>
          <Partthree />
          <Partfour />
          <Partfive />
          <Partsix />
          <Partseven />
          <Footer />
        </>
      </div>
    )
  }
}
 
export default HomePage;