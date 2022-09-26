import React from "react";

function Form() {
    return (
        <div className="col-md-7">
            <div className="container">
                <div className="card">
                    <form>
                        <div className="container">
                            <div className="row" style={{ marginTop: "20px" }}>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="jhonDoe123@banner.com"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label
                                            htmlFor="email"
                                            style={{
                                                direction: "rtl",
                                                float: "right"
                                            }}
                                        >
                                            الإسم واللقب:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: "20px" }}>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="email">
                                            Mobile Phone:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label
                                            htmlFor="select"
                                            style={{
                                                direction: "rtl",
                                                float: "right"
                                            }}
                                        >
                                            الموضوع:
                                        </label>
                                        <select className="form-control">
                                            <option
                                                value=""
                                                style={{
                                                    direction: "rtl",
                                                    float: "right"
                                                }}
                                            >
                                                الموضوع
                                            </option>
                                            <option
                                                value="op1"
                                                style={{
                                                    direction: "rtl",
                                                    float: "right"
                                                }}
                                            >
                                                تساؤل أو إستفسار
                                            </option>
                                            <option
                                                value="op2"
                                                style={{
                                                    direction: "rtl",
                                                    float: "right"
                                                }}
                                            >
                                                طلب مساعدة
                                            </option>
                                            <option
                                                value="op3"
                                                style={{
                                                    direction: "rtl",
                                                    float: "right"
                                                }}
                                            >
                                                طلب توطيف
                                            </option>
                                            <option
                                                value="op4"
                                                style={{
                                                    direction: "rtl",
                                                    float: "right"
                                                }}
                                            >
                                                رسالة خاصة
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="form-group"
                                style={{ marginTop: "20px" }}
                            >
                                <label
                                    for="message"
                                    style={{ direction: "rtl", float: "right" }}
                                >
                                    الرسالة:
                                </label>
                                <textarea
                                    class="form-control"
                                    id="message"
                                    rows="8"
                                />
                            </div>
                            <div
                                className="text-center"
                                style={{
                                    marginTop: "30px",
                                    marginBottom: "40px"
                                }}
                            >
                                <button
                                    className="btn btn-success"
                                    style={{
                                        paddingLeft: "30px",
                                        paddingRight: "30px"
                                    }}
                                >
                                    أرســل
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
