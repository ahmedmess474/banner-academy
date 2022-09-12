import React from 'react';
import { Link } from 'react-scroll';
import navItems from './navItems';

function NavList() {
  return (
    <ul className='navbar-nav mx-auto'>
        {navItems.map(item => {
           return (
               <li className={item.className} style={item.style}>
                    <Link className="nav-link">
                        {item.icon}
                        {item.name}
                        {item.secondIcon && item.secondIcon}
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