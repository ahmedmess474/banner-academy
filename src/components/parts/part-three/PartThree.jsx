import React from "react";
import Header from "./Header";
import { cardItems, specialCardItems } from "./cardItems";
import Card from "./card/Card";

function PartThree() {
    return (
        <div>
            <Header />
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
                                <Card title={item.title} price={item.price} />
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
    );
}

export default PartThree;
