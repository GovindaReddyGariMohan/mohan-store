import React from "react";
import './plp.scss'
import { Link } from "react-router-dom";
const Plpright = (props) => {
    const plpProduct = props.plpRight
    return (
        <div className="plpright">
            <div className="row">
                <div className="col-12 plp-right-images">
                    <div className="row">
                        {
                            plpProduct.map((val) => {
                                return (
                                    <div className="col-2" key={Math.random()}>
                                        <Link to={val.linkUrl}>
                                            <img src={val.imgUrl} alt="imag" key={Math.random()} />
                                            <h4>{val.title}</h4>
                                            <p className="imag-description">{val.description}</p>
                                            <p className="plp-prices"><b>Rs.{val.price}</b> <del>Rs.{val.totalPrice}</del><span>({val.offer})</span></p>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plpright;