import React, { Component } from 'react';
import img1 from '../../image/img1.png';
import img4 from '../../image/img4.svg';
import  {Animated} from "react-animated-css";


class Partone extends Component {
  state={
    color:true
  }

  onHover = (e) => {
    e.preventDefault();
    this.setState({color:false});
  } 

  onLeave = (e) => {
    e.preventDefault();
    this.setState({color:true});
  }
  
  render() {
    return (
      <div style={{backgroundColor:"#f5f5fa",paddingBottom:"50px"}} >
        <div className="container">
          <h3 className="text-center" style={{paddingTop:"20px"}}>دورات مميزة</h3>
          <h5 className="text-center" style={{marginTop:"30px"}}>ابدأ رحلتك في طلب العلم عبر أحد برامجنا!</h5>
          <div className="row" style={{marginTop:"40px"}}>
            <div className="col-md-3">
            <Animated animationIn="shake" animationOut="rotateIn" isVisible={true}>
              <div className="card" style={{backgroundColor:"white",height:"330px"}}>
                <img src={img1} height="50px" width="50px" alt="" style={{marginTop:"40px",marginBottom:"20px",alignSelf:"center"}} />
                <h4 className="text-center" style={{cursor:"pointer",color:this.state.color ? "black" : "#56e3bd"}} onMouseEnter={this.onHover} onMouseLeave={this.onLeave}>
                  الخياطة والطرز
                </h4>
                <div className="container">
                  <h6 className="text-center" style={{marginTop:"40px",marginBottom:"20px"}}>
                    دورات متنوعة في تعلم الخياطة وتفصيل الملابس وأخذ المقاسات وطرق اخرى متعلقة في فن الخياطة    
                  </h6>
                </div>
              </div>
            </Animated>
            </div>
            <div className="col-md-3">
              <div className="card" style={{backgroundColor:"white",height:"330px"}}>
                  <img src={img1} height="50px" width="50px" alt="" style={{marginTop:"40px",marginBottom:"20px",alignSelf:"center"}} />
                  <h4 className="text-center" style={{cursor:"pointer",color:this.state.color ? "black" : "#56e3bd"}} onMouseEnter={this.onHover} onMouseLeave={this.onLeave}>
                    الصيانة وتركيب الشبكات
                  </h4>
                  <div className="container">
                    <h6 className="text-center" style={{marginTop:"40px",marginBottom:"20px"}}>
                      الحلول المقترحة والمنفذة موثوقة ومثبتة للسماح لعملائنا بالاستفادة الكاملة من معداتهم دون التعرض لأي إزعاج. 
                    </h6>
                  </div>
                </div>
              </div>
            <div className="col-md-3">
              <div className="card" style={{backgroundColor:"white",height:"330px"}}>
                <img src={img1} height="50px" width="50px" alt="" style={{marginTop:"40px",marginBottom:"20px",alignSelf:"center"}} />
                <h4 className="text-center" style={{cursor:"pointer",color:this.state.color ? "black" : "#56e3bd"}} onMouseEnter={this.onHover} onMouseLeave={this.onLeave}>
                  التصميم والجرافيك
                </h4>
                <div className="container">
                  <h6 className="text-center" style={{marginTop:"40px",marginBottom:"20px"}}>
                    إبداعات الجرافيك كل الوسائط! إنشاء الشعارات ، صور الإعلانات ، صفحات الغلاف ، الفيديو (مقدمة ، خاتمة ، إعلان ، عرض توضيحي ، تعليمي ...إلخ)    
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{backgroundColor:"white",height:"330px"}}>
                <img src={img4} height="50px" width="50px" alt="" style={{marginTop:"40px",marginBottom:"20px",alignSelf:"center"}} />
                <h4 className="text-center" style={{cursor:"pointer",color:this.state.color ? "black" : "#56e3bd"}} onMouseEnter={this.onHover} onMouseLeave={this.onLeave}>
                  تعلم اللغات
                </h4>
                <div className="container">
                  <h6 className="text-center" style={{marginTop:"40px",marginBottom:"20px"}}>
                    هلْ فكّرت في الشروعِ بتعلُّمِ لغات جديدة؟ ... نقترح عليك عروض تلبي كافة المستويات والتخصصات  
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Partone;