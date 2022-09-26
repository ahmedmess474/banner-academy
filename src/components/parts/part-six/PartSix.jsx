import React from "react";

function PartSix() {
    return (
        <div
            className="card"
            style={{
                backgroundColor: "rgb(32 31 66)",
                paddingTop: "5rem",
                paddingBottom: "5rem",
                direction: "rtl"
            }}
        >
            <div className="container">
                <div className="row">
                    <div
                        className="col-md-8 text-white"
                        style={{ direction: "rtl" }}
                    >
                        <h3>فضاء الأساتذة</h3>
                        <p>
                            نحن متحمسون لتقديم الأفضل لأبنائنا ودعم مختلف
                            الشركات الناشئة بالنسبة لأساتذة دروس الدعم الرجاء
                            كتابة مادة التدريس والطور (ابتدائي/متوسط/ثانوي) في
                            الفراغ "موضوع الطلب أو الحجز".. بالنسبة لأساتذة
                            مختلف الدورات الرجاء كتابة عنوان الدورة في الفراغ
                            "موضوع الطلب أو الحجز"..
                        </p>
                    </div>
                    <div className="col-md-4" style={{ position: "relative" }}>
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                right: "50%"
                            }}
                        >
                            <button className="btn btn-success">
                                إتصل بنا
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PartSix;
