import React from "react";
import DownSide from "./DownSide";

const cardStyle = {
    background:
        "linear-gradient(180deg, rgba(31,32,66,1) 10%, rgba(86,227,189,1) 60%)",
    borderTopLeftRadius: "24px",
    borderBottomRightRadius: "24px",
    position: "relative"
};

const secondStyle = {
    paddingTop: "1rem",
    paddingBottom: "2rem",
    marginTop: "1rem"
};

const pStyle = {
    fontSize: "28px",
    fontWeight: "bolder"
};

const priceStyle = {
    fontWeight: "bold",
    fontSize: "23px",
    color: "rgba(31,32,66,1)",
    display: "inline-block"
};

const monthStyle = {
    fontWeight: "light",
    fontSize: "18px"
};

function Card({ title, subTitle, price }) {
    return (
        <div className="card text-white mb-5" style={cardStyle}>
            <div
                style={{
                    position: "absolute",
                    top: "5px",
                    left: "10px",
                    transform: "rotate(50deg)",
                    fontSize: "30px",
                    opacity: "0.4"
                }}
            >
                <i
                    className="fa fa-star"
                    aria-hidden={true}
                    style={{ color: "rgba(86,227,189,1)" }}
                />
            </div>
            <div style={secondStyle}>
                <div className="text-center">
                    <p style={pStyle}>
                        {title}
                        <br />
                        {subTitle &&
                            <span>
                                {subTitle}
                            </span>}
                        <span style={priceStyle}>
                            دج {price} {" "}
                        </span>
                        <br />
                        <span style={monthStyle}>شهريا</span>
                    </p>
                    <DownSide />
                    <div className="text-center">
                        <button
                            className="btn btn-success px-4"
                            style={{
                                backgroundColor: "rgba(31,32,66,1)",
                                color: "white"
                            }}
                        >
                            التسجيل
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
