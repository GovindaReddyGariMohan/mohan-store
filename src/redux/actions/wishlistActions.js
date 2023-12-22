import { ADD_TO_WISHLIST, DELETE_TO_WISHLIST } from "./actionTypes";
const addWishlist = (payLoad, pushCurrent) => {
  return {
    type: ADD_TO_WISHLIST,
    payLoad,
    pushCurrent
  };
};
const deleteWishlist = (payLoad) => {
  return {
    type: DELETE_TO_WISHLIST ,
    payLoad,
  };
};

export { addWishlist, deleteWishlist };