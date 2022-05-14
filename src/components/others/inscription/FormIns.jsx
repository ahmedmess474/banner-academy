import React, { Component } from 'react';
import back from '../../../image/ins.jpg';
import ins1 from '../../../image/ins1.jpg';
import BackImage from "./backImage";
class FormIns extends Component {
  render() {
    return (
      <div>
        <div style={{
          backgroundImage:`url(${back})`,
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat",
          backgroundPosition:"center",
          position:"fixed",
          zIndex:"1",top:"0",
          left:"0",
          height:"100%",
          width:"100%",
          }}>
        </div>
        <div style={{
          background:"rgba(141, 60, 123, 0.4)",
          width:"100%",
          minHeight:"100vh", 
          position:"relative",
          zIndex:"1"}} >
            <div className="container">
              <div className="row" style={{paddingTop:"100px"}}>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header" style={{
                        backgroundImage:`url(${ins1})`,
                        backgroundSize:"cover",
                        position:"fixed",
                        backgroundRepeat:"no-repeat",
                        backgroundPosition:"center",
                        zIndex:"1",
                        width:"100%",
                        height:"70px",
                        background:"rgba(67, 67, 67, 0.6)"
                        }}>
                          {/* <div style={{background:"rgba(67, 67, 67, 0.6)",width:"100%",margin:"0",padding:"0",position:"relative"}}>

                          </div> */}
                    </div>
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>
        </div>
      </div>
      </div>
    )
  }
}

export default FormIns;

            {/* <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header"
                       style={{backgroundImage:`url(${ins1})`}}
                       >

                  </div>
                  <div className="card-body"></div>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div> */}








{/* 
                      // width:"100%",
          // minHeight:"100vh",
          // display:"flex",
          // flexWrap:"wrap",
          // justifyContent:"center",
          // alignItems:"center",
          // padding:"15px",
          // background:"rgba(141, 60, 123, 0.4)",
          // position:"relative",
          // zIndex:"10" */}