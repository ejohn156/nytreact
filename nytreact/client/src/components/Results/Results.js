import React from "react"
import "./Results.css"


const Results = (props) => (
    <ul className="list-group list-group-flush">{props.children}</ul>
)

export default Results
