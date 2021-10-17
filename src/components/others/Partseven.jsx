import React, { Component } from 'react'
import pht7 from '../../image/pht7.PNG';
class Partseven extends Component {
  state = {
    one: true,
    two: true,
    three: true
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({one: !this.state.one});
    if(this.state.one===true){
      this.setState({two:true,three:true})
    }
  }
  handleClick1 = (e) => {
    e.preventDefault();
    this.setState({two: !this.state.two});
    if(this.state.two===true){
      this.setState({one:true,three:true})
    }
  }
  handleClick2 = (e) => {
    e.preventDefault();
    this.setState({three: !this.state.three});
    if(this.state.three===true){
      this.setState({one:true,two:true})
    }
  }
  render() {
    return (
      <div style={{backgroundColor:"#dfdfdf"}}>
        <div className="container" style={{paddingTop:"50px",paddingBottom:"50px"}}>
          <div className="row">
            <div className="col-md-6">
              <img src={pht7} alt="" width="100%"/>
            </div>
            <div className="col-md-6">
              <div>
                <h3 style={{direction:"rtl"}}>تعرف على مدرسة تكوين</h3>
                <p style={{direction:"rtl"}}>مدرسة تكوين هي صرح علمي مستقل للتعلم. هدفنا تزويد مجتمعاتنا فرص دراسة مختلف التخصصات بطريقة فريدة من نوعها، وذلك عبر برنامج متميز وبأسلوب متطور باستخدام الشبكة الإلكترونية.</p>
              </div>
              <div className="card" style={{direction:"rtl",cursor:"pointer"}} onClick={this.handleClick}>
                <h5 style={{color:"rgb(32 31 66)",marginTop:"18px",marginRight:"10px",marginBottom: this.state.one ? "18px" : "9px"}}>
                  <i className="fal fa-angle-down"></i>
                  {" "}
                  01 برنامج الأكاديمية
                  </h5>
                  {this.state.one ? null : 
                  <div className="container">
                    <p style={{direction:"rtl",marginTop:"10px",color:"black"}}>
                      هذا البرنامج يتيح الفرصة لمن لم يتسن له إتمام التكوين الجامعي أو المهني حتى يتأهل إلى التميز في سوق العمل
                    </p>
                  </div> }
                
              </div>
              <div className="card" style={{direction:"rtl",marginTop:"12px",cursor:"pointer"}} onClick={this.handleClick1}>
                <h5 style={{color:"rgb(32 31 66)",marginTop:"18px",marginBottom:this.state.two ? "18px" : "9px",marginRight:"10px"}}>
                  <i className="fal fa-angle-down"></i>
                  {" "}
                  02 خدماتنا
                  </h5>
                  {this.state.two ? null :
                  <div className="container">
                    <p style={{direction:"rtl",marginTop:"10px",color:"black"}}>
                      تمنحك مدرسة تكوين الفرصة لتقديم حلول اقتصادية وفعالة بشكل خاص، وفقًا لاحتياجاتك الحقيقية وتطلعاتك على المستوى الفني والتصميمي من خلال جعل كل عميل أو أستاذ فريدًا وبصمة خاصة به.
                    </p>
                  </div> }
                
              </div>
              <div className="card" style={{direction:"rtl",marginTop:"12px",cursor:"pointer"}} onClick={this.handleClick2}>
                <h5 style={{color:"rgb(32 31 66)",marginTop:"18px",marginBottom:this.state.three ? "18px" : "9px",marginRight:"10px"}}>
                  <i className="fal fa-angle-down"></i>
                  {" "}
                  03 لماذا نحن?
                  </h5>
                  {this.state.three ? null : 
                  <div className="container">
                    <p style={{direction:"rtl",marginTop:"10px",color:"black"}}>
                      المهارات المهنية: نحن نقدم التجربة الرقمية وفقًا للاتجاهات الرئيسية ذات التقنية العالية واللمس العالي التي توفر لك خدمة متقدمة. <br/>

                      الشفافية: نجيب على أسئلتك بصراحة وحرية ونزودك باقتباسات مفصلة. <br/>

                      خدمة فريدة: كل طلب فريد من نوعه ، ندرس نشاطك من خلال تحليل احتياجاتك مع الاهتمام الكبير بالتفاصيل. <br/>

                      الاستجابة: استجابة فورية لطلبك مع إدراك سريع لأفكارك لضمان تسليم.
                    </p>
                  </div>  }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Partseven;