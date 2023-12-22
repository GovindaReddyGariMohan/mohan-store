import React, { useEffect } from "react";
import './cart.scss'
import Plpproducts from "../constants/plpPdpConstants";
import Cartleft from "./cartLeft/CartLeft";
import Cartright from "./cartRight";
import Cartbottom from "./cartBottom";
import { useDispatch, useSelector } from "react-redux";
import { toggleProfileModal } from "../redux/actions/appActions";
import { addItem } from "../redux/actions/cartActions";
const Cart = () => {
    const { cartData } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        const items = localStorage.getItem('cart')
        if (items !== null) {
            const cartItemIds = items.split(",");
            if (cartItemIds.length > 0) {
                const filterId = Plpproducts.filter((items) => cartItemIds.some((id) => items.id === id))
                dispatch(addItem(filterId))
            }
        }
        dispatch(toggleProfileModal(true))
        return () => dispatch(toggleProfileModal(false))
    }, [])

    const cartItems = localStorage.getItem('cart')
    if (cartItems === null) {
        return (
            <div className="cart-items">Cart is Empty Please Add The Items to The Cart</div>
        )
    } else {
        return cartData && (
            <div className="cart">
                <div className="row">
                    <div className="col-7">
                        <Cartleft />
                    </div>
                    <div className="col-5">
                        <Cartright />
                    </div>
                </div>
                <div>
                    <Cartbottom />
                </div>
            </div>
        )
    }
}
export default Cart;