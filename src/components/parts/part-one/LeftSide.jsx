import React from 'react';
import { background_banner } from '../../../utilities/images';


function LeftSide() {
  return (    
    <div className={"hero-img"}>
      <img src={background_banner} className="mr-auto" alt='Responsive' width="100%" />
    </div>
  )
};

export default LeftSide;