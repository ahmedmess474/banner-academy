import React, { Component } from 'react';
import CardIns from './CardIns';
import Footer from "../../Layout/Footer";
import Part1 from './Part1';
class Inscription extends Component {
  render() {
    return (
      <div>
        <CardIns />
        <Part1 />
        <Footer />
      </div>
    )
  }
}

export default Inscription;