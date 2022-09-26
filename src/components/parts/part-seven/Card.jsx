import React, { useState } from "react";
import cardItems from "./cardItems";

function Card({ desc }) {
    return (
        <div className="container">
            <p
                style={{
                    direction: "rtl",
                    marginTop: "10px",
                    color: "black",
                    fontSize: "small"
                }}
            >
                {desc}
            </p>
        </div>
    );
}

export default Card;
