import React, { useState } from "react";
import { cartoon_meeting } from "../../../utilities/images";
import Card from "./Card";

function PartSeven() {
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);

    const handleClick = id => {
        if (id == 0) {
            setFirst(!first);
            setSecond(false);
            setThird(false);
        }
        if (id == 1) {
            setFirst(false);
            setSecond(!second);
            setThird(false);
        }
        if (id == 2) {
            setFirst(false);
            setSecond(false);
            setThird(!third);
        }
    };

    return (
        <div
            className="py-5"
            style={{ backgroundColor: "#dfdfdf", borderBottomStyle: "solid " }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <img
                            src={cartoon_meeting}
                            alt="cartoon_meeting"
                            width="100%"
                        />
                    </div>
                    <div className="col-md-6">
                        <div style={{ direction: "rtl" }}>
                            <h3>تعرف على مدرسة تكوين</h3>
                            <p>
                                مدرسة تكوين هي صرح علمي مستقل للتعلم. هدفنا
                                تزويد مجتمعاتنا فرص دراسة مختلف التخصصات بطريقة
                                فريدة من نوعها، وذلك عبر برنامج متميز وبأسلوب
                                متطور باستخدام الشبكة الإلكترونية.
                            </p>
                            <div
                                className="card mb-2 py-2"
                                style={{ direction: "rtl", cursor: "pointer" }}
                            >
                                <div onClick={() => handleClick(0)}>
                                    <h5
                                        style={{
                                            color: "rgb(32 31 66)",
                                            marginTop: "18px",
                                            marginRight: "10px"
                                        }}
                                    >
                                        <i className="fal fa-angle-down" />
                                        <span style={{ marginRight: "5px" }}>
                                            01 برنامج الأكاديمية
                                        </span>
                                    </h5>
                                </div>
                                {first &&
                                    <Card desc=" هذا البرنامج يتيح الفرصة لمن لم يتسن له إتمام التكوين الجامعي أو المهني حتى يتأهل إلى التميز في سوق العمل" />}
                            </div>

                            <div
                                className="card  mb-2 py-2"
                                style={{ direction: "rtl", cursor: "pointer" }}
                            >
                                <div onClick={() => handleClick(1)}>
                                    <h5
                                        style={{
                                            color: "rgb(32 31 66)",
                                            marginTop: "18px",
                                            marginRight: "10px"
                                        }}
                                    >
                                        <i className="fal fa-angle-down" />
                                        <span style={{ marginRight: "5px" }}>
                                            02 خدماتنا
                                        </span>
                                    </h5>
                                </div>
                                {second &&
                                    <Card
                                        id="1"
                                        title="02 خدماتنا"
                                        desc="تمنحك مدرسة تكوين الفرصة لتقديم حلول اقتصادية وفعالة بشكل خاص، وفقًا لاحتياجاتك الحقيقية وتطلعاتك على المستوى الفني والتصميمي من خلال جعل كل عميل أو أستاذ فريدًا وبصمة خاصة به."
                                    />}
                            </div>

                            <div
                                className="card  mb-2 py-2"
                                style={{ direction: "rtl", cursor: "pointer" }}
                            >
                                <div onClick={() => handleClick(2)}>
                                    <h5
                                        style={{
                                            color: "rgb(32 31 66)",
                                            marginTop: "18px",
                                            marginRight: "10px"
                                        }}
                                    >
                                        <i className="fal fa-angle-down" />
                                        <span style={{ marginRight: "5px" }}>
                                            03 لماذا نحن؟
                                        </span>
                                    </h5>
                                </div>
                                {third &&
                                    <Card
                                        id="3"
                                        title="03 لماذا نحن؟"
                                        desc="
                                        الشفافية: نجيب على أسئلتك بصراحة وحرية ونزودك باقتباسات مفصلة. 

                                        خدمة فريدة: كل طلب فريد من نوعه ، ندرس نشاطك من خلال تحليل احتياجاتك مع الاهتمام الكبير بالتفاصيل. 

                                        الاستجابة: استجابة فورية لطلبك مع إدراك سريع لأفكارك لضمان تسليم."
                                    />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PartSeven;
