import React, { Component } from 'react';
import img1 from './banner_background.jpg';
import bg from './bg.png';

class Image extends Component {
  render() {
    return (
        <img src={img1} className="mr-auto" alt="Responsive" width="100%"   />
    )
  }
}

export default Image;