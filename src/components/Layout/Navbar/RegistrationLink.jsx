import React from 'react'
import { Link } from 'react-scroll';

function RegistrationLink() {
  return (
    <div className='float-left'>
        <Link className="btn btn-success-ouline" type='button' to="/inscriptions" style={{marginLeft:"40px",marginRight:"40px"}}>
            التسجيل
        </Link>
    </div>
  )
};

export default RegistrationLink;