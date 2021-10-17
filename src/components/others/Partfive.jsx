import React, { Component } from 'react'

class Partfive extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center"style={{marginTop:"30px"}}>املأ الفراغات بعناية للطلب أو حجز موعد</h3>
        <p style={{marginTop:"30px"}} className="text-center">الفراغات الموسومة بعلامة * هي فراغات مطلوبة</p>
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="container">
                <div className="row">
                  <div className="col-md-2" style={{marginTop:"22px"}}>
                    <i className="fas fa-location-circle"></i>
                  </div>
                  <div className="col-md-10">
                    <span style={{float:"right",marginTop:"12px",direction:"rtl"}}>
                      <h4>المقر:</h4>
                      <h6>حي الرياض، بالقرب من مسجد الفلاح - باتنة، الجزائر</h6>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2" style={{marginTop:"15px"}}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="col-md-10">
                    <span style={{float:"right",marginTop:"12px",direction:"rtl"}}>
                      <h4>البريد الإلكتروني:</h4>
                      <h6>ecole.takween@gmail.com</h6>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2" style={{marginTop:"15px"}}>
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="col-md-10">
                    <span style={{float:"right",marginTop:"12px",direction:"rtl"}}>
                      <h4>الهاتف:</h4>
                      <h6>0662-70-65-16</h6>
                    </span>
                  </div>
                </div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.280184228879!2d6.146456415029619!3d35.546781880225836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f413f1498849f7%3A0x355a68a8351959e6!2zRWNvbGUgVGFrd2VlbiDZhdiv2LHYs9ipINiq2YPZiNmK2YY!5e0!3m2!1sen!2sdz!4v1616529817109!5m2!1sen!2sdz" 
                  frameborder="0" 
                  width="100%"
                  height="290px"
                  allowFullScreen="" />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="container">
              <div className="card">
                <form>
                  <div className="container">
                    <div className="row" style={{marginTop:"20px"}}>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Email:</label>
                          <input 
                            type="email"
                            className="form-control"
                            placeholder="jhonDoe123@banner.com"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email" style={{direction:"rtl",float:"right"}}>الإسم واللقب:</label>
                          <input 
                            type="text"
                            className="form-control"/>
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{marginTop:"20px"}}>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Mobile Phone:</label>
                          <input 
                            type="text"
                            className="form-control"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="select" style={{direction:"rtl",float:"right"}}>الموضوع:</label>
                          <select className="form-control">
                            <option value="" style={{direction:"rtl",float:"right"}}>الموضوع</option>
                            <option value="op1" style={{direction:"rtl",float:"right"}}>تساؤل أو إستفسار</option>
                            <option value="op2" style={{direction:"rtl",float:"right"}}>طلب مساعدة</option>
                            <option value="op3" style={{direction:"rtl",float:"right"}}>طلب توطيف</option>
                            <option value="op4" style={{direction:"rtl",float:"right"}}>رسالة خاصة</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="form-group" style={{marginTop:"20px"}}>
                      <label for="message" style={{direction:"rtl",float:"right"}}>الرسالة:</label>
                      <textarea class="form-control" id="message" rows="8"></textarea>
                    </div>
                    <div className="text-center" style={{marginTop:"30px",marginBottom:"40px"}}>
                      <button className="btn btn-success" style={{paddingLeft:"30px",paddingRight:"30px"}}>أرســل</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Partfive;