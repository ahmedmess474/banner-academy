import React from 'react'

function Footer() {
  return (
    <div style={{backgroundColor:"#56e3bd"}}>
      <div className="container">
        <div className="row" style={{paddingBottom:"20px",paddingTop:"20px"}}>
          <div className="col-md-7">
            <h5 style={{direction:"rtl"}}>© حقوق النشر مدرسة تكوين جميع الحقوق محفوظة. سياسة الخصوصية</h5>
          </div>
          <div className="col-md-5">
            <h5 style={{direction:"rtl"}}>تصميم و تطوير: Messaoudi</h5>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer;