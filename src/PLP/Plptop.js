import React from "react";
import './plp.scss'
import { Link } from "react-router-dom";
const Plptop = (props) => {
    const plpTop = props.plpTop
    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    
    return plpTop.length&&(
        <div className="plp-top">
            <div><Link to='/'>Home</Link>/ <b>{Capitalize(plpTop[0].catogory)} {Capitalize(plpTop[0].subCatogory)}</b></div>
            <div><b>{Capitalize(plpTop[0].catogory)} {Capitalize(plpTop[0].subCatogory)}</b>-{plpTop.length} items</div>
            <div className="filter-items">
                <div className="filter-details">
                    <div className="clear">
                        <div className="filter">FILTERS</div>
                        <div className="clear-all">CLEAR ALL</div>
                    </div>
                    <div className="bundles">Bundles</div>
                    <div className="country-of-origin">Country of Origin</div>
                    <div className="size">Size</div>
                </div>
                <div className="recommended">
                    <div>Sort by:<b>Recommended</b></div>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            </div>
        </div>
    )
}
export default Plptop;