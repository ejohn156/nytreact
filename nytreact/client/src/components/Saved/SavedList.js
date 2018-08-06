import React from "react"
import "./Saved.css"


const SavedList = (props) => (
    <ul className="list-group list-group-flush">{props.children}</ul>
)

export default SavedList