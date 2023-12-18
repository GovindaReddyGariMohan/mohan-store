import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import catagory from "../../constants/shopConstants"
import './Shopproduct.css';
import SwitchComponent from "../Switchcomponent";
const Shop = (props) => {
    const [data] = useState({ ...catagory })
    const pathname = useLocation().pathname.split("/")[2];
    return (
        <div>
            {
                data[pathname].map((item, index) => (
                    <div key={`product${index}`}>
                        <SwitchComponent type={item.type} {...item} />
                    </div>
                ))
            }
        </div>
    )
}

export default Shop;
