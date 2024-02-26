import { useSelector } from 'react-redux';
import './cart.scss'
import React from 'react';
const Cartright = (props) => {
    const {cartData, cartTotal} = useSelector(state=>state.cart) || {};
    return  cartData && cartData[0] &&(
        <div className="cart-right">
            <div className='apply-coupons'>
                <h3>coupons</h3>
                <div className="coupons">
                    <div className='coupan-icon'>
                       <div><i className="fa-solid fa-tag"></i></div>
                        <div>Apply Coupons</div>
                    </div>
                    <div>
                        <button>Apply</button>
                    </div>
                </div>
            </div>
            <div className='gift'>
                <h3>GIFTING & PERSONALISATION</h3>
                <div className='gift-card'>
                    <div>
                        <img src='https://constant.myntassets.com/checkout/assets/img/gift-big.webp' alt='gift' />
                    </div>
                    <div>
                        <h3 className='title'>Buying for a loved one?</h3>
                        <p className='discription'>Gift wrap and personalsised message on card, only for ₹25</p>
                        <button>ADD GIFT WRAP</button>
                    </div>
                </div>
            </div>
            <div className='price-details'>
                <h3>PRICE DETAILS (1 item)</h3>
                <div className='total-price'>
                    <div className='price-title'>
                        <p>Total MRP</p>
                        <p>Discount on MRP</p>
                        <p>Coupon Discount</p>
                        <p>Platform Fee <button>Know more</button></p>
                        <p>Shipping Fee <button>Know more</button></p>
                    </div>
                    <div className='price'>
                        <p>₹{cartData[0].totalPrice}</p>
                        <p className='discount'>-₹{cartData[0].discountOnMrp}</p>
                        <p className='discount-coupan'>Apply Coupon</p>
                        <p>₹20</p>
                        <p className='shippig-fee'><del>₹79</del> <span>FREE</span></p>
                    </div>
                </div>

            </div>
            <div className='total-amount'>
                <div className='cartTotal'>
                    <h3>Total Amount</h3>
                    <h3>₹{cartTotal}</h3>
                </div>
                <button>PLACE ORDER</button>
            </div>
        </div>
    )
}

export default Cartright;