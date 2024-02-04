import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { shopApi } from "../services/shopAPI";
import { authApi } from "../services/authAPI";
import shopSlice from "../features/shop/shopSlice";
import cartSlice from "../features/cart/cartSlice";
import authSlice from "../features/auth/authSlice";

const store = configureStore({
    reducer: {
        shop: shopSlice,
        cart: cartSlice,
        auth: authSlice,
         [shopApi.reducerPath]: shopApi.reducer,
         [authApi.reducerPath]: authApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware)
})


setupListeners(store.dispatch);


export default store;