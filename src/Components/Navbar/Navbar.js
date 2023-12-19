import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from '../../assets/Mstore.png'
const Navbar = () => {
    const { cartData } = useSelector((state) => state.cart)
    return (
        <div className="nav-bar">
            <Link to='/'> <div className="nav-logo">
                <img src={Logo} alt="logo" />
            </div>
            </Link>
            <div>
                <ul className="nav-items">
                    <li><Link to='shop/men' >MEN</Link></li>
                    <li><Link to='shop/womens' >WOMEN</Link></li>
                    <li><Link to='shop/men' >KIDS</Link></li>
                    <li><Link to='shop/womens' >HOME & LIVING</Link></li>
                    <li><Link to='shop/men' >BEAUTY</Link></li>
                    <li><Link to='shop/womens' >STUDIO <sup>NEW</sup></Link></li>
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

export default Navbar;