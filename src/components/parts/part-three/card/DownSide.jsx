import React from "react";
import { logo } from "../../../../utilities/images";

const pStyle = {
    fontWeight: "bolder",
    fontSize: "28px",
    textAlign: "end"
};

function DownSide() {
    return (
        <div className="mt-4 mb-3">
            <div className="d-flex justify-content-end">
                <div className="">
                    <p style={pStyle}>
                        أكاديــمية
                        <br />
                        <span
                            className="text-center"
                            style={{ fontStretch: "ultra-expanded" }}
                        >
                            بانــر
                        </span>
                    </p>
                </div>
                <div style={{ paddingRight: "40px", paddingLeft: "25px" }}>
                    <img
                        src={logo}
                        width="70"
                        height="70"
                        alt="banner academy logo"
                        style={{ borderRadius: "35px" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default DownSide;
