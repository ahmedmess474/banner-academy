import React, { useState } from 'react';
import Brand from './Brand';
import NavList from './Nav-List';
import RegistrationLink from './RegistrationLink';
import TogglerList from './TogglerList';

function Navbar() {

  const [navToggler, setNavToggler] = useState(false);

  const handleClick = () => {
    setNavToggler(!navToggler);
  }

  return (
    <nav className='navbar navbar-expand-lg fixed-top ' style={{direction: "rtl", backgroundColor:"rgb(32 31 66)", color:'white'}}>
      <Brand />
      <button className='navbar-toggler' onClick={handleClick} style={{marginLeft:"10px", textDecoration:"none", color:"aqua"}} type='button' data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className='fa fa-bars'></i>
      </button>
      {navToggler && <TogglerList />}
      <div className='collapse navbar-collapse' id="navbarSupportedContent">
        <NavList />
        <RegistrationLink />
      </div>
    </nav>
  )
};

export default Navbar;
