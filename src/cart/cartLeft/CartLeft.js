import React from "react"
import { useState } from "react";
import Discount from '../../assets/discount.png'
import Modal from "../../Components/Modal/Modal";
import SizeQtyModal from "./SizeQtymodal";
import "./cartLeft.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";

const Cartleft = ({ ...props }) => {
    const { cartData } = useSelector(state => state.cart) || {};
    const [isOpenModal, setIsOpenModal] = useState({ show: false, name: "" })
    const dispatch = useDispatch()
    const removecartData = (removeId) => {
        let cartItemIds = localStorage.getItem('cart').split(",");
        cartItemIds = cartItemIds.filter(element => element !== removeId);
        dispatch(deleteItem(removeId))
        localStorage.setItem('cart', cartItemIds);
    }
    const items = [
        {
            details: 'Up to ₹1000 Cashback on CRED pay UPI(Android Divices Only) On a minimum spend of ₹1000.TCA'
        },
        {
            details: 'Flat ₹75 Cashback on First Ever Mobikwik Wallet transaction on Myntra on a min spend of ₹999'
        },
        {
            details: 'Get upto 10% Cashback on Mobikwik Wallet transaction'
        },
        {
            details: 'Flat ₹100 on Airtel Payments Bank transaction'
        }
    ]
    const [activeIndex, setActiveIndex] = useState(false);
    const [unit, setUnit] = useState("more");
    const handleClick = () => {
        if (unit === "more") {
            setUnit("less");
        } else {
            setUnit("more");
        }
        setActiveIndex(activeIndex ? false : true);
    };
    const [size, setSize] = useState(false);
    const [qty, setQty] = useState(false)
    const [index, setIndex] = useState()
    const openHandler = (index) => {
        setIsOpenModal({ show: !isOpenModal.show, name: "size" })
        setIndex(index)
        setSize(size ? false : true)
    }
    const qualityHandler = () => {
        setIsOpenModal({ show: !isOpenModal.show, name: "qty" })
        setQty(qty ? false : true)
    }

    const [productSize, setProductSize] = useState(0)
    const [sizes, setSizes] = useState(productSize)
    const [qtyNum, setQtyNum] = useState(0)
    const [qtys, setQtys] = useState(qtyNum)
    const submitHandler = () => {
        return (
            setIsOpenModal(false),
            setSizes(productSize),
            setQtys(qtyNum)
        )
    }
    const close = () => { setIsOpenModal(!isOpenModal) }
    return (
        <div className="cart-left">
            <div className="delivery-service">
                <div className="check-service">Check delivery time & services</div>
                <button >ENTER PIN CODE</button>
            </div>
            <div className="available-offers">
                <div className="title">
                    <img src={Discount} alt="discount" />
                    Available Offers
                </div>
                <div className="offers-details">
                    <ul>
                        <li>
                            7.5% instant Discount on every spends with Myntra Kotak Credit Card.TCA
                        </li>
                        <div >
                            {
                                activeIndex && items.map((val) => {
                                    return (<li key={Math.random()}>{val.details}</li>)
                                })
                            }
                        </div>
                        <button onClick={handleClick}>Show {unit}</button>
                    </ul>
                </div>
            </div>
            <div className="selected-items">
                <div className="checkbox">
                    <input type="checkbox" />
                    <label >ITEMS SELECTED</label>
                </div>
                <div className="add-remove-items">
                    <div className="remove">
                        REMOVE
                    </div>
                    <div className="border">

                    </div>
                    <div className="wishlist">
                        MOVE TO WISHLIST
                    </div>
                </div>
            </div>
            <div>
                {
                    cartData && cartData.length && cartData.map((cartItem, index) => (
                        <div className="cart-images-details" key={`cart-itm${index}`}>
                            <i className="fa-solid fa-xmark pointer remove-items" onClick={() => removecartData(cartItem.id)}></i>
                            <div className="cart-images" key={Math.random()}>
                                <div>
                                    <Link to={`/shop/${cartItem.catogory}/${cartItem.subCatogory}/${cartItem.id}`}><img src={cartItem.imgUrl} alt="cart" /></Link>
                                </div>
                                < div key={Math.random()} className="imag-details">
                                    <div className="imag-title"><b>{cartItem.title}</b></div>
                                    <div className="imag-discription">{cartItem.pdpImages.details.description}</div>
                                    <div className="imag-seller">Sold by:{cartItem.pdpImages.details.seller}</div>
                                    <div className="imag-qty"><span onClick={() => openHandler(cartItem.id)}><b>Size:{sizes} <i className="fa-solid fa-caret-down"></i></b></span> <span onClick={qualityHandler}><b>Qty:{qtys} <i className="fa-solid fa-caret-down"></i></b></span></div>
                                    <div className="imag-price"><b>₹{cartItem.price}</b> <del>₹{cartItem.totalPrice}</del> <span>({cartItem.offer})</span></div>
                                    <div className="return"><i className="fa-solid fa-rotate-left"></i> <b>14 days</b> return available</div>
                                </div>
                            </div>


                        </div>
                    ))
                }
            </div>
            <div className="add-more-to-wishlist">
                <div>
                    <div><i className="fa-regular fa-bookmark"></i> <span>Add More From Wishlist</span></div>
                </div>
                <div>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div>
                {
                    isOpenModal.show &&
                    <Modal close={close}>
                        <SizeQtyModal handleClose={close} type={isOpenModal.name} submitHandler={submitHandler} productSize={productSize} setProductSize={setProductSize} setQtyNum={setQtyNum} qtyNum={qtyNum} {...props} cartData={cartData} index={index} />
                    </Modal>
                }
            </div>
        </div>
    )
}

export default Cartleft;