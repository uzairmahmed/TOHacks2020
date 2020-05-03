import React from "react";
import "./App.css";

function Bodytext(){
    var x = 7;
    return (
        <div className="bodytext" align= "center">
                <h2>{x} minutes until the next person can enter!</h2>
        </div>
    );
}

export default Bodytext;

