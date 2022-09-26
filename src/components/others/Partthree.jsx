import React, { Component } from "react";
import Card from "../parts/part-three/card/Card";
import { cardItems, specialCardItems } from "../parts/part-three/cardItems";

class Partthree extends Component {
    render() {
        return (
            <div style={{ paddingBottom: "50px" }}>
                <div className="container">
                    <h3 className="text-center" style={{ paddingTop: "20px" }}>
                        دروس الدعم
                    </h3>
                    <h5 className="text-center" style={{ marginTop: "30px" }}>
                        لقد أعددنا خطط تسعير للجميع، حتى تتمكن من البدء على
                        الفور. كما توجد عروض وتخفيضات للمسجلين في أكثر من مادة.
                    </h5>

                    <i
                        className="fa fa-star-o"
                        style={{ color: "red", fontSize: "50px" }}
                    />

                    <div className="container">
                        <div className="row" style={{ marginTop: "40px" }}>
                            {/* <div className="col-md-3 col-sm-10 offset-md-1">
                                <Card title="الطور المتوسط" price="1000" />
                            </div> */}
                            {cardItems.map(item => {
                                return (
                                    <div
                                        className="col-md-3 col-sm-10 offset-md-1 offset-sm-2"
                                        key={item.title}
                                    >
                                        <Card
                                            title={item.title}
                                            price={item.price}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <div className="row">
                            {specialCardItems.map(item => {
                                return (
                                    <div
                                        className="col-md-3 col-sm-10 offset-md-1 offset-sm-2"
                                        key={item.title}
                                    >
                                        <Card
                                            title={item.title}
                                            price={item.price}
                                            subTitle={item.subTitle}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Partthree;
