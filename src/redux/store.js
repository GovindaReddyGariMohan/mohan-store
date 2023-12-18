import { cartReducer } from "./reducers/cartReducer";
import { appReducer } from "./reducers/appReducer";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
    reducer: {
        app: appReducer,
        cart: cartReducer
    }
})

export default store;