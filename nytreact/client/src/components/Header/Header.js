import React from "react"
import "./Header.css"

const Header = () => (
    <div className="row">
        <div className="col-md-12 header">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h1 className="headerTitle">New York Times Article Scrubber</h1>
                </div>
            </div>
            <h4 className="des">Search for and annotate articles of interest</h4>
        </div>
    </div>
)

export default Header