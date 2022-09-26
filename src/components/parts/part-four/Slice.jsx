import React from "react";
import slices from "./slices";

function Slice() {
    return (
        <>
            {slices.map(item => {
                if((parseInt(item.id) % 2) !== 0){
                    return (
                        <div className="row my-5">
                            <div className="col-md-6">
                                <div className="container" >
                                    <div style={{paddingTop: "140px" ,paddingBottom: "40px"}}>
                                        <h4 className="text-center" style={{ direction: "rtl" }}>
                                            {item.title}
                                        </h4>
                                        <span style={{ direction: "rtl", textAlign: "center" }}>
                                            <p>
                                                {item.paragraph}
                                            </p>
                                        </span>
                                        <div className="text-center">
                                            <button className="btn btn-success">سجل معنا</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" style={{paddingBottom: "50px"}}>
                                <img src={item.image} height="100%" width="100%" alt="" />
                            </div>
                        </div>
                    )
                }else{
                    return (
                        <div className="row my-5">
                            <div className="col-md-6" style={{paddingBottom: "50px"}}>
                                <img src={item.image} height="100%" width="100%" alt="" />
                            </div>
                            <div className="col-md-6" >
                                <div className="container" >
                                    <div style={{paddingTop: "140px",paddingBottom: "40px"}}>
                                        <h4 className="text-center" style={{ direction: "rtl" }}>
                                            {item.title}
                                        </h4>
                                        <span style={{ direction: "rtl", textAlign: "center" }}>
                                            <p>
                                                {item.paragraph}
                                            </p>
                                        </span>
                                        <div className="text-center">
                                            <button className="btn btn-success">سجل معنا</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </>
    );
}

export default Slice;
