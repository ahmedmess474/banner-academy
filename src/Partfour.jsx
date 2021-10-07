import React, { Component } from 'react';
import logo from './banner_logo.png';

class Partfour extends Component {
  render() {
    return (
      <div className="card" style={{backgroundColor:"#dfdfdf",paddingTop:"40px",paddingBottom:"40px"}}>
        <div className="container">
          <h3 className="text-center">إدارة الأكاديمية</h3>
          <p style={{marginTop:"30px",direction:"rtl",textAlign:"center"}}>ينظر إلى تطور التكنولوجيا في الوقت الحاضر على أنها رمز لنهضة الشعوب و الأمم وعنوان عظمتها وحضارتها ورقيها ، ومحور جوهري تدور حول الحياة الثقافية بمعناها الشامل ، و أبعادها الفكرية و الأدبية و العلمية.</p>
          <div className="row" style={{marginTop:"40px"}}>
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card" style={{backgroundColor:"white",height:"12rem"}}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <h3 className="text-center" style={{marginTop:"14px"}}>يوسف بن عقون</h3>
                      <h6 className="text-center" style={{marginTop:"5px"}}>مدير المدرسة</h6>
                      <h4 className="text-center">contact@etakween.ga</h4>
                      <h4 className="text-center">00213.662.706.516</h4>
                      <div className="text-center">
                        <a href="">
                          <i className="fab fa-facebook"></i>
                        </a>
                        <a href="">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <img src={logo} width="150" height="150" alt="" style={{marginTop:"20px",marginLeft:"20px"}}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Partfour;