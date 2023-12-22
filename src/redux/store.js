import { cartReducer } from "./reducers/cartReducer";
import { appReducer } from "./reducers/appReducer";
import { configureStore } from "@reduxjs/toolkit";
import { wishlistReducer } from "./reducers/wishlistReducer";
const store = configureStore({
    reducer: {
        app: appReducer,
        cart: cartReducer,
        wishList:wishlistReducer
    }
})

export default store;