import React from 'react';
import Brand from './Brand';
import NavList from './Nav-List';
import RegistrationLink from './RegistrationLink';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg fixed-top ' style={{direction: "rtl", backgroundColor:"rgb(32 31 66)", color:'white'}}>
      <Brand />
      <button className='navbar-toggler' type='button' data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className='collapse navbar-collapse' id="navbarSupportedContent">
        <NavList />
        <RegistrationLink />
      </div>
    </nav>
  )
};

export default Navbar;




                    // {/* {this.state.call ? null : 
                    // <ul style={{backgroundColor:"white",marginTop:"10px"}} className="list-group">
                    //   <li className="list-group-item">
                    //     من نحن؟
                    //   </li>
                    //   <li className="list-group-item">
                    //     تواصل مع الإدارة
                    //   </li>
                    //   <li className="list-group-item">
                    //     طلب خدمة
                    //   </li>
                    // </ul>} */}



                      //                   {/* {this.state.cour ? null : 
                      // <ul style={{backgroundColor:"white",marginTop:"10px"}} className="list-group">
                      //   <li className="list-group-item">
                      //     الطور التمهيدي-الإبتداىي
                      //   </li>
                      //   <li className="list-group-item">
                      //     الطور المتوسط
                      //   </li>
                      //   <li className="list-group-item">
                      //     الطور الثانوي
                      //   </li>
                      // </ul>} */}