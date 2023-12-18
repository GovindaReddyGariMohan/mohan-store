import React from "react";
import './Footer.css'
const Mobileapp = (props) => {
    const { images, title } = props;
    return (
        <div className="mobile-app img">
            <h3>{title}</h3>
            {
                images.map((val) => {
                    return (<img src={val.imgUrl} alt="mobile" key={Math.random()} />)
                })
            }
        </div>
    )
}

export default Mobileapp;