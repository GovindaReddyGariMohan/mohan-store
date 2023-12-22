import { ADD_TO_WISHLIST, DELETE_TO_WISHLIST } from "../actions/actionTypes";
const initialState = {
  wishlistData: []
};
export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      let wishlistData = [];
      if (action.pushCurrent) {
        wishlistData = [...state.wishlistData]
      }
      wishlistData.push(...action.payLoad)

      return {
        ...state,
        wishlistData
      };
    case DELETE_TO_WISHLIST:
      const wishlistItems = state.wishlistData.filter((wishlistItem) => {
        return wishlistItem.id !== action.payLoad
      })
      return {
        ...state,
        wishlistData: [...wishlistItems]
      };
    default:
      return state;
  }
};
