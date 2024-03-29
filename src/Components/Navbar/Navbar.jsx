import React, { useState } from "react";
import './navbar.scss';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import icon from '../../assets/store-logo.jpeg'
const Navbar = () => {
    const { cartData } = useSelector((state) => state.cart)
    const path = useLocation().pathname.split('/')[1]
    const [active, setActive] = useState(false)
    const handleNavbar = () => {
        setActive(active ? false : true)
    }
    const items = [
        {
            item: 'MEN',
            to: 'shop/men',
            className: 'Men',
        },
        {
            item: 'WOMEN',
            to: 'shop/womens',
        },
        {
            item: 'KIDS',
            to: 'shop/men',
        },
        {
            item: 'HOME & LIVING',
            to: 'shop/womens',
        },
        {
            item: 'BEAUTY',
            to: 'shop/men'
        },

    ]
    if (path === 'bag') {
        return (
            <div className="bag-nav-bar">
                <Link to='/'>
                    <div className="nav-logo">
                        <img src={icon} alt="logo" />
                    </div>
                </Link>
                <div className="bag-process">
                    <div>BAG</div>
                    <div>--------ADDRESS--------</div>
                    <div>PAYMENT</div>
                </div>
                <div className="secure-icon">
                    <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" alt="navbar" />
                    <div>100% SECURE</div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="nav-bar">

                <i className={active ? "fas fa-times " : "fas fa-bars active"} onClick={handleNavbar}></i>
                <Link to='/'>
                    <div className="nav-logo">
                        <img src={icon} alt="logo" />
                    </div>
                </Link>
                <div className="items">
                    <ul className={active ? "nav-items " : "active-item nav-items"} >
                        <li className="close-side-bar" onClick={() => setActive(false)}><i className="fa-solid fa-x"></i></li>
                        {
                            items.map((value)=>{
                               return <li onClick={() => setActive(false)} className={value.className} key={Math.random()}><Link to={value.to} >{value.item}</Link></li>
                            })
                        }
                        <li onClick={() => setActive(false)}><Link to='shop/womens' >STUDIO <sup className="new">NEW</sup></Link></li>
                    </ul>
                </div>
                <div className="nav-search">
                    <input type="text" placeholder="Search for products,Brands and more" />
                </div>
                <div>
                    <ul className="nav-items2">
                        <li><Link to='/profile' >Profile <div className="font-icon"><i className="fa-solid fa-user"></i></div></Link></li>
                        <li><Link to='/wishlist' >Wishlist <div className="font-icon"><i className="fa-regular fa-heart"></i></div></Link></li>
                        <li><Link to='/bag' >Bag <div className="font-icon"><i className="fa-solid fa-bag-shopping"></i><span className="cart-length">{cartData?.length}</span></div></Link></li>
                    </ul>
                </div>


            </div>
        )
    }

}

export default Navbar;