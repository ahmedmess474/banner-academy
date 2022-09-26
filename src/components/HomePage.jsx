import React, { Component } from 'react'
import Partsix from './others/Partsix';
import Partseven from './others/Partseven';
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar/Navbar';
import PartOne from './parts/part-one/PartOne';
import PartTwo from './parts/part-two/PartTwo';
import PartThree from './parts/part-three/PartThree';
import PartFour from './parts/part-four/PartFour';
import PartFive from './parts/part-five/PartFive';

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
        <>
          <PartFour />
        </>
        <>
          <PartThree />
        </>
        <>
          <PartFive />
        </>
          <Partsix />
          <Partseven />
          <Footer />
        </>
      </div>
    )
  }
}
 
export default HomePage;