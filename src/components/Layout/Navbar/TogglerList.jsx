import React from 'react';
import { Link } from 'react-scroll';
import navItems from './navItems';

function TogglerList() {
  return (
    <div style={{width: "100%", borderTopColor:"white", borderTopStyle: "solid", borderTopWidth: "1px", marginTop: "5px"}} className="text-center">
        <ul className='mx-auto my-3' style={{listStyleType: "none"}}>
            {navItems.map(item => {
                return (
                    <li className='py-2' key={item.id}>
                        <Link>
                            {item.icon} {item.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </div>
  )
};

export default TogglerList;