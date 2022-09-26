import React, { Component } from 'react'
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar/Navbar';
import PartOne from './parts/part-one/PartOne';
import PartTwo from './parts/part-two/PartTwo';
import PartThree from './parts/part-three/PartThree';
import PartFour from './parts/part-four/PartFour';
import PartFive from './parts/part-five/PartFive';
import PartSix from './parts/part-six/PartSix';
import PartSeven from './parts/part-seven/PartSeven';

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
        <>
          <PartSix />
        </>
        <>
          <PartSeven />
        </>
          <Footer />
        </>
      </div>
    )
  }
}
 
export default HomePage;