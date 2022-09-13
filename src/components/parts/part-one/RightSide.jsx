import React from 'react';
import { Link } from 'react-scroll';

function RightSide() {
  return (
    <>
        <h1 className="text-center" >مدرســـة بانـر</h1>
        <div className="row" >
            <div className="col-md-12" id={"heroDescription"}>
                <h4 style={{textAlign:"center",direction:"rtl"}}>
                    ...ابدأ رحلتك في طلب العلم بأفضل الوسائل التقنية والعملية...
                </h4>
            </div>
        </div>
        <Link className="btn btn-success" to="/more" style={{float:"right",direction:"rtl"}}>
            إكتشف المزيد ...
        </Link>
    </>
  )
};

export default RightSide;