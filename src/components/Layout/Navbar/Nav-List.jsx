import React from 'react';
import { Link } from 'react-scroll';
import navItems from './navItems';
import './nav.css';

function NavList() {
  return (
    <ul className='navbar-nav mx-auto'>
        {navItems.map(item => {
           return (
               <li className={item.className} style={item.style}>
                    <Link className="nav-link link-hover">
                        {item.icon}
                        {item.name}
                    </Link>
                </li>
            )
        })}
    </ul>
  )
}

export default NavList;



// the thing is all fault
// should start from 0.