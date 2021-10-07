import React, { Component } from 'react';
import Navbar from './Navbar';
import Image from './Image';
import { Link } from 'react-router-dom';


class Card extends Component {
  render() {
    return (
      <div className="card" style={{backgroundColor:"#56e3bd",paddingBottom:"90px"}}>
        <div className="container">
          <Navbar />
          <div className="row" style={{marginTop:"70px"}}>
            <div className="col-md-6">
              <div id="djemy" style={{margin:"50px",transitionDelay:".2s",transform:"translateZ(0) scale(1)",transitionTimingFunction:"ease",transitionDuration:"1s"}}>
                <Image />
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="text-center" style={{marginTop:"80px"}}>مدرســـة بانـر</h1>
              <div className="row" style={{marginTop:"30px"}}>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <h3 style={{textAlign:"center",direction:"rtl"}}>
                  ...ابدأ رحلتك في طلب العلم بأفضل الوسائل التقنية والعملية...
                  </h3>
                </div>
                <div className="col-md-2"></div>
              </div>
              <Link className="btn btn-success" to="/more" style={{float:"right", marginTop:"30px",marginRight:"70px",direction:"rtl"}}>
                إكتشف المزيد ...
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;