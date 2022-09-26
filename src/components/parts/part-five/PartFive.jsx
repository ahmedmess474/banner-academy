import React from "react";
import Form from "./Form";
import Header from "./Header";
import Infos from "./Infos";

function PartFive() {
    return (
        <div className="container py-5">
            <Header />
            <div className="row">
                <>
                    <Infos />
                </>
                <>
                    <Form />
                </>
            </div>
        </div>
    );
}

export default PartFive;
