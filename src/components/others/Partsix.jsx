import React, { Component } from 'react'

class Partsix extends Component {
  render() {
    return (
      <div className="card" style={{backgroundColor:"rgb(32 31 66)",height:"20rem",marginTop:"50px"}}>
        <div className="container">
          <div style={{height:"7rem"}}></div>
          <div style={{height:"6rem"}}>
            <div className="row">
              <div className="col-md-4 text-center">
                <button className="btn btn-success" style={{marginTop:"40px"}}>إتصل بنا</button>
              </div>
              <div className="col-md-8" style={{color:"white"}}>
                <h3 style={{float:"right",direction:"rtl"}}>فضاء الأساتذة</h3>
                <p style={{float:"right",direction:"rtl"}}>
                نحن متحمسون لتقديم الأفضل لأبنائنا ودعم مختلف الشركات الناشئة

بالنسبة لأساتذة دروس الدعم الرجاء كتابة مادة التدريس والطور (ابتدائي/متوسط/ثانوي) في الفراغ "موضوع الطلب أو الحجز"..

بالنسبة لأساتذة مختلف الدورات الرجاء كتابة عنوان الدورة في الفراغ "موضوع الطلب أو الحجز"..
                </p>
              </div>
            </div>
          </div>
          <div style={{height:"7rem"}}></div>
        </div>
      </div>
    )
  }
}

export default Partsix;