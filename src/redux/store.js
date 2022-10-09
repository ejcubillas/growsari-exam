import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart.slice";
import orderSlice from "./slices/order.slice";
import productSlice from "./slices/product.slice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    order: orderSlice,
    product: productSlice
  },
});


export default store;