import React from "react";

function Infos() {
    return (
        <div className="col-md-5">
            <div className="card">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2" style={{ marginTop: "22px" }}>
                            <i className="fas fa-location-circle" />
                        </div>
                        <div className="col-md-10">
                            <span
                                style={{
                                    float: "right",
                                    marginTop: "12px",
                                    direction: "rtl"
                                }}
                            >
                                <h4>المقر:</h4>
                                <h6>
                                    حي الرياض، بالقرب من مسجد الفلاح - باتنة،
                                    الجزائر
                                </h6>
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2" style={{ marginTop: "15px" }}>
                            <i className="fas fa-envelope" />
                        </div>
                        <div className="col-md-10">
                            <span
                                style={{
                                    float: "right",
                                    marginTop: "12px",
                                    direction: "rtl"
                                }}
                            >
                                <h4>البريد الإلكتروني:</h4>
                                <h6>ecole.takween@gmail.com</h6>
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2" style={{ marginTop: "15px" }}>
                            <i className="fas fa-phone" />
                        </div>
                        <div className="col-md-10">
                            <span
                                style={{
                                    float: "right",
                                    marginTop: "12px",
                                    direction: "rtl"
                                }}
                            >
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
                        allowFullScreen=""
                    />
                </div>
            </div>
        </div>
    );
}

export default Infos;
