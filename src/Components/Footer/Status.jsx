import React from "react";
import './footer.css'
const ProductStatus = (props) => {
    const { details } = props;
    return (
        <div className="return">
            {
                details.map((val) => {
                    return (<div className="return-content" key={Math.random()}>
                        <img src={val.imgUrl} alt="status" />
                        <span>{val.title}</span>
                    </div>)
                })
            }
        </div>
    )
}
export default ProductStatus;
