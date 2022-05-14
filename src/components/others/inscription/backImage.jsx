import React, { Component } from 'react'
import back from '../../../image/ins.jpg';


class BackImage extends Component {
  render() {
    return (
      <img 
        src={back} 
        alt="" width="100%" 
        height="100%" 
        style={{
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat",
          backgroundPosition:"center",
          position:"fixed",
          zIndex:"1",top:"0",
          left:"0"}} 
      />
    )
  }
}
export default BackImage;
