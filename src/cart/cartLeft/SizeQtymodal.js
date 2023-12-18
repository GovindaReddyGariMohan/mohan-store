import React from "react";
import closeIcon from '../../assets/close.png'
const SizeQtyModal = ({ handleClose, type, submitHandler, productSize, setProductSize, cartleft, setQtyNum, qtyNum, cartItems, index, ...props }) => {

    return (
        <>
            <div className="header">
                <img className="pointer" src={closeIcon} alt="close" onClick={handleClose} />
            </div>
            <div className="body">
                {
                    type === "qty" ? (<div className="product-quantity">
                        <div className="product-qty">
                            <div className="heading">
                                <div className="title">Select Quantity</div>
                            </div>

                            <div >
                                <div className="select-quantity">
                                    <div class="checkbox-wrapper row">
                                        {[...Array(10)].map((e, i) => {
                                            return (
                                                <div onClick={() => setQtyNum(i + 1)} className={qtyNum === (i + 1) ? 'checked col-1 quqntity' : 'col-1 quqntity'}>
                                                    <div>{i + 1}</div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>
                            </div>
                            <button onClick={submitHandler}>DONE</button>
                        </div>
                    </div>) : (
                        <>
                            <div className="product-size">
                                <div className="madel-size">
                                    <div className="madel-top">
                                        <div className="size">
                                            <div>
                                                <img src={cartItems[index].imgUrl} alt="size" />
                                            </div>
                                            <div>
                                                <div className="imag-title"><b>{cartItems[index].title}</b></div>
                                                <div className="imag-discription">{cartItems[index].pdpImages?.details[0].description}</div>
                                                <div className="imag-price"><b>₹{cartItems[index].price}</b> <del>₹{cartItems[index].totalPrice}</del> <span>{cartItems[index].offer}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="select-item-size">
                                        <hr />
                                        <h3>Select Size</h3>
                                        <div className="select-size">
                                            <div className="checkbox-wrap ">
                                                {[...Array(6)].map((item, index) => {
                                                    return (
                                                        <div key={`size_${index}`} onClick={() => setProductSize(index + 6)} className={productSize === (index + 6) ? 'checked size' : 'size'} >
                                                            <div>{index + 6}</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="seller">Seller:<b>{cartItems[index].pdpImages.details[0].seller}</b></div>
                                    </div>
                                    <button onClick={submitHandler}>DONE</button>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
            <div className="footer">
            </div>
        </>
    )
}

export default SizeQtyModal