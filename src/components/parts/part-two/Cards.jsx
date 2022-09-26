import React from "react";
import cardItems from "./cardItems";
import "./card.css";


function Cards() {
    return (
        <>
            {cardItems.map(item => {
                return (
                    <div className="col-md-3 pb-3" style={{}} key={item.id}>
                        <div
                            className="card cardhover"
                            style={{
                                backgroundColor: "white",
                                height: "330px",
                                boxShadow: "21px 16px 47px -12px rgba(31,32,66,0.6)",
                                cursor: "pointer"
                            }}
                        >
                            {item.image}
                            <h4
                                className="text-center"
                                style={{ cursor: "pointer" }}
                            >
                                {item.title}
                            </h4>
                            <div className="container">
                                <h6
                                    className="text-center"
                                    style={{
                                        marginTop: "40px",
                                        marginBottom: "20px"
                                    }}
                                >
                                    {item.body}
                                </h6>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Cards;
