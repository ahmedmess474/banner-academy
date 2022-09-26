import React from 'react';
import cardItems from './cardItems';

function Cards() {
  return (
    <>
        {cardItems.map(item => {
            return (
                <div className='col-md-3' key={item.id}>
                    <div className="card" style={{backgroundColor:"white",height:"330px"}}>
                        {item.image}
                        <h4 className="text-center link-hover " style={{cursor: "pointer"}}>
                            {item.title} 
                        </h4>
                        <div className="container">
                            <h6 className="text-center" style={{marginTop:"40px",marginBottom:"20px"}}>
                                {item.body}
                            </h6>
                        </div>
                    </div>
                </div>
            )
        })}
    </>
  )
};

export default Cards;