import React from "react";
import Blobs from "../../Blobs";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function PartOne() {
    return (
        <div className="card" id="heroCard" style={{ paddingBottom: "90px" }}>
            <Blobs />
            <div className="container" style={{ position: "relative" }}>
                <div
                    className="row"
                    style={{ marginTop: "140px", zIndex: 1000 }}
                >
                    <div className="col-md-6" style={{ zIndex: 1000 }}>
                        {/* this is the image */}
                        <LeftSide />
                    </div>
                    <div className="col-md-6 mt-5 text-center" id={"heroText"}>
                        {/* this is the text && the button part  */}
                        <RightSide />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PartOne;
