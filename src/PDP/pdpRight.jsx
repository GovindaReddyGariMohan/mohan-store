import React from "react";
import './pdp.scss'
import { useDispatch, useSelector } from "react-redux"; 
import { addItem } from "../redux/actions/cartActions";
import { addWishlist } from "../redux/actions/wishlistActions";
const Pdpleft = (props) => {
    const productDetails = props.productDetails
    const dispatch = useDispatch()
     const { cartData } = useSelector((state) => state.cart)
    const { wishlistData } = useSelector((state) => state.wishlist) || {}
    const handleAddToCart = async () => {
        const get = localStorage.getItem('cart');
        let item = productDetails[0].id
        localStorage.setItem("cart", `${item},${get}`)
        setTimeout(() => {
            dispatch(addItem(productDetails, true))
        }, 500)

    }
    const handleWishlist = () => {
        const getItems = localStorage.getItem('wishlist')
        let item = productDetails[0].id
        localStorage.setItem("wishlist", `${item},${getItems}`)
        setTimeout(() => {
            dispatch(addWishlist(productDetails, true))
        }, 500)
    }
    return (
        <div className="order-details"> 
            {
                productDetails && productDetails.length && productDetails.map((val) => {
                    return (
                        <div className="details" key={Math.random()}>
                            <h2 className="title">{val.title}</h2>
                            <p className="description">{val.description}</p>
                            <div className="rating">3.4<i className="fa-solid fa-star"></i>| 12 Ratings</div>
                            <hr />
                            <h3 className="price">Rs.{val.price} <del className="totalprice">MRP RS.{val.totalprice}</del> <span>({val.offer}OFF)</span></h3>
                            <p className="tax">inclusive of all taxes</p>
                            <h4 className="onesize">SELECT SIZE</h4>
                            <button className="onesize-button">
                                OneSize
                            </button>
                            <div className="add-btn">
                                <button className="add-to-bag-button pointer" onClick={handleAddToCart}> <i className="fa-solid fa-briefcase"></i>  ADD TO BAG</button>
                                <button className="wishlist pointer" onClick={() => handleWishlist(val.id)}><i className="fa-regular fa-heart"></i> WISHLIST</button>
                            </div>
                            <hr />
                            <p className="item-price"><b> <i className="fa-solid fa-indian-rupee-sign"></i> {val.price}</b></p>
                            <p className="item-seller">Seller:<span className="seller">{val.seller}</span></p>
                            <hr className="seller-border"/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Pdpleft;