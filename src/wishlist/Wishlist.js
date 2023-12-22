import './wishlist.scss'
import react, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Close from '../assets/close.png'
import Plpproducts from '../constants/plpPdpConstants'
import { addWishlist, deleteWishlist } from '../redux/actions/wishlistActions';
import { addItem } from '../redux/actions/cartActions';
const Wishlist = () => {
    const { wishlistData } = useSelector((state) => state.wishList)
    const dispatch = useDispatch()
    useEffect(() => {
        const wishList = localStorage.getItem('wishlist')
        if (wishList !== null) {
            const wishlistId = wishList.split(',')
            if (wishlistId.length > 0) {
                const WishlistItem = Plpproducts.filter((items) => wishlistId.some((id) => items.id === id))
                dispatch(addWishlist(WishlistItem))
            }
        }
    }, [])
    const removeWishlist = (removeId) => {
        let wishlistId = localStorage.getItem('wishlist').split(",");
        wishlistId = wishlistId.filter(element => element !== removeId);
        dispatch(deleteWishlist(removeId))
        localStorage.setItem('wishlist', wishlistId);
    }
    const handleAddtobag = (removeId) => {
        let wishlistId = localStorage.getItem('wishlist').split(",");
        wishlistId = wishlistId.filter(element => element !== removeId);
        dispatch(deleteWishlist(removeId))
        localStorage.setItem('wishlist', wishlistId);
        const get = localStorage.getItem('cart');
        let item = removeId
        localStorage.setItem("cart", `${item},${get}`)
        const wishlistToCart = Plpproducts.filter((value) => value.id === removeId)
        setTimeout(() => {
            dispatch(addItem(wishlistToCart, true))
        }, 500)
    }
    const listItems=localStorage.getItem('wishlist')
    if (listItems===null) {
        return<div className='wish-list-empty'>Wishlist is Empty Please Add Items</div>
    } else {
        return wishlistData && (
            <div className='add-wishlist'>
                <div><span className='title'>My Wishlist</span> <span>{wishlistData.length} items</span></div>
                <div className='wishlist-items row'>
                    {
                        wishlistData.map((value) => {
                            return (
                                <div className='col-2 wislistItem' key={Math.random()}>
    
                                    <div className='item'>
                                        <img src={value.imgUrl} alt='wishlist' />
                                        <p className='description'>{value.description}</p>
                                        <p className='product-price'><span className='price'>Rs.{value.price}</span> <del className='totalPrice'>Rs.{value.totalPrice}</del> <span className='offer'>({value.offer})</span></p>
                                        <img src={Close} alt='close' className='close-item' onClick={() => removeWishlist(value.id)} />
                                        <button className='move-to-bag' onClick={() => handleAddtobag(value.id)}>
                                            MOVE TO BAG
                                        </button>
    
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    
}
export default Wishlist;