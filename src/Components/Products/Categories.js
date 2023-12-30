import './Products.css';
import ShopCategory from '../../constants/Shop-category';
import { Link } from 'react-router-dom';
const Categories = () => { 
    return (
        <>
            <div className="category">
                <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/2f5fdc10-286a-41d2-add8-0d62879838ba1700727715279-Cart-Worthy-Categories.jpg" alt="category" />
            </div>
            <div className='shop-category '> 
                {
                    ShopCategory.map((val) => {
                        return (<Link to={val.linkUrl} key={Math.random()}><img src={val.imgUrl} alt='shop-category' key={Math.random()} /></Link>)
                    })
                }
            </div>
        </>
    )
}

export default Categories;