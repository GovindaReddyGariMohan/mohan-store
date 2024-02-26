import './products.css';
import Categories from "./Categories"
import Dropoffers from "./Dropoffers"
const Products = () => {
    return (
        <div>
            <Dropoffers />
            <Categories />
            <div className="more-offers">
                <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/11/23/28ecdb63-ba1f-4c8a-902e-355988bc8fbf1700729917736-App-Install-Banner.jpg" alt="banner" />
            </div>
        </div>
    )
}

export default Products;