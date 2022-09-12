import React, { Component } from 'react';
import Navbar from '../../Layout/Navbar/Navbar';
import Image from "../../Layout/Image";
import { Link } from 'react-router-dom';
import Blobs from "../../Blobs";


class Card extends Component {
  render() {
    return (
      <div className="card" id="heroCard" style={{paddingBottom:"90px"}}>
        <Blobs />  
        <div className="container" style={{position: 'relative'}}>
          <Navbar />
          <div className="row" style={{marginTop:"140px", zIndex:1000}}>
            <div className="col-md-6" style={{ zIndex:1000}}>
              <div className={"hero-img"}>
                <Image />
              </div>
            </div>
            <div className="col-md-6" id={"heroText"}>
              <h1 className="text-center" > سجل معنا في موقع أكاديمية بانـر</h1>
              <div className="row" >
                <div className="col-md-12" id={"heroDescription"}>
                  <h4 style={{textAlign:"center",direction:"rtl"}}>
                  ...ابدأ رحلتك في طلب العلم بأفضل الوسائل التقنية والعملية...
                  </h4>
                </div>
              </div>
              <Link className="btn btn-success" to="/more" style={{float:"right",direction:"rtl"}}>
                GoGo...
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;