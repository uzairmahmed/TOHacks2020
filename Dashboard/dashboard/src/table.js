import React from "react";
import "./App.css";

function Table(props) {
    return (
        <div className="table">
        <table style={{"borderBottom":"1px solid black", "borderCollapse": "collapse", width: "100%"}}>
            <thead>
                <tr>
                    <th style={{"border":"1px solid black"}}align = "center">Name</th>
                    <th style={{"border":"1px solid black"}}align = "center">Time</th>
                </tr>

            </thead>
            <tbody>
                {
                    props.data.map(row =>(
                        <tr>
                            <td style={{"border":"1px solid black"}} align = "center">{row.Name}</td>
                            <td  style={{"border":"1px solid black"}}align = "center">{row.Time}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    )
}
export default Table;

