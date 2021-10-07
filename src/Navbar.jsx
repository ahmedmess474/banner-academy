import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from './banner_logo.png';


class Navbar extends Component {
  state={
    call:true,
    cour:true,
    color:true,
    nav:true
  };

  handleNav = (e) => {
    e.preventDefault();
    this.setState({nav:!this.state.nav})
  }

  handleEnter = (e) => {
    e.preventDefault();
    this.setState({call : false});
  }
  handleLeave = (e) => {
    e.preventDefault();
    this.setState({call : true})
  }

  handleEnter1 = (e) => {
    e.preventDefault();
    this.setState({cour : false});
  }
  handleLeave1 = (e) => {
    e.preventDefault();
    this.setState({cour : true})
  }

  handleColor = (e) => {
    e.preventDefault();
    this.setState({color:false})
  }

  handleColor1 = (e) => {
    e.preventDefault();
    this.setState({color:true})
  }
 
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top shadow" style={{backgroundColor:"rgb(32 31 66)", color:'white',textAlign:"center"}}>
        <button className="navbar-toggler" onClick={this.handleNav} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            list
            {this.state.nav ? null : 
            <ul className="list-group" style={{backgroundColor:"white",width:"120px",marginTop:"10px"}}>
              <li className="list-group-item">الرئيسية</li>
              <li className="list-group-item">دورات مميزة</li>
              <li className="list-group-item">دروس الدعم</li>
              <li className="list-group-item">فضاء الأساتذة</li>
              <li className="list-group-item">إتصل بنا</li>
            </ul>
            }
          </span>
        </button>
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <Link className="btn btn-success-ouline" type='button' to="/inscriptions" style={{marginLeft:"40px"}}>
                التسجيل
              </Link>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0" style={{marginLeft:"40px"}}>
                <li className="nav-item active" style={{marginLeft:"20px"}}>
                  <Link className="nav-link" to="/callus" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
                    <i className="fas fa-arrow-down"></i>
                    <span >
                      إتصل بنا
                    </span>
                    <i className="fa fa-envelope" aria-hidden="true" style={{marginLeft:"7px"}}></i>
                    {this.state.call ? null : 
                    <ul style={{backgroundColor:"white",marginTop:"10px"}} className="list-group">
                      <li className="list-group-item">
                        من نحن؟
                      </li>
                      <li className="list-group-item">
                        تواصل مع الإدارة
                      </li>
                      <li className="list-group-item">
                        طلب خدمة
                      </li>
                    </ul>}
                  </Link>
                </li>
                <li className="nav-item active" style={{marginLeft:"10px"}}>
                  <Link className="nav-link" to="/profs">
                    فضاء الأساتذة
                    <i className="fa fa-address-card" aria-hidden="true" style={{marginLeft:"7px"}}></i>
                  </Link>
                </li>
                <li className="nav-item active" style={{marginLeft:"10px"}}>
                  <Link className="nav-link" to="/cours" onMouseEnter={this.handleEnter1} onMouseLeave={this.handleLeave1}>
                    <i className="fas fa-arrow-down"></i>
                    دروس الدعم
                    <i className="fa fa-users" aria-hidden="true" style={{marginLeft:"7px"}}></i>
                    {this.state.cour ? null : 
                      <ul style={{backgroundColor:"white",marginTop:"10px"}} className="list-group">
                        <li className="list-group-item">
                          الطور التمهيدي-الإبتداىي
                        </li>
                        <li className="list-group-item">
                          الطور المتوسط
                        </li>
                        <li className="list-group-item">
                          الطور الثانوي
                        </li>
                      </ul>}
                  </Link>
                </li>
                <li className="nav-item active" style={{marginLeft:"10px"}}>
                  <Link className="nav-link" to="/tours">
                    دورات مميزة
                    <i className="fa fa-handshake" aria-hidden="true" style={{marginLeft:"7px"}}></i>
                  </Link>
                </li>
                <li className="nav-item active" style={{marginLeft:"10px"}}>
                  <Link className="nav-link" to="/">
                    الرئيسية  
                    <i className="fa fa-university" aria-hidden="true" style={{marginLeft:"7px"}}></i>
                  </Link>
                </li>
              </ul>
              <NavLink className="navbar-brand" to="/" style={{marginLeft:"80px"}}>
                <img src={logo} width="45" height="45" alt="" />
                Banner Academy
              </NavLink>
            </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
