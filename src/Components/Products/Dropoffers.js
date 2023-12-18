import './Products.css';
import Product from '../../constants/Shop_products';
import { Link } from 'react-router-dom';
const Dropoffers = () => {
    return (
        <>
            <div className='drop-offer'>
                <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/402dc30e-c67a-433f-ac0d-8bfda47b71481700727715269-Bargain-Bonanza.jpg" alt="drop-offers" />
            </div>
            <div className='shop-products'>
                {
                    Product.map((val) => {
                        return (<Link to={val.linkUrl} key={Math.random()}><img src={val.imgUrl} alt='shop-products' key={Math.random()} /></Link>)
                    })
                }
            </div>
        </>
    )
}

export default Dropoffers;