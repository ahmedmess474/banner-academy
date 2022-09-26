import React from "react";
import { Link } from "react-scroll";
import { logo } from "../../../utilities/images";

function Brand() {
    return (
        <Link
            className="navbar-brand"
            to="/"
            style={{ marginLeft: "80px", color: "white" }}
        >
            <img
                src={logo}
                alt="banner academy logo"
                style={{
                    marginLeft: "10px",
                    height: "45px",
                    width: "45px",
                    borderRadius: "22px"
                }}
            />
            أكاديمية بانر
        </Link>
    );
}

export default Brand;
