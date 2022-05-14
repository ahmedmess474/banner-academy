import React, { Component } from 'react'
import logo from "../../../image/banner_logo.png";
import {Link} from 'react-router-dom';

class Part1 extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#f5f5fa',paddingBottom:"50px"}}>
        <div className="container">
          <h3 className="text-center" style={{direction:"rtl",marginBottom:"30px",paddingTop:"50px"}}>
            مرحبا بك في فضاء التسجيل  
          </h3>
          <p className="text-center" style={{direction:"rtl",marginBottom:"30px"}}>
            لقد أعددنا خطط تسعير للجميع، حتى تتمكن من البدء على الفور. كما توجد عروض وتخفيضات للمتفوقين.
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="card" style={{backgroundColor:"white"}}>
                <h3 style={{direction:"rtl",textAlign:"center",marginTop:"40px"}}>
                  التسجيل في فضاء 
                </h3>
                <h4 style={{direction:'rtl',textAlign:"center",fontSize:"48px",fontWeight:"400",marginTop:"20px"}}>
                  الأساتذة
                  <sup style={{fontSize:"28px"}}>
                   لاتتردد
                  </sup>
                  <span style={{fontSize:"18px",display:"block"}}>
                   انظم إلى فريق أكاديمية النجاح
                  </span>
                </h4>
                <div className="container">
                    <div className="row" style={{marginTop:"20px"}}>
                      <div className="col-md-1"></div>
                      <div className="col-md-3">
                        <img src={logo} width="70" height="70" alt="" style={{marginLeft:"20px",marginTop:"13px"}}/>
                      </div>
                      <div className="col-md-7">
                        <h4 className="text-center" style={{marginTop:"13px",marginRight:"17px"}}>Academy</h4>
                        <h2 className="text-center">BANNER</h2>
                      </div>
                    </div>
                  </div>
                  <div className="text-center" style={{marginTop:"20px",marginBottom:"40px"}}>
                    <Link className="btn btn-success" to="/inscriptions/hi">التسجيل</Link>
                  </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{backgroundColor:"white"}}>
                <h3 style={{direction:"rtl",textAlign:"center",marginTop:"40px"}}>
                  التسجيل في فضاء 
                </h3>
                <h4 style={{direction:'rtl',textAlign:"center",fontSize:"48px",fontWeight:"400",marginTop:"20px"}}>
                  التلاميذ  
                  <sup style={{fontSize:"28px"}}>
                   فرصتك
                  </sup>
                  <span style={{fontSize:"18px",display:"block"}}>
                    ابتدائي، متوسط، ثانوي
                  </span>
                </h4>
                <div className="container">
                    <div className="row" style={{marginTop:"20px"}}>
                      <div className="col-md-1"></div>
                      <div className="col-md-3">
                        <img src={logo} width="70" height="70" alt="" style={{marginLeft:"20px",marginTop:"13px"}}/>
                      </div>
                      <div className="col-md-7">
                        <h4 className="text-center" style={{marginTop:"13px",marginRight:"17px"}}>Academy</h4>
                        <h2 className="text-center">BANNER</h2>
                      </div>
                    </div>
                  </div>
                  <div className="text-center" style={{marginTop:"20px",marginBottom:"40px"}}>
                    <Link className="btn btn-success" to="/inscriptions/hi">التسجيل</Link>
                  </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{backgroundColor:"white"}}>
                <h3 style={{direction:"rtl",textAlign:"center",marginTop:"40px"}}>
                  التسجيل في فضاء 
                </h3>
                <h4 style={{direction:'rtl',textAlign:"center",fontSize:"48px",fontWeight:"400",marginTop:"20px"}}>
                    التكوين  
                    {" "}
                  <sup style={{fontSize:"28px"}}>
                    تميّز
                  </sup>
                  <span style={{fontSize:"18px",display:"block"}}>
                    تخفيضات للطلبة الجامعيين  
                  </span>
                </h4>
                <div className="container">
                    <div className="row" style={{marginTop:"20px"}}>
                      <div className="col-md-1"></div>
                      <div className="col-md-3">
                        <img src={logo} width="70" height="70" alt="" style={{marginLeft:"20px",marginTop:"13px"}}/>
                      </div>
                      <div className="col-md-7">
                        <h4 className="text-center" style={{marginTop:"13px",marginRight:"17px"}}>Academy</h4>
                        <h2 className="text-center">BANNER</h2>
                      </div>
                    </div>
                  </div>
                  <div className="text-center" style={{marginTop:"20px",marginBottom:"40px"}}>
                    <Link className="btn btn-success" to="/inscriptions/hi">التسجيل</Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Part1;