import React from 'react';
import { Link } from "react-scroll";
import { logo } from '../../../utilities/images';

function Brand() {
  return (
    <Link className="navbar-brand" to="/" style={{marginLeft:"80px",color:"white"}}>
        <img src={logo} width="45" height="45" alt="" style={{marginLeft: "10px"}}/>
        {/* Banner Academy */}
        أكاديمية بانر
    </Link>
  )
};

export default Brand;