import React from "react";
import './posters.css'
import {Link} from 'react-router-dom'
const Posters = () => {
    
    return ( 
        <div className="poster">
            <div className="poster-offer">
                <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/99cb1121-33ed-464c-997f-1e7a1e950cc31700744537200-MSB-Coupon-400.jpg" alt="poster" />
            </div>
            <div className="poster-men-women">
               <Link to='/shop/men'><img src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/FEBRUARY/28/lh2K61ci_e76dbb84d7374ce9af719fe1e18bf81d.jpg" /></Link>
               <Link to='/shop/womens'><img src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/FEBRUARY/28/rY6himCz_14be1f133ba24d26a00fc44a36c33c2d.jpg" /></Link>
            </div>
        </div>
    )
}

export default Posters;
