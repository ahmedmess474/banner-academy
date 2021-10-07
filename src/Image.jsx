import React, { Component } from 'react';
import img from './banner_background.jpg';
import bg from './bg.png';

class Image extends Component {
  render() {
    return (
        <img src={img} className="mr-auto" alt="Responsive image" width="120%" height="330px" style={{transform:"translateY(10px)",transform:"translateY(-10px)"}} />
    )
  }
}

export default Image;