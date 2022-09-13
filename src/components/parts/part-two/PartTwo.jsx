import React from 'react';
import Header from './Header';
import { sewing } from '../../../utilities/images'
import Cards from './Cards';

function PartTwo() {
  return (
    <div style={{backgroundColor:"#f5f5fa",paddingBottom:"50px"}}>
        <div className='container'>
            <Header />
            <div className='row' style={{marginTop: "40px"}}>
                <Cards />
            </div>
        </div>
    </div>
  )
};

export default PartTwo;