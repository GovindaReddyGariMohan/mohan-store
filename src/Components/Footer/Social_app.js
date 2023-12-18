import React from "react";
import './Footer.css'
const Socialapp = (props) => {

    const { appLink, title } = props;
    return (<div className="social-app">
        <h3>{title}</h3>
        {
            appLink.map((val) => {
                return (<i className={val.cName} key={Math.random()}></i>)
            })
        }
    </div>)
}
export default Socialapp;